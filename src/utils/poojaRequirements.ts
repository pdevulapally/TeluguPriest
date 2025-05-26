
export const poojaRequirements = {
  satyanarayana: {
    title: "Satyanarayana Vratam Requirements",
    items: [
      "1 kg Sugar",
      "1 kg Wheat flour", 
      "250g Ghee",
      "Bananas (5-11 pieces)",
      "Coconuts (2-3 pieces)",
      "Flowers (Marigold, Jasmine)",
      "Incense sticks and camphor",
      "Betel leaves and nuts (1 packet each)",
      "Turmeric and Kumkum",
      "Rice (1 cup)",
      "Small oil lamp with oil/ghee",
      "Clean cloth for altar",
      "Fruits for offering (seasonal)"
    ]
  },
  barasala: {
    title: "Barasala (Naming Ceremony) Requirements",
    items: [
      "New clothes for the baby",
      "Gold ornament (chain/bracelet) for blessing",
      "Turmeric and Kumkum",
      "Rice (1 cup)",
      "Coconut (1 piece)",
      "Flowers (Jasmine preferred)",
      "Betel leaves (21 pieces)",
      "Fruits for offering",
      "Incense sticks and camphor",
      "Small silver coin or item",
      "Clean white cloth",
      "Oil lamp with ghee",
      "Milk and honey (small quantities)"
    ]
  },
  gruhapravesam: {
    title: "Gruhapravesam (House Warming) Requirements",
    items: [
      "New broom",
      "Kalash (brass/copper pot) with water",
      "Mango leaves for decoration", 
      "Coconuts (5 pieces)",
      "Rice (2 cups)",
      "Turmeric and Kumkum",
      "Flowers (Marigold, Jasmine)",
      "Incense sticks and camphor",
      "Betel leaves and nuts",
      "Fruits for offering",
      "Oil lamps (5 pieces) with oil/ghee",
      "New clothes for family members",
      "Sweets for distribution",
      "Clean white/red cloth for altar"
    ]
  },
  wedding: {
    title: "Vivaham (Wedding) Requirements",
    items: [
      "Mangalsutra and wedding rings",
      "Yellow rice (turmeric mixed)",
      "Red kumkum and turmeric powder",
      "Coconuts (7-9 pieces)",
      "Mango leaves for decoration",
      "Flowers (Jasmine, Marigold, Rose)",
      "Betel leaves (51 pieces) and nuts",
      "Sacred thread (3 pieces)",
      "Ghee for fire ceremony",
      "Rice (5 cups)",
      "Fruits and sweets for offering",
      "New clothes for bride and groom",
      "Gold coins or jewelry for exchange",
      "Incense sticks and camphor",
      "Clean white cloth (2 pieces)"
    ]
  },
  annaprasana: {
    title: "Annaprasana (First Feeding) Requirements", 
    items: [
      "Cooked rice (sweet preparation)",
      "Silver spoon and bowl",
      "New clothes for the baby",
      "Fruits suitable for babies",
      "Coconut (1 piece)",
      "Turmeric and Kumkum",
      "Flowers (mild fragrance preferred)",
      "Betel leaves (11 pieces)",
      "Rice (1 cup uncooked)",
      "Ghee (small quantity)",
      "Incense sticks (mild)",
      "Oil lamp with oil",
      "Clean cloth for baby",
      "Milk and honey (small quantities)"
    ]
  },
  upanayanam: {
    title: "Upanayanam (Sacred Thread) Requirements",
    items: [
      "Sacred thread (Yajnopavita) - 3 sets",
      "New dhoti and angavastram for the boy",
      "Wooden stick (small) for ritual",
      "Coconuts (5 pieces)",
      "Rice (3 cups)",
      "Ghee for fire ceremony",
      "Turmeric and Kumkum",
      "Flowers (Jasmine, Marigold)",
      "Betel leaves (51 pieces) and nuts",
      "Fruits for offering",
      "Incense sticks and camphor",
      "Oil lamps with ghee",
      "Clean white cloth",
      "Sweets for distribution"
    ]
  },
  custom: {
    title: "Custom Puja Requirements",
    items: [
      "Coconuts (3-5 pieces)",
      "Flowers (Jasmine, Marigold)",
      "Rice (2 cups)",
      "Turmeric and Kumkum", 
      "Ghee (small quantity)",
      "Betel leaves and nuts",
      "Fruits for offering",
      "Incense sticks and camphor",
      "Oil lamp with oil/ghee",
      "Clean cloth for altar",
      "Any specific items related to your custom puja"
    ]
  }
};

export const getServiceRequirements = (serviceKey: string) => {
  return poojaRequirements[serviceKey as keyof typeof poojaRequirements] || poojaRequirements.custom;
};
