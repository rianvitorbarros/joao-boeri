export interface PracticeArea {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  mobileHeadline: string;
  subtitle: string;
  cardTitle?: string;
  cardDescription?: string;
  ctaText: string;
  whatsappMessage: string;
  explanation: {
    title: string;
    points: string[];
  };
  whoHasRight: string[];
  documents: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "advogado-aposentadoria",
    cardTitle: "Advogado para Aposentadorias",
    cardDescription: "Atendimento especializado em aposentadorias e benefícios do INSS.",
    seoTitle: "Advogado para Aposentadorias | João Boeri",
    metaDescription: "Precisa de ajuda com aposentadoria ou benefícios do INSS? Fale com um advogado previdenciário especialista.",
    headline: "Advogado para Aposentadorias Especialista em INSS",
    mobileHeadline: "Advogado para\nAposentadorias Especialista em INSS",
    subtitle: "Precisa de um advogado especialista em Aposentadorias e Benefícios do INSS? Entre em contato clicando no botão abaixo e eu vou ajudar você!",
    ctaText: "Conversar com o advogado",
    whatsappMessage: "Olá, vim pelo site e gostaria de conversar sobre aposentadoria.",
    explanation: {
      title: "Como funciona a análise de Aposentadoria",
      points: [
        "A análise da aposentadoria envolve verificar seu tempo de contribuição, idade e documentação.",
        "Avaliamos as regras de transição para identificar o melhor momento e o melhor benefício.",
        "Organizamos a documentação necessária para evitar atrasos ou negativas no INSS."
      ]
    },
    whoHasRight: [
      "Trabalhadores que atingiram a idade mínima e tempo de contribuição.",
      "Pessoas que possuem tempo especial, rural ou como pessoa com deficiência.",
      "Segurados que precisam planejar o futuro previdenciário."
    ],
    documents: [
      "RG e CPF",
      "Comprovante de residência atualizado",
      "Carteiras de Trabalho (todas que possuir)",
      "Extrato CNIS atualizado (Meu INSS)",
      "Carnês de contribuição ou guias pagas (se houver)",
      "Documentos rurais ou laudos (PPP) se aplicável"
    ],
    faqs: [
      {
        question: "Quando devo procurar um advogado para aposentadoria?",
        answer: "O ideal é procurar um advogado antes mesmo de dar entrada no pedido, para realizar um planejamento, ou quando o benefício for negado pelo INSS."
      },
      {
        question: "Qual o tempo médio para o INSS analisar o pedido?",
        answer: "O prazo legal é de até 90 dias, mas pode variar dependendo da complexidade do caso e da agência do INSS. Em alguns casos, pode ser necessário entrar com ação judicial ou mandado de segurança."
      },
      {
        question: "O que fazer se minha aposentadoria for negada?",
        answer: "Se for negada, é possível entrar com um recurso administrativo no próprio INSS ou ingressar com uma ação judicial. A análise de um advogado é fundamental para escolher o melhor caminho."
      }
    ]
  },
  {
    slug: "auxilio-acidente",
    cardTitle: "Auxílio Acidente",
    cardDescription: "Orientação e análise para recebimento de auxílio-acidente.",
    seoTitle: "Advogado para Auxílio-Acidente em Parauapebas - João Boeri",
    metaDescription: "Orientação previdenciária para quem sofreu acidente e ficou com alguma sequela. Veja como entender se pode ter direito ao benefício de Auxílio-Acidente.",
    headline: "Advogado Previdenciário Especialista em Auxílio Acidente",
    mobileHeadline: "Advogado Previdenciário\nEspecialista em\nAuxílio Acidente",
    subtitle: "Precisa de um advogado especialista em Auxílio Acidente e em outros benefícios do INSS? Entre em contato clicando no botão abaixo e eu vou ajudar você!",
    ctaText: "Conversar com o advogado",
    whatsappMessage: "Olá, vim pelo site e gostaria de saber se tenho direito ao Auxílio-Acidente.",
    explanation: {
      title: "Como funciona o Auxílio-Acidente",
      points: [
        "O Auxílio-Acidente pode ser devido quando a pessoa sofre acidente e fica com alguma sequela ou limitação.",
        "Não prometemos resultados jurídicos, mas orientamos sobre os seus direitos e como funciona a análise no INSS.",
        "Cada caso precisa de análise individual detalhada para entender a viabilidade do pedido."
      ]
    },
    whoHasRight: [
      "quem sofreu acidente de trabalho ou acidente comum;",
      "quem ficou com sequela, dor, limitação ou perda de capacidade;",
      "quem já teve benefício do INSS;",
      "quem teve pedido negado;",
      "quem não sabe se a sequela gera direito."
    ],
    documents: [
      "RG e CPF;",
      "carteira de trabalho;",
      "laudos médicos;",
      "exames;",
      "CAT, se houver;",
      "carta de indeferimento, se houver."
    ],
    faqs: [
      {
        question: "Preciso estar afastado para receber Auxílio-Acidente?",
        answer: "Não necessariamente. O benefício tem caráter indenizatório e, dependendo do caso, pode ser recebido mesmo após o retorno ao trabalho, se houver sequela permanente que reduza a capacidade."
      },
      {
        question: "Acidente fora do trabalho também pode gerar direito?",
        answer: "Sim. Acidentes de qualquer natureza (doméstico, trânsito, lazer) também podem dar direito ao benefício, desde que comprovada a qualidade de segurado e a redução da capacidade laboral."
      },
      {
        question: "Quem já voltou a trabalhar pode receber?",
        answer: "Sim. O Auxílio-Acidente permite que a pessoa continue trabalhando enquanto recebe, servindo como uma indenização mensal."
      },
      {
        question: "O que fazer se o INSS negou o pedido?",
        answer: "Se o pedido for negado, é possível buscar uma orientação previdenciária para analisar o caso e, se for viável, ingressar com recurso administrativo ou ação judicial."
      }
    ]
  },
  {
    slug: "salario-maternidade",
    cardTitle: "Salário Maternidade",
    cardDescription: "Orientação e análise para recebimento de salário-maternidade.",
    seoTitle: "Advogado para Salário Maternidade em Parauapebas - João Boeri",
    metaDescription: "Atendimento para mães, seguradas do INSS e trabalhadoras rurais que precisam entender seus direitos ao Salário Maternidade.",
    headline: "Advogado Previdenciário para Salário Maternidade",
    mobileHeadline: "Advogado Previdenciário\npara Salário Maternidade",
    subtitle: "Precisa de um advogado especialista em Salário Maternidade ou em outros benefícios do INSS? Entre em contato clicando no botão abaixo e eu vou ajudar você!",
    ctaText: "Conversar com o advogado",
    whatsappMessage: "Olá, vim pelo site e gostaria de tirar dúvidas sobre Salário Maternidade.",
    explanation: {
      title: "Como funciona o Salário Maternidade",
      points: [
        "O Salário Maternidade pode ser devido em casos de nascimento, adoção, guarda judicial ou aborto previsto em lei.",
        "Oferecemos atenção especial para trabalhadoras rurais e seguradas especiais na comprovação da atividade.",
        "Cada situação tem requisitos específicos, evitando promessa de aprovação sem análise."
      ]
    },
    whoHasRight: [
      "mães que tiveram filho recentemente;",
      "trabalhadoras com contribuição ao INSS;",
      "seguradas desempregadas dentro do período de graça;",
      "trabalhadoras rurais;",
      "mães adotantes ou com guarda judicial;",
      "quem teve pedido negado."
    ],
    documents: [
      "RG e CPF;",
      "certidão de nascimento da criança;",
      "carteira de trabalho;",
      "comprovantes de contribuição;",
      "documentos rurais, se for o caso;",
      "carta de indeferimento, se houver."
    ],
    faqs: [
      {
        question: "Quem nunca pagou INSS pode receber?",
        answer: "Em regra geral, é necessário ter a qualidade de segurada ou estar no período de graça. Trabalhadoras rurais, no entanto, podem ter direito ao comprovar o exercício de atividade rural."
      },
      {
        question: "Trabalhadora rural tem direito?",
        answer: "Sim. A segurada especial (trabalhadora rural) tem direito desde que comprove o exercício da atividade rural, mesmo de forma descontínua, nos meses imediatamente anteriores ao nascimento da criança."
      },
      {
        question: "Mãe desempregada pode receber?",
        answer: "Sim, caso ainda esteja no chamado 'período de graça', ou seja, mantendo a qualidade de segurada mesmo após parar de contribuir."
      },
      {
        question: "O que fazer se o pedido foi negado?",
        answer: "É importante buscar análise para verificar o motivo da negativa e entender os próximos passos cabíveis."
      }
    ]
  },
  {
    slug: "beneficio-pessoa-com-deficiencia",
    cardTitle: "BPC LOAS",
    cardDescription: "Para pessoa com deficiência, autismo, visão monocular ou outras limitações que precisam de análise para benefício assistencial.",
    seoTitle: "Advogado para BPC LOAS PCD em Parauapebas - João Boeri",
    metaDescription: "Orientação previdenciária sobre BPC LOAS para pessoas com deficiência, autismo, visão monocular ou limitações de longo prazo.",
    headline: "BPC Loas para a Pessoa com Deficiência",
    mobileHeadline: "BPC Loas para a\nPessoa com Deficiência",
    subtitle: "A pessoa com deficiência pode ter direito a um benefício do INSS, desde que esteja em condições de miserabilidade social. Converse com um advogado ou leia o artigo abaixo e entenda mais sobre o assunto.",
    ctaText: "Conversar com um advogado",
    whatsappMessage: "Olá, vim pelo site e gostaria de saber se tenho direito ao BPC LOAS para pessoa com deficiência.",
    explanation: {
      title: "O que é o BPC LOAS",
      points: [
        "O Benefício de Prestação Continuada (BPC/LOAS) é um benefício assistencial e não é uma aposentadoria.",
        "Podemos orientar pessoas com deficiência em situação de vulnerabilidade social.",
        "Lembre-se: dependendo dos critérios, você pode ter direito, mas nenhum direito é garantido sem análise criteriosa do INSS."
      ]
    },
    whoHasRight: [
      "pessoa com deficiência física, mental, intelectual ou sensorial;",
      "pessoa com autismo;",
      "pessoa com visão monocular;",
      "pessoa com limitação de longo prazo;",
      "famílias em vulnerabilidade social;",
      "quem teve pedido negado pelo INSS."
    ],
    documents: [
      "RG e CPF;",
      "CadÚnico atualizado;",
      "comprovante de residência;",
      "laudos médicos;",
      "exames;",
      "receitas;",
      "relatórios médicos, terapêuticos ou escolares;",
      "carta de indeferimento, se houver."
    ],
    faqs: [
      {
        question: "BPC LOAS precisa de contribuição ao INSS?",
        answer: "Não. Por ser um benefício assistencial, não é necessário ter contribuído para o INSS, mas deve cumprir os requisitos de renda familiar e deficiência."
      },
      {
        question: "Autismo pode dar direito ao BPC?",
        answer: "Sim. O Transtorno do Espectro Autista (TEA) é considerado deficiência para todos os efeitos legais, e a pessoa pode ter direito se cumprir o critério de baixa renda."
      },
      {
        question: "Visão monocular pode dar direito?",
        answer: "Sim. Pessoas com visão monocular são consideradas pessoas com deficiência para fins previdenciários e assistenciais."
      },
      {
        question: "O que o INSS analisa no pedido?",
        answer: "O INSS analisa a comprovação da deficiência por meio da perícia médica e o critério de vulnerabilidade social (renda familiar per capita) mediante o CadÚnico e avaliação social."
      },
      {
        question: "O que fazer se o BPC foi negado?",
        answer: "É recomendada a análise da documentação e da carta de indeferimento para avaliar se cabe recurso no INSS ou ação judicial para comprovar o direito."
      }
    ]
  },
  {
    slug: "beneficios-rurais",
    cardTitle: "Aposentadoria Rural",
    cardDescription: "Para trabalhador rural, agricultor familiar, pescador artesanal ou segurado especial que precisa comprovar atividade rural.",
    seoTitle: "Advogado para Benefícios Rurais em Parauapebas - João Boeri",
    metaDescription: "Atendimento previdenciário para agricultores, pescadores e segurados especiais na busca por seus direitos e comprovação de atividade rural.",
    headline: "Advogado para Aposentadoria Rural",
    mobileHeadline: "Advogado para\nAposentadoria Rural",
    subtitle: "Precisa de um advogado para sua Aposentadoria Rural ou Salário Maternidade Rural? Receba uma orientação direcionada sobre o seu caso.",
    ctaText: "Envie seu caso ao profissional",
    whatsappMessage: "Olá, vim pelo site e gostaria de orientação sobre benefícios rurais do INSS.",
    explanation: {
      title: "Seus direitos como Segurado Especial",
      points: [
        "Trabalhadores rurais, agricultores e pescadores artesanais podem ter direitos previdenciários específicos.",
        "Podemos orientar sobre aposentadoria rural, salário maternidade rural, auxílio-doença rural e averbação de tempo rural.",
        "Focamos em auxiliar nas dificuldades da comprovação da atividade rural exigida pelo INSS."
      ]
    },
    whoHasRight: [
      "agricultor familiar;",
      "trabalhador rural;",
      "pescador artesanal;",
      "segurado especial;",
      "mulher rural que busca salário maternidade;",
      "pessoa que precisa comprovar tempo rural;",
      "quem teve pedido negado."
    ],
    documents: [
      "RG e CPF;",
      "comprovante de residência rural;",
      "documentos de sindicato ou associação;",
      "notas de produtor;",
      "documentos de terra;",
      "certidão de casamento ou nascimento com profissão rural;",
      "comprovantes de atividade rural;",
      "carta de indeferimento, se houver."
    ],
    faqs: [
      {
        question: "Como comprovar atividade rural?",
        answer: "Com a apresentação de documentos rurais, como notas do produtor, cadastro em sindicatos, documentos da terra e outros registros que indiquem a profissão, além de testemunhas."
      },
      {
        question: "Agricultor familiar precisa pagar INSS?",
        answer: "O segurado especial, de regra, não precisa pagar o carnê (contribuição direta). A contribuição ocorre indiretamente na comercialização da produção, e o benefício é concedido mediante comprovação da atividade."
      },
      {
        question: "Pescador artesanal pode ter direito?",
        answer: "Sim. O pescador artesanal em regime de economia familiar também é considerado segurado especial."
      },
      {
        question: "Salário maternidade rural precisa de contribuição?",
        answer: "Não diretamente em carnê, mas é preciso comprovar a atividade rural no período anterior ao nascimento da criança."
      },
      {
        question: "O que fazer se o INSS não reconheceu o tempo rural?",
        answer: "Muitas vezes há exigência de documentação complementar ou o INSS não reconhece os indícios de prova. Pode-se recorrer internamente ou levar o caso para avaliação judicial."
      }
    ]
  },
  {
    slug: "bpc-loas-negado-ou-cortado",
    cardTitle: "BPC LOAS indeferido ou cortado no INSS?",
    cardDescription: "Teve seu pedido de BPC LOAS negado ou cortado pelo INSS, ou tem dificuldade de ingressar com o pedido sozinho? Converse com um advogado e entenda seus direitos.",
    seoTitle: "Advogado BPC LOAS Negado ou Cortado - João Boeri",
    metaDescription: "Orientação previdenciária para quem teve o benefício BPC LOAS indeferido, suspenso ou cancelado pelo INSS. Veja os próximos passos.",
    headline: "BPC Loas indeferido ou cortado no INSS?",
    mobileHeadline: "BPC Loas indeferido ou\ncortado no INSS?",
    subtitle: "Teve seu pedido de BPC Loas negado ou cortado pelo INSS ou tem dificuldades de ingressar com o pedido sozinho? Converse com um advogado e entenda seus direitos ou leia o artigo abaixo e entenda mais sobre.",
    ctaText: "Conversar com um advogado",
    whatsappMessage: "Olá, vim pelo site e tive meu BPC LOAS negado ou cortado. Gostaria de uma orientação.",
    explanation: {
      title: "O que fazer após negativa ou corte",
      points: [
        "O BPC pode ser negado ou cortado por vários motivos: critérios de renda, CadÚnico desatualizado, laudo pericial, avaliação social ou documentação incompleta.",
        "Podemos orientar de perto, analisando o motivo da recusa para avaliar o melhor caminho a seguir.",
        "Não prometemos a reversão, mas sim o empenho em buscar seu direito caso ele exista dentro da lei."
      ]
    },
    whoHasRight: [
      "quem teve BPC negado;",
      "quem teve BPC cortado;",
      "quem recebeu carta de exigência do INSS;",
      "quem passou por pente-fino;",
      "quem teve problema no CadÚnico;",
      "famílias que não entenderam o motivo do indeferimento."
    ],
    documents: [
      "RG e CPF;",
      "CadÚnico atualizado;",
      "carta de indeferimento ou suspensão;",
      "laudos médicos;",
      "exames;",
      "comprovante de residência;",
      "comprovantes de renda da família;",
      "número do benefício ou protocolo."
    ],
    faqs: [
      {
        question: "Por que o INSS nega o BPC LOAS?",
        answer: "A negativa pode ocorrer caso a perícia médica não constate a deficiência nos moldes legais, ou se a renda familiar per capita ultrapassar o limite, ou ainda por documentação incompleta ou irregular."
      },
      {
        question: "O que fazer quando o BPC é cortado?",
        answer: "É essencial verificar rapidamente o motivo. Muitas vezes é falha na atualização do CadÚnico ou o segurado foi chamado para revisão (pente-fino) e não atendeu. É possível apresentar defesa no INSS."
      },
      {
        question: "CadÚnico desatualizado pode cortar o benefício?",
        answer: "Sim. A falta de atualização do CadÚnico a cada dois anos ou alterações na composição e renda da família sem aviso são os principais motivos de suspensão e corte."
      },
      {
        question: "Dá para recorrer de BPC negado?",
        answer: "Sim. A pessoa pode interpor recurso administrativo no INSS ou buscar ingressar com um processo judicial, dependendo do caso."
      },
      {
        question: "Preciso fazer novo pedido ou recurso?",
        answer: "Isso depende de cada caso. Um profissional pode orientar se vale a pena tentar reativar o atual (por recurso ou via judicial) ou refazer a papelada do zero num novo pedido."
      }
    ]
  }
];
