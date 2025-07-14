import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  onSnapshot,
  Timestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TestimonialForm, TestimonialResponse, TestimonialStats } from '@/types/testimonial';

const FORMS_COLLECTION = 'testimonialForms';
const RESPONSES_COLLECTION = 'testimonialResponses';

// Generate a unique form URL
const generateFormUrl = (formId: string) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/feedback/${formId}`;
};

// Generate embed code for testimonials
const generateEmbedCode = (formId: string) => {
  const baseUrl = window.location.origin;
  return `<iframe src="${baseUrl}/embed/testimonials?formId=${formId}" width="100%" height="400" frameborder="0" style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"></iframe>`;
};

// Testimonial Forms
export const createTestimonialForm = async (
  title: string, 
  description?: string, 
  maxResponses?: number, 
  expiryDate?: string
): Promise<TestimonialForm> => {
  const formData = {
    title,
    description,
    isActive: true,
    responsesCount: 0,
    maxResponses: maxResponses || null,
    expiryDate: expiryDate || null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, FORMS_COLLECTION), formData);
  const formId = docRef.id;
  
  // Update with generated URL
  const formUrl = generateFormUrl(formId);
  
  await updateDoc(docRef, {
    formUrl,
  });

  const isExpired = expiryDate ? new Date(expiryDate) < new Date() : false;
  
  return {
    id: formId,
    title,
    description,
    formUrl,
    isActive: true,
    responsesCount: 0,
    maxResponses: maxResponses || undefined,
    expiryDate: expiryDate || undefined,
    isExpired,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

export const getTestimonialForms = async (): Promise<TestimonialForm[]> => {
  const q = query(
    collection(db, FORMS_COLLECTION),
    orderBy('createdAt', 'desc')
  );
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    const isExpired = data.expiryDate ? new Date(data.expiryDate) < new Date() : false;
    
            return {
          id: doc.id,
          title: data.title,
          description: data.description,
          formUrl: data.formUrl,
          isActive: data.isActive,
          responsesCount: data.responsesCount || 0,
          maxResponses: data.maxResponses || undefined,
          expiryDate: data.expiryDate || undefined,
          isExpired,
          createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        };
  });
};

export const updateTestimonialForm = async (
  formId: string, 
  updates: Partial<Pick<TestimonialForm, 'title' | 'description' | 'isActive' | 'maxResponses' | 'expiryDate'>>
): Promise<void> => {
  const docRef = doc(db, FORMS_COLLECTION, formId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
};

export const deleteTestimonialForm = async (formId: string): Promise<void> => {
  // First delete all responses for this form
  const responsesQuery = query(
    collection(db, RESPONSES_COLLECTION),
    where('formId', '==', formId)
  );
  const responsesSnapshot = await getDocs(responsesQuery);
  
  const deletePromises = responsesSnapshot.docs.map(doc => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
  
  // Then delete the form
  await deleteDoc(doc(db, FORMS_COLLECTION, formId));
};

// Testimonial Responses
export const submitTestimonialResponse = async (
  formId: string,
  response: Omit<TestimonialResponse, 'id' | 'formId' | 'isApproved' | 'createdAt' | 'updatedAt'>
): Promise<void> => {
  // Check form validity before submitting
  const formRef = doc(db, FORMS_COLLECTION, formId);
  const formDoc = await getDoc(formRef);
  
  if (!formDoc.exists()) {
    throw new Error('Feedback form not found');
  }
  
  const formData = formDoc.data();
  
  // Check if form is active
  if (!formData.isActive) {
    throw new Error('This feedback form is currently inactive');
  }
  
  // Check if form is expired
  if (formData.expiryDate && new Date(formData.expiryDate) < new Date()) {
    throw new Error('This feedback form has expired');
  }
  
  // Check if max responses limit is reached
  const currentCount = formData.responsesCount || 0;
  if (formData.maxResponses && currentCount >= formData.maxResponses) {
    throw new Error('This feedback form has reached its maximum number of responses');
  }
  
  const responseData = {
    ...response,
    formId,
    isApproved: false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await addDoc(collection(db, RESPONSES_COLLECTION), responseData);
  
  // Update form response count
  await updateDoc(formRef, {
    responsesCount: currentCount + 1,
    updatedAt: serverTimestamp(),
  });
};

export const getTestimonialResponses = async (formId?: string): Promise<TestimonialResponse[]> => {
  let q = query(
    collection(db, RESPONSES_COLLECTION),
    orderBy('createdAt', 'desc')
  );
  
  if (formId) {
    q = query(
      collection(db, RESPONSES_COLLECTION),
      where('formId', '==', formId),
      orderBy('createdAt', 'desc')
    );
  }
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      formId: data.formId,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      rating: data.rating,
      review: data.review,
      service: data.service,
      date: data.date,
      isApproved: data.isApproved,
      createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
    };
  });
};

export const updateTestimonialResponse = async (
  responseId: string,
  updates: Partial<Pick<TestimonialResponse, 'isApproved'>>
): Promise<void> => {
  const docRef = doc(db, RESPONSES_COLLECTION, responseId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
};

export const deleteTestimonialResponse = async (responseId: string): Promise<void> => {
  await deleteDoc(doc(db, RESPONSES_COLLECTION, responseId));
};

// Get testimonial statistics
export const getTestimonialStats = async (): Promise<TestimonialStats> => {
  const [formsSnapshot, responsesSnapshot] = await Promise.all([
    getDocs(collection(db, FORMS_COLLECTION)),
    getDocs(collection(db, RESPONSES_COLLECTION))
  ]);

  const totalForms = formsSnapshot.size;
  const totalResponses = responsesSnapshot.size;
  
  let totalRating = 0;
  let approvedResponses = 0;
  let pendingResponses = 0;
  
  responsesSnapshot.forEach(doc => {
    const data = doc.data();
    totalRating += data.rating || 0;
    if (data.isApproved) {
      approvedResponses++;
    } else {
      pendingResponses++;
    }
  });

  const averageRating = totalResponses > 0 ? totalRating / totalResponses : 0;

  return {
    totalForms,
    totalResponses,
    averageRating: Math.round(averageRating * 10) / 10,
    approvedResponses,
    pendingResponses,
  };
};

// Real-time listeners
export const subscribeToTestimonialForms = (
  callback: (forms: TestimonialForm[]) => void
) => {
  const q = query(
    collection(db, FORMS_COLLECTION),
    orderBy('createdAt', 'desc')
  );
  
  return onSnapshot(q, (snapshot) => {
    const forms = snapshot.docs.map(doc => {
      const data = doc.data();
      const isExpired = data.expiryDate ? new Date(data.expiryDate) < new Date() : false;
      
      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        formUrl: data.formUrl,
        isActive: data.isActive,
        responsesCount: data.responsesCount || 0,
        maxResponses: data.maxResponses || undefined,
        expiryDate: data.expiryDate || undefined,
        isExpired,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      };
    });
    callback(forms);
  });
};

export const subscribeToTestimonialResponses = (
  callback: (responses: TestimonialResponse[]) => void,
  formId?: string
) => {
  let q = query(
    collection(db, RESPONSES_COLLECTION),
    orderBy('createdAt', 'desc')
  );
  
  if (formId) {
    q = query(
      collection(db, RESPONSES_COLLECTION),
      where('formId', '==', formId),
      orderBy('createdAt', 'desc')
    );
  }
  
  return onSnapshot(q, (snapshot) => {
    const responses = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        formId: data.formId,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        rating: data.rating,
        review: data.review,
        service: data.service,
        date: data.date,
        isApproved: data.isApproved,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
      };
    });
    callback(responses);
  });
}; 