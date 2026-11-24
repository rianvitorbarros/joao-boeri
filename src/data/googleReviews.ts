export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime?: string;
  date?: string;
  text: string;
  ownerResponse?: string;
  googleProfileUrl?: string;
  reviewUrl?: string;
  source: "google";
}

// ATENÇÃO: As avaliações devem ser copiadas da página "João Boeri - Advogado Previdenciário em Parauapebas/PA" no Google.
// Não usar avaliações falsas. 
// O site ficará sem avaliações visíveis até que o array abaixo seja preenchido com dados reais.

export const googleReviews: GoogleReview[] = [
  {
    id: "1",
    authorName: "Silvana Rodrigues",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjXnCeRPOw4uNy01FqYBiPrC1FSX-XgCM6wON5AtNzSL0C8sp9SM=s64-c-rp-mo-br100",
    rating: 5,
    date: "12/08/2024",
    text: "Atendimento excelente, ótimo advogado muito competente no que faz, 100% super indico",
    ownerResponse: "👏🏻🙏🏼 Obrigado dona Silvana 👏🏼👏🏼",
    source: "google"
  },
  {
    id: "2",
    authorName: "Jander Da costa Rodrigues",
    authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocJYZCoqaifjzHR4s1loBRZAnIx4Ddsc8mZNeK0-04EaDgtnBw=s64-c-rp-mo-br100",
    rating: 5,
    date: "14/07/2023",
    text: "Sentimento de muita felicidade obrigado",
    ownerResponse: "🙏🏼🙏🏼",
    source: "google"
  },
  {
    id: "3",
    authorName: "carla Simone Viana Almeida",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjXJinGViLyqRTbNKQ7za3QNOdb1-iVsC1v7b2l3RAQQG1J0pWQ5Jw=s64-c-rp-mo-br100",
    rating: 5,
    date: "07/10/2024",
    text: "Diante do cenário brasileiro no\ncampo da advocacia as vezes ficamos meio que receiosos com alguns profissionais. Mas o que faz mudar essa ideia é ver a atuação com o maior comprometimento e profissionalismo de alguns. No caso quero citar o trabalho do João Boeri que além do desempenho em resolver o nosso caso,prestou toda uma acessória nos tirando dúvidas e aconselhando em diversos pontos. Receba nossos agradecimentos pelo seu belíssimo trabalho como advogado e ser humano com uma sensibilidade incrível. Muito obrigada",
    ownerResponse: "Muito obrigado pelas palavras dona Carla 🙏🏼👏🏼👏🏼",
    source: "google"
  },
  {
    id: "4",
    authorName: "Angela Fonseca",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjXZFSUsaQmi_8128LYRD1eruk2l8Ium4HlIO3gLgbf8YCO40U-D=s64-c-rp-mo-br100",
    rating: 5,
    date: "07/01/2025",
    text: "Recomendo os profissionais são excelentes.\nFui muito bem atendida, trabalho de qualidade e total responsabilidade.\nDeus continue abençoando esses profissionais em nome de Jesus 🙌",
    ownerResponse: "Obrigado dona Angela 👏🏼👏🏼🙏🏼",
    source: "google"
  },
  {
    id: "5",
    authorName: "Lara Karine Silva da Silva",
    authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocLoGAlIJ3de8zxDIDG-juwqD3lRPtVUROJRMayP5DU43o8Oyw=s64-c-rp-mo-br100",
    rating: 5,
    date: "12/03/2025",
    text: "Excelente profissional,  sempre esclarecendo todas as dúvidas, e com transparência em todas as etapas do processo. Recomendo! Ótimo advogado previdenciário.",
    ownerResponse: "Obrigado dona Lara, um abraço a todos da sua família!",
    source: "google"
  },
  {
    id: "6",
    authorName: "Devair Oliveira",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjUf3L3ifoQGRe4O6KCPxSPbs-WRCyc6Xnf4lfcw_VtzDHiEPrw=s64-c-rp-mo-br100",
    rating: 5,
    date: "22/05/2025",
    text: "Ótimo profissional, competente responsável, deixa o cliente a parte de tudo , agradeço muito pelo excelente trabalho prestado , podem confiar estarão em boas mãos ,",
    ownerResponse: "Muito obrigado pela confiança Sr. Devair! 🙏🏼👏🏼",
    source: "google"
  },
  {
    id: "7",
    authorName: "Darcy Silva dos santos",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjVVO6KJ-TlTEDvp0vJmKGDB_J8nby7DcHn_i2fdMRfMbmZ9sa1y=s64-c-rp-mo-br100",
    rating: 5,
    date: "10/06/2025",
    text: "Gentes,!eu indico  o Dr joao B , ele é um advogado   muito maravilhoso especialista  previdenciário  maravilhoso  amigo  vcs podem contratar  ele e especial eu amei trabalhar  com ele mim ajudou em tudo que precisava.",
    ownerResponse: "👏🏼👏🏼🙏🏼 muito obrigado pela confiança dona Darcy! Que Deus abençoe seu irmão e toda da sua família !",
    source: "google"
  },
  {
    id: "8",
    authorName: "Jessica Tamires Oliveira da Silva",
    authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocIeCXtDYtRZvAhtEx31x-YThWgoQ-HUYiQXZs5tQNxx10n-mA=s64-c-rp-mo-br100",
    rating: 5,
    date: "08/07/2025",
    text: "Dr João Boeri um excelente advogado previdenciario,meu esposo conseguiu receber o auxílio acidente graça ao excelente trabalho do Dr João,atende seus clientes super bem,um profissional de confiança,competente,só tenho elogios à esse profissional.parabens pelo seu trabalho Dr João Boeri.",
    ownerResponse: "Muito obrigado pela confiança dona Jessica! Um abraço a senhora e ao Sr. Adailton, fiquem com Deus.",
    source: "google"
  },
  {
    id: "9",
    authorName: "Daniel Dos Santos Lopes",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjXSzN6klYWJc-uvuswv0gd2qqhK0VXAeKKG-ZycT7XhTZH70I0=s64-c-rp-mo-br100",
    rating: 5,
    date: "29/10/2025",
    text: "Os meus sinceros agradecimentos Dr. João Boeri por seu eselente trabalho e competência mostrado com muita transparência e competência.",
    ownerResponse: "Obrigado Sr. Daniel! Abraços.",
    source: "google"
  },
  {
    id: "10",
    authorName: "rogerio silva",
    authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocLCmC4HS1HQPVBphe0E7lnws0Oh9Y0vYEvirBJ9baTw_TeBbQ=s64-c-rp-mo-br100",
    rating: 5,
    date: "27/04/2026",
    text: "Obrigado Doutor pelo serviços prestados com muita conhecimento e habilidade e honestidade, Deus te abençoe sempre..",
    ownerResponse: "Obrigado pela confiança Sr. Rogério! Deus abençoe 🙏🏼",
    source: "google"
  }
];
