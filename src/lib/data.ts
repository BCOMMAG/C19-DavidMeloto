export interface OfficeInfo {
  name: string;
  lawyer: string;
  role: string;
  oab: string;
  oabNumber: string;
  oabText: string;
  tagline: string;
  slogan: string;
  experienceYears: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  facebookUrl: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  workingHours: {
    weekdays: string;
    weekends: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "David Meloto Advocacia",
  lawyer: "David Meloto Duarte Junior",
  role: "Advogado Especialista em Direito do Trabalho e Consultoria Jurídica",
  oab: "OAB/PR 111.537",
  oabNumber: "111.537",
  oabText: "Inscrito na OAB/PR 111.537 • Atuação em estrita observância ao Código de Ética e ao Provimento nº 205/2021 do CFOAB",
  tagline: "Defesa ágil, estratégica e intransigente dos seus direitos trabalhistas e patrimoniais.",
  slogan: "Excelência jurídica com foco em resultados práticos, atuação personalizada e rigor técnico.",
  experienceYears: "desde 2021",
  phone: "(41) 99756-7713",
  whatsapp: "5541997567713",
  whatsappNumber: "5541997567713",
  whatsappFormatted: "(41) 99756-7713",
  whatsappUrl:
    "https://wa.me/5541997567713?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20com%20o%20advogado.",
  instagramUrl: "https://www.instagram.com/davidmeloto.adv?igsh=aTR4cXExNHQ5ZmY2",
  instagramHandle: "@davidmeloto.adv",
  linkedinUrl: "https://www.linkedin.com/in/david-meloto-duarte-junior-a29999304/",
  linkedinHandle: "david-meloto-duarte-junior",
  facebookUrl: "https://www.facebook.com/p/Adv-David-Meloto-61557586804827/",
  address: "R. Cel. Brasilino Moura, 253 - Ahú, Curitiba - PR, 80540-340",
  addressShort: "R. Cel. Brasilino Moura, 253 - Ahú, Curitiba/PR",
  city: "Curitiba",
  state: "PR",
  neighborhood: "Ahú",
  zipCode: "80540-340",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Cel.+Brasilino+Moura,+253+-+Ah%C3%BA,+Curitiba+-+PR,+80540-340",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=R.+Cel.+Brasilino+Moura,+253+-+Ah%C3%BA,+Curitiba+-+PR,+80540-340&t=&z=16&ie=UTF8&iwloc=&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 08:00 às 18:00",
    saturday: "Sábado: Fechado (Plantão sob agendamento prévio)",
    sunday: "Domingo: Fechado",
  },
  workingHours: {
    weekdays: "Segunda a Sexta-feira: 08:00 às 18:00",
    weekends: "Sábado e Domingo: Fechado",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  oab: string;
  graduation: string;
  experience: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "David Meloto Duarte Junior",
  role: "Advogado Especialista em Direito do Trabalho e Consultoria Jurídica",
  oab: "OAB/PR 111.537",
  graduation:
    "Pós-Graduado em Direito do Trabalho e Processo do Trabalho pelo UNINTER (2022 – 2024) • Bacharel em Direito pelo UniBrasil Centro Universitário (2017 – 2021)",
  experience: "Advocacia atuante desde 2021 com vivência prática na Procuradoria Geral do Estado do Paraná (PGE-PR)",
  bio: [
    "David Meloto Duarte Junior é advogado inscrito na OAB/PR sob o nº 111.537, com sólida formação acadêmica e pós-graduação especializada em Direito do Trabalho e Processo do Trabalho pelo Centro Universitário Internacional (UNINTER). Graduou-se em Direito pelo UniBrasil Centro Universitário, construindo desde o início de sua trajetória uma base jurídica robusta e orientada para a defesa contundente de direitos.",
    "Com experiência qualificada decorrente de sua atuação na Procuradoria Geral do Estado do Paraná (PGE-PR), David desenvolveu refinada capacidade de análise contenciosa, redação de teses jurídicas de alto impacto e trato de matérias complexas perante as instâncias do Poder Judiciário.",
    "À frente da David Meloto Advocacia, sediada no conceituado bairro Ahú em Curitiba/PR, atua com dedicação integral tanto no contencioso trabalhista quanto na consultoria preventiva de Recursos Humanos, além de prestar assessoria nas áreas cível, contratual e de direito do consumidor. Sua conduta é pautada pela combatividade técnica, proximidade transparente com o cliente e busca incessante por resultados concretos.",
  ],
  careerHighlights: [
    "Pós-Graduação Lato Sensu em Direito do Trabalho e Processo do Trabalho (UNINTER, 2022–2024).",
    "Inscrição regular e ativa na Ordem dos Advogados do Brasil (OAB/PR 111.537).",
    "Atuação jurídica ininterrupta desde 2021 com histórico comprovado de vitórias em acordos e sentenças.",
    "Experiência prática como estagiário de pós-graduação na Procuradoria Geral do Estado do Paraná (PGE-PR).",
    "Bacharelado em Direito pelo UniBrasil Centro Universitário (2017–2021).",
  ],
  personalNotes: [
    "Atendimento direto e sem intermediários: cada caso é analisado de ponta a ponta pelo próprio advogado titular.",
    "Comunicação clara e acessível: explicações detalhadas em linguagem simples, sem termos herméticos que distanciam o cidadão da sua causa.",
    "Rigor no cálculo de valores: apuração técnica exata de horas extras, adicionais, reflexos e rescisões para assegurar a plenitude dos direitos.",
    "Agilidade e transparência: acompanhamento processual ativo e reporte contínuo de cada andamento ao cliente.",
  ],
  differentials: [
    "Estrutura completa com sede física acolhedora no bairro Ahú (Curitiba/PR) e hub online com tecnologia de ponta para atendimento em todo o Brasil.",
    "Expertise especializada na reversão de justa causa, rescisão indireta da CLT e fraudes na contratação PJ/MEI.",
    "Visão multidisciplinar que conecta o Direito do Trabalho à Consultoria Preventiva de RH, Direito do Consumidor e causas cíveis.",
    "Conformidade ética irrestrita com os Provimentos do CFOAB, garantindo discrição, segurança e sigilo profissional absoluto.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  highlightText: string;
  iconName: string;
  coverageList: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "trabalhista-empregado",
    title: "Direito do Trabalho & Defesa do Empregado",
    shortDesc:
      "Defesa combativa e intransigente dos direitos do trabalhador, atuando para recompor perdas salariais, reparar abusos e garantir verbas rescisórias integrais.",
    highlightText: "Atuação especializada perante a Justiça do Trabalho, Varas do Trabalho de Curitiba, TRT9 e TST.",
    iconName: "Briefcase",
    coverageList: [
      "Rescisão Indireta do Contrato de Trabalho por falta grave da empresa (atraso de salário, FGTS não recolhido, assédio)",
      "Cálculo e cobrança de Horas Extras, Horas In Itinere, Intervalos Intrajornada e Adicional Noturno (art. 59 da CLT)",
      "Reconhecimento de Vínculo de Emprego em 'Pejotização' fraudulenta (MEI/PJ com horários e subordinação real)",
      "Diferenças de Verbas Rescisórias, Aviso Prévio Proporcional e Multas dos arts. 467 e 477 da CLT",
      "Indenização por Assédio Moral, Metas Abusivas, Perseguição e Danos Existenciais no Trabalho",
      "Adicionais de Insalubridade (NR-15) e Periculosidade (NR-16) para funções com exposição a agentes nocivos e risco",
      "Doenças Ocupacionais (Burnout, LER/DORT), Acidentes de Trabalho e Estabilidade Acidentária (Lei 8.213/91)",
      "Reversão Judicial de Demissão por Justa Causa indevida ou desproporcional para Dispensa Sem Justa Causa",
    ],
  },
  {
    id: "consultoria-rh-preventivo",
    title: "Consultoria de RH & Preventivo Trabalhista",
    shortDesc:
      "Assessoria estratégica preventiva para empresas e empregadores que buscam segurança jurídica, redução de passivo oculto e harmonia nas relações corporativas.",
    highlightText: "Diagnóstico técnico de rotinas de Departamento Pessoal para blindar a organização contra autuações e ações trabalhistas.",
    iconName: "ShieldCheck",
    coverageList: [
      "Auditoria Trabalhista Preventiva de rotinas de ponto, banco de horas e contratos de prestação de serviços",
      "Adequação e validação de contratações de autônomos, PJs e prestadores terceirizados sem risco de vínculo empregatício",
      "Elaboração e revisão de Regulamentos Internos, Códigos de Ética e Políticas de Teletrabalho (Home Office)",
      "Implementação de medidas obrigatórias de combate ao assédio sexual e violência moral (Lei nº 14.457/2022 - Emprega + Mulheres)",
      "Defesa técnica em Autos de Infração lavrados por Auditores Fiscais do Trabalho e Notificações do Ministério Público do Trabalho",
      "Condução de acordos extrajudiciais perante a Justiça do Trabalho (art. 855-B da CLT) com quitação geral e segurança jurídica",
      "Assessoria em negociações sindicais, Acordos Coletivos de Trabalho (ACT) e aplicação correta de Convenções Coletivas",
      "Gestão de contingências trabalhistas e mapeamento da matriz de riscos corporativos conforme CPC 25",
    ],
  },
  {
    id: "consumidor-bancario",
    title: "Direito do Consumidor & Defesa Patrimonial",
    shortDesc:
      "Proteção eficaz contra práticas comerciais abusivas, negativações indevidas nos cadastros de crédito, fraudes bancárias e descumprimento de ofertas.",
    highlightText: "Aplicação contundente do Código de Defesa do Consumidor (CDC) com inversão do ônus da prova e restituição de valores.",
    iconName: "Scale",
    coverageList: [
      "Ação Indenizatória por Negativação Indevida no SPC/Serasa com pedido de Dano Moral Presumido (In Re Ipsa)",
      "Cobranças Indevidas de Tarifas Bancárias e Serviços não contratados com Repetição do Indébito em Dobro (art. 42 do CDC)",
      "Ações contra Golpes do Pix, Invasões de Contas Digitais e Empréstimos Consignados Fraudulentos não solicitados",
      "Liminares de Urgência contra Planos de Saúde para Cobertura de Cirurgias, Terapias Multidisciplinares e Medicamentos de Alto Custo",
      "Rescisão Contratual por Vício de Produto ou Serviço com Devolução Integral da Quantia Paga e Danos Materiais",
      "Litígios de Comércio Eletrônico (E-commerce): Atrasos reiterados de entrega, extravios de encomendas e recusa de garantia",
      "Atraso e Cancelamento de Voos, Extravio de Bagagem e Danos a Passageiros em Transporte Aéreo e Rodoviário",
      "Defesa contra Cláusulas Abusivas em Contratos de Financiamento de Veículos e Empréstimos com Juros Extorsivos",
    ],
  },
  {
    id: "civil-contratual",
    title: "Direito Civil, Contratos & Negócios",
    shortDesc:
      "Estruturação de negócios seguros, resolução de controvérsias patrimoniais, cobranças de títulos e proteção de interesses civis e contratuais.",
    highlightText: "Solidez técnica na redação contratual preventiva e firmeza contenciosa na defesa de patrimônios e obrigações.",
    iconName: "FileText",
    coverageList: [
      "Ações de Cobrança, Execução de Títulos Extrajudiciais (cheques, notas promissórias e duplicatas) e Cumprimento de Sentença",
      "Elaboração, Revisão e Rescisão de Contratos de Prestação de Serviços, Compra e Venda e Negócios Empresariais",
      "Ações de Responsabilidade Civil com pedidos de Indenização por Danos Morais, Materiais e Lucros Cessantes",
      "Direito Imobiliário: Ações de Despejo, Cobrança de Aluguéis, Rescisão de Locação e Adjudicação Compulsória",
      "Inventários Judiciais e Extrajudiciais em Cartório com Apuração e Partilha Equitativa de Bens entre Herdeiros",
      "Divórcios Consensuais e Litigiosos com Partilha Patrimonial, Fixação de Pensão Alimentícia e Guarda",
      "Notificações Extrajudiciais Estratégicas para constituição de mora, rescisão prévia e conciliação amigável",
      "Consultoria para estruturação de parcerias comerciais e prevenção de litígios societários entre sócios",
    ],
  },
];

export interface Review {
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Rafael M. Albuquerque",
    rating: 5,
    text: "O Dr. David Meloto conduziu minha ação trabalhista com um profissionalismo exemplar. Eu trabalhava como PJ mas com horário fixo e cobrança diária. Ele comprovou o vínculo e consegui receber todas as minhas férias, 13º e FGTS retroativos. Muito grato pelo atendimento transparente e atencioso!",
    timeAgo: "Há 2 meses",
    details: "Reconhecimento de Vínculo CLT • Curitiba/PR",
  },
  {
    author: "Camila S. Fagundes",
    rating: 5,
    text: "Excelente advogado! Estava passando por uma situação insustentável de atraso de salários e assédio velado na empresa. O Dr. David ingressou com a rescisão indireta e garantiu a saída imediata com todos os meus direitos de demissão sem justa causa. Passou muita segurança desde o primeiro contato.",
    timeAgo: "Há 4 meses",
    details: "Rescisão Indireta da CLT • Curitiba/PR",
  },
  {
    author: "Marcos Vinicius Diniz",
    rating: 5,
    text: "Contratamos a assessoria do Dr. David para realizar a auditoria trabalhista preventiva na nossa distribuidora. Ele revisou todos os contratos de funcionários e prestadores de serviços, ajustou o banco de horas e nos poupou de passivos gigantescos. Atendimento rápido, técnico e muito sério.",
    timeAgo: "Há 3 meses",
    details: "Consultoria de RH e Preventivo Trabalhista",
  },
  {
    author: "Juliana Mendes Corrêa",
    rating: 5,
    text: "Tive meu nome negativado indevidamente por uma conta de telefone que já estava paga há meses. Falei com o Dr. David no WhatsApp, ele moveu a ação com pedido liminar e em poucos dias meu nome foi limpo no SPC, além de conseguir a indenização por dano moral. Recomendo de olhos fechados!",
    timeAgo: "Há 5 meses",
    details: "Direito do Consumidor • Ahú, Curitiba",
  },
  {
    author: "Eduardo Ribeiro de Castro",
    rating: 5,
    text: "Profissional extremamente competente, ético e pontual. Fez o cálculo exato das minhas horas extras e do adicional noturno que a empresa nunca pagava corretamente. O acordo homologado no tribunal superou todas as minhas expectativas. O melhor advogado trabalhista de Curitiba.",
    timeAgo: "Há 6 meses",
    details: "Horas Extras & Verbas Rescisórias",
  },
  {
    author: "Patrícia Helena Silveira",
    rating: 5,
    text: "Excelente atendimento presencial no escritório do Ahú. Estávamos com um contrato comercial complexo travado e o Dr. David estruturou a notificação e a cobrança com extrema rapidez e eficiência jurídica. Sempre atencioso e direto ao ponto.",
    timeAgo: "Há 1 mês",
    details: "Direito Civil & Contratos",
  },
];

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Atendimento Inicial & Análise de Caso",
    subtitle: "Contato direto com o advogado via WhatsApp",
    description:
      "Você relata a sua situação de forma confidencial e protegida por sigilo profissional. Compreendemos o histórico de trabalho, contratos, abusos vivenciados e os objetivos que você busca alcançar.",
  },
  {
    number: "02",
    title: "Auditoria Documental & Cálculo Detalhado",
    subtitle: "Rigor técnico na apuração dos valores devidos",
    description:
      "Examinamos holerites, extratos de FGTS, cartões de ponto, mensagens, contratos e e-mails para elaborar cálculos precisos de horas extras, verbas rescisórias e reparações cabíveis.",
  },
  {
    number: "03",
    title: "Definição Estratégica & Ação Imediata",
    subtitle: "Via consensual célere ou contencioso combativo",
    description:
      "Traçamos a melhor tese jurídica: notificação formal para tentativa de conciliação ou propositura imediata de Ação Trabalhista ou Cível com pedido de liminar perante o Poder Judiciário.",
  },
  {
    number: "04",
    title: "Acompanhamento Ativo & Comunicação Transparente",
    subtitle: "Você informado em cada etapa do processo",
    description:
      "Sem termos herméticos ou falsas expectativas: você recebe reportes periódicos sobre audiências, perícias e sentenças, com suporte pessoal do advogado até a efetiva liberação dos valores devidos.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface EducationalTopic {
  id: string;
  title: string;
  summary: string;
  badge: string;
  category: string;
  readTime: string;
  content: string[];
  oabDisclaimer: string;
}

export const EDUCATIONAL_TOPICS: EducationalTopic[] = [
  {
    id: "rescisao-indireta",
    title: "Rescisão Indireta: Quando o Empregado pode 'Demitir' o Empregador com Todos os Direitos",
    summary:
      "Entenda o art. 483 da CLT: saiba em quais situações o trabalhador pode rescindir o contrato de trabalho por culpa da empresa recebendo aviso prévio, multa de 40% do FGTS e seguro-desemprego.",
    badge: "Direito Trabalhista",
    category: "Direito Trabalhista",
    readTime: "3 min de leitura",
    content: [
      "A rescisão indireta é conhecida no meio jurídico como a 'justa causa cometida pelo empregador'. Prevista expressamente no artigo 483 da Consolidação das Leis do Trabalho (CLT), ela ocorre quando a empresa descumpre de forma grave as obrigações contratuais ou expõe o colaborador a situações ilícitas.",
      "Entre os motivos mais frequentes que autorizam a rescisão indireta estão: o atraso reiterado no pagamento de salários, o não recolhimento contínuo dos depósitos do Fundo de Garantia do Tempo de Serviço (FGTS), o rigor excessivo na cobrança de metas, o assédio moral continuado e a exigência de serviços superiores às forças do trabalhador ou contrários aos bons costumes.",
      "Ao ter a rescisão indireta reconhecida pela Justiça do Trabalho, o empregado não perde nenhum direito: ele recebe o saldo de salário, aviso prévio indenizado, férias vencidas e proporcionais com 1/3, 13º salário proporcional, liberação dos saques do FGTS com a multa rescisória de 40% e as guias para recebimento do Seguro-Desemprego, exatamente como se tivesse sido demitido sem justa causa.",
      "Importante: a lei permite que o empregado continue trabalhando ou se afaste imediatamente de suas funções nas hipóteses das alíneas 'd' (descumprimento de obrigação contratual) e 'g' (redução do trabalho de forma a afetar sensivelmente os salários) do art. 483, evitando que permaneça em ambiente hostil enquanto a ação tramita.",
    ],
    oabDisclaimer:
      "Conteúdo didático e informativo em estrita conformidade com o Provimento nº 205/2021 do CFOAB. Consulte um advogado para analisar a viabilidade da rescisão indireta no seu caso específico.",
  },
  {
    id: "pejotizacao-fraude",
    title: "Pejotização e Fraude Trabalhista: A Exigência de CNPJ que Oculta Direitos da CLT",
    summary:
      "A imposição de abertura de MEI ou empresa para mascarar vínculo de emprego viola o art. 9º da CLT e gera direito ao recebimento retroativo de todos os direitos trabalhistas.",
    badge: "Vínculo de Emprego",
    category: "Vínculo de Emprego",
    readTime: "4 min de leitura",
    content: [
      "A prática da 'pejotização' consiste na imposição feita por certas empresas para que o trabalhador constitua pessoa jurídica (como MEI, ME ou EIRELI) para prestar serviços, quando na verdade ele atua como um empregado comum, subordinado e integrado à rotina produtiva da organização.",
      "O Direito do Trabalho brasileiro é regido pelo Princípio da Primazia da Realidade: o que verdadeiramente importa para a Justiça é a realidade dos fatos no dia a dia, e não o nome que consta em um contrato civil assinado entre as partes. Se estiverem presentes os requisitos do art. 3º da CLT — Pessoalidade, Habitualidade, Onerosidade e Subordinação Jurídica —, o vínculo de emprego é obrigatório.",
      "Nos termos do artigo 9º da CLT, são nulos de pleno direito todos os atos praticados com o objetivo de desvirtuar, impedir ou fraudar a aplicação dos preceitos trabalhistas. Portanto, uma vez declarada a fraude, a Justiça condena a empresa ao pagamento de todo o passivo sonegado.",
      "Isso engloba o recolhimento de FGTS de todo o período com multa de 40%, 13º salários integrais e proporcionais, férias acrescidas do terço constitucional, aviso prévio, horas extras e eventuais adicionais previstos nas Convenções Coletivas da categoria profissional correspondente.",
    ],
    oabDisclaimer:
      "Orientação jurídica educativa conforme o Código de Ética da OAB. A apuração de vínculo fraudulento exige comprovação técnica dos requisitos fáticos da subordinação.",
  },
  {
    id: "horas-extras-provas",
    title: "Horas Extras e Intervalos: Como Comprovar Trabalho Além da Jornada sem Cartão de Ponto Fidedigno",
    summary:
      "Conheça os meios de prova admitidos na Justiça do Trabalho para demonstrar a sobrejornada quando o empregador frauda o ponto ou exige 'bater e continuar trabalhando'.",
    badge: "Jornada de Trabalho",
    category: "Jornada de Trabalho",
    readTime: "3 min de leitura",
    content: [
      "A Constituição Federal de 1988 estabelece a jornada máxima legal de 8 horas diárias e 44 horas semanais para os trabalhadores brasileiros. Qualquer tempo de trabalho exercido além desse limite legal ou contratual deve ser remunerado com o acréscimo de no mínimo 50% em dias úteis e 100% aos domingos e feriados.",
      "Uma das maiores preocupações de quem pleiteia horas extras é: 'Como vou provar que fazia serão se o espelho de ponto marcava apenas o horário britânico ou se eu era obrigado a bater o ponto e continuar trabalhando?'. A jurisprudência do Tribunal Superior do Trabalho (TST) é amplamente protetiva nesse sentido.",
      "A Súmula 338 do TST determina que os cartões de ponto que demonstram horários invariáveis de entrada e saída (o chamado 'ponto britânico') são inválidos como meio de prova, invertendo-se o ônus para que a empresa comprove que o empregado não realizava a jornada extraordinária alegada.",
      "Além disso, a sobrejornada pode ser robustamente comprovada por meio de: trocas de mensagens e áudios de WhatsApp fora do horário comercial, histórico de e-mails corporativos enviados à noite, relatórios de login em sistemas internos e depoimentos de testemunhas que presenciavam a rotina de trabalho.",
    ],
    oabDisclaimer:
      "Material exclusivamente didático em observância ao Provimento 205/2021. Cada categoria profissional possui regras específicas sobre prorrogação e banco de horas.",
  },
  {
    id: "negativacao-indevida",
    title: "Negativação Indevida no SPC/Serasa: Dano Moral Presumido e Dever de Cancelamento",
    summary:
      "Inscrição ilícita em cadastros restritivos por contas pagas ou contratos fraudulentos gera direito automático à indenização sem necessidade de provar abalo psicológico.",
    badge: "Direito do Consumidor",
    category: "Direito do Consumidor",
    readTime: "3 min de leitura",
    content: [
      "Ter o nome inscrito indevidamente nos cadastros de inadimplentes (como Serasa, SPC Brasil e Boa Vista) causa restrição severa de crédito, bloqueio de financiamentos, cancelamento de limites bancários e constrangimento perante o mercado de consumo.",
      "O Superior Tribunal de Justia (STJ) consolidou entendimento pacífico de que a negativação indevida gera dano moral 'in re ipsa' (presumido). Isso significa que a própria inclusão ou manutenção indevida do nome no cadastro negativo já é suficiente para gerar o dever de indenizar, não sendo exigido do consumidor comprovar que sofreu sofrimento ou tristeza profunda.",
      "Conforme a Súmula 548 do STJ, após o pagamento de uma dívida legítima, o credor tem o prazo improrrogável de até 5 (cinco) dias úteis para providenciar a exclusão do nome do consumidor dos bancos de dados restritivos. Se não o fizer, a manutenção passa a ser ilícita.",
      "Nas situações em que a negativação decorre de golpes de estelionatários, clonagem de dados ou faturas comprovadamente quitadas, o consumidor pode requerer judicialmente uma tutela de urgência (liminar) para a retirada imediata do seu CPF do cadastro negativo, além de reparação por danos morais.",
    ],
    oabDisclaimer:
      "Artigo educativo para esclarecimento da sociedade civil, conforme as diretrizes éticas da OAB. A condenação em danos morais depende da inexistência de anotações preexistentes legítimas (Súmula 385 do STJ).",
  },
  {
    id: "assedio-moral-trabalho",
    title: "Assédio Moral no Trabalho: Como Identificar, Reunir Provas e Requerer Indenização",
    summary:
      "Perseguições reiteradas, metas inatingíveis acompanhadas de ameaças e humilhações no ambiente corporativo configuram ilícito com dever de ampla reparação.",
    badge: "Dano Existencial",
    category: "Dano Existencial",
    readTime: "4 min de leitura",
    content: [
      "O assédio moral no ambiente corporativo é caracterizado por condutas abusivas, reiteradas e prolongadas no tempo, manifestadas por meio de palavras, gestos ou atitudes que atentam contra a dignidade, a integridade psíquica e a saúde do empregado.",
      "Exemplos corriqueiros reconhecidos pela Justiça do Trabalho incluem: a estipulação deliberada de metas inatingíveis sob ameaça constante de demissão, o isolamento físico ou comunicação restrita do empregado pelo gestor, a atribuição de apelidos pejorativos diante dos colegas e a desqualificação pública da competência profissional.",
      "Para que o assédio moral seja reconhecido e indenizado na esfera judicial, a vítima deve se resguardar reunindo elementos comprobatórios consistentes. Gravações ambientais de conversas das quais o próprio trabalhador participa são plenamente válidas como prova lícita na Justiça do Trabalho.",
      "Além das gravações, prints de conversas em aplicativos de mensagens, histórico de e-mails corporativos, atestados médicos que atestem crises de ansiedade, depressão ou Burnout decorrentes do trabalho e testemunhas presenciais fortalecem a demonstração do dano moral suportado.",
    ],
    oabDisclaimer:
      "Conteúdo puramente didático e informativo, em conformidade com o Provimento nº 205/2021 do CFOAB. Procure um advogado de sua confiança para avaliar as provas do seu caso.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-01",
    category: "Verbas Rescisórias",
    question: "Qual é o prazo legal para a empresa pagar as verbas rescisórias após a demissão?",
    answer:
      "Conforme o artigo 477, § 6º da CLT, a empresa tem o prazo improrrogável de até 10 (dez) dias corridos após o término do contrato de trabalho para efetuar o pagamento integral de todas as verbas rescisórias e disponibilizar os documentos comprobatórios aos órgãos competentes. Se a empresa atrasar mesmo que por um dia, é devida uma multa no valor equivalente a um salário do empregado.",
  },
  {
    id: "faq-02",
    category: "FGTS & Rescisão",
    question: "A empresa não depositava meu FGTS regularmente. O que posso fazer a respeito?",
    answer:
      "A ausência ou irregularidade reiterada nos depósitos do Fundo de Garantia do Tempo de Serviço (FGTS) constitui falta grave do empregador, enquadrada no artigo 483, alínea 'd' da CLT. Essa conduta autoriza o trabalhador a ajuizar uma Ação de Rescisão Indireta, saindo da empresa com o recebimento de todas as verbas da demissão sem justa causa, além de cobrar judicialmente todo o saldo do FGTS corrigido com a multa de 40%.",
  },
  {
    id: "faq-03",
    category: "Rescisão Indireta",
    question: "Como funciona a Rescisão Indireta e preciso continuar trabalhando durante o processo?",
    answer:
      "A Rescisão Indireta é a justa causa aplicada pelo empregado contra a empresa. Nas hipóteses de descumprimento contratual grave (como atraso de salários, assédio moral ou não recolhimento de FGTS), o § 3º do art. 483 da CLT expressamente autoriza que o trabalhador opte por se afastar de suas atividades imediatamente enquanto ingressa com a ação na Justiça do Trabalho, sem que isso seja considerado abandono de emprego.",
  },
  {
    id: "faq-04",
    category: "Horas Extras",
    question: "Como comprovar horas extras se a empresa não registrava corretamente o ponto?",
    answer:
      "Se a empresa exigia a assinatura de cartões de ponto 'britânicos' (com horários uniformes e sem variação) ou impunha o sistema de 'bater e continuar trabalhando', a Súmula 338 do TST invalida esses registros. A jornada real de sobretrabalho pode ser comprovada por mensagens e ordens de serviço no WhatsApp fora do expediente, e-mails enviados à noite, relatórios de login em computadores e depoimentos testemunhais idôneos.",
  },
  {
    id: "faq-05",
    category: "Pejotização",
    question: "Fui obrigado a abrir MEI ou CNPJ para trabalhar. Posso exigir os direitos da CLT?",
    answer:
      "Sim. Se no seu dia a dia você cumpria horários pré-determinados, recebia remuneração fixa habitual, respondia a ordens diretas de superiores hierárquicos e não podia ser substituído por terceiros, a Justiça do Trabalho aplicará o Princípio da Primazia da Realidade (art. 9º da CLT). A relação será reconhecida como de emprego formal, obrigando a empresa a pagar retroativamente FGTS, 13º, férias com 1/3, aviso prévio e adicionais.",
  },
  {
    id: "faq-06",
    category: "Demissão Sem Justa Causa",
    question: "Fui demitido sem justa causa. Quais valores tenho direito a receber?",
    answer:
      "Na demissão imotivada, o trabalhador faz jus ao recebimento de: saldo de salário dos dias trabalhados, aviso prévio indenizado ou trabalhado (proporcional ao tempo de serviço), férias vencidas e proporcionais acrescidas do terço constitucional, 13º salário proporcional, liberação da guia para saque integral do saldo de FGTS acrescido da multa rescisória de 40% e entrega das guias para requerer o Seguro-Desemprego.",
  },
  {
    id: "faq-07",
    category: "Assédio Moral",
    question: "Sofri humilhações e cobranças abusivas no trabalho. Posso gravar conversas?",
    answer:
      "Sim. O Supremo Tribunal Federal (STF) e o TST pacificaram que a gravação ambiental feita por um dos interlocutores, mesmo sem o consentimento do outro, é uma prova lícita e válida no processo judicial, desde que utilizada estritamente para a defesa de seus direitos. Áudios, vídeos e trocas de mensagens podem ser apresentados como prova de assédio moral e perseguição no ambiente corporativo.",
  },
  {
    id: "faq-08",
    category: "Consumidor & Serasa",
    question: "Meu nome foi negativado indevidamente no SPC/Serasa. Quais providências tomar?",
    answer:
      "Quando há inclusão ou manutenção ilícita do nome nos órgãos de proteção ao crédito por dívida inexistente ou quitada, o consumidor tem direito ao cancelamento imediato do apontamento mediante pedido de liminar e à indenização por danos morais presumidos (in re ipsa). Para ajuizar a ação, é necessário reunir o comprovante de pagamento, o extrato da negativação e o boletim de ocorrência (se houver fraude).",
  },
  {
    id: "faq-09",
    category: "Cobrança Indevida",
    question: "Paguei uma cobrança indevida ao banco ou operadora. Como pedir a devolução em dobro?",
    answer:
      "O artigo 42, parágrafo único do CDC determina que o consumidor cobrado em quantia indevida tem direito à repetição do indébito por valor igual ao dobro do que pagou em excesso, acrescido de juros e correção monetária. O Superior Tribunal de Justiça (STJ) firmou que essa restituição em dobro é devida sempre que a cobrança contrariar a boa-fé objetiva, independentemente de prova de má-fé da empresa.",
  },
  {
    id: "faq-10",
    category: "Planos de Saúde",
    question: "O plano de saúde negou um exame ou procedimento prescrito pelo médico. Isso é legal?",
    answer:
      "Não. A jurisprudência dominante entende que o plano de saúde pode estabelecer quais doenças estão cobertas pelo contrato, mas jamais limitar o tipo de tratamento ou procedimento técnico prescrito pelo médico assistente. Diante da negativa de cobertura para cirurgias, próteses ou remédios de alto custo, cabe ação judicial com pedido de tutela de urgência (liminar) para cumprimento em até 24 ou 48 horas.",
  },
  {
    id: "faq-11",
    category: "Atendimento Presencial",
    question: "Como funciona o atendimento presencial na sede física de Curitiba?",
    answer:
      "Nosso escritório físico está localizado na Rua Cel. Brasilino Moura, nº 253, no tradicional bairro Ahú em Curitiba/PR. Realizamos atendimentos presenciais em ambiente privativo, acolhedor e com total discrição, de segunda a sexta-feira, das 08:00 às 18:00, mediante prévio agendamento no WhatsApp para garantir exclusividade na sua consulta.",
  },
  {
    id: "faq-12",
    category: "Atendimento Online",
    question: "Moro em outra cidade ou estado. É seguro realizar a consulta jurídica 100% online?",
    answer:
      "Totalmente seguro. Atuamos de forma híbrida com tecnologia jurídica avançada e processo eletrônico em todo o território nacional (PJe e Projudi). O envio de documentos é realizado por canais criptografados via WhatsApp ou e-mail, e as reuniões são realizadas por videoconferência com o advogado David Meloto. Os contratos são assinados eletronicamente com validade jurídica plena pela plataforma Gov.br.",
  },
  {
    id: "faq-13",
    category: "Contrato Informal",
    question: "Trabalhei durante anos sem carteira assinada. Ainda posso exigir meus direitos?",
    answer:
      "Sim. A falta de anotação na Carteira de Trabalho e Previdência Social (CTPS) é uma infração grave do empregador que não retira do empregado o direito a todas as verbas da lei. É possível ajuizar uma ação para reconhecimento do vínculo de emprego de todo o período, com anotação retroativa na CTPS e pagamento de todos os direitos não pagos.",
  },
  {
    id: "faq-14",
    category: "Prazos Trabalhistas",
    question: "Qual é o prazo limite para entrar com uma ação trabalhista após sair da empresa?",
    answer:
      "Conforme o artigo 7º, inciso XXIX da Constituição Federal, o trabalhador tem o prazo prescricional de até 2 (dois) anos após a extinção do contrato de trabalho para ajuizar a Ação Trabalhista. Dentro dessa ação, é possível cobrar os direitos relativos aos últimos 5 (cinco) anos contados retroativamente a partir da data em que o processo for distribuído na Justiça.",
  },
  {
    id: "faq-15",
    category: "Agendamento",
    question: "Como agendar uma análise técnica preliminar com o advogado David Meloto?",
    answer:
      "O agendamento é simples e rápido. Basta clicar no botão de WhatsApp disponível em nosso site e enviar uma mensagem relatando brevemente sua situação. Nossa equipe jurídica retornará com as orientações iniciais e agendará o horário mais conveniente para o seu atendimento, seja presencialmente em nossa sede no Ahú ou por videoconferência.",
  },
];

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "trabalhista",
    label: "Direito do Trabalho",
    items: FAQ_ITEMS.slice(0, 5),
  },
  {
    id: "rescisao",
    label: "Verbas & Demissão",
    items: [FAQ_ITEMS[0], FAQ_ITEMS[1], FAQ_ITEMS[2], FAQ_ITEMS[5], FAQ_ITEMS[13]],
  },
  {
    id: "consumidor",
    label: "Consumidor & Contratos",
    items: [FAQ_ITEMS[7], FAQ_ITEMS[8], FAQ_ITEMS[9], FAQ_ITEMS[12]],
  },
  {
    id: "atendimento",
    label: "Sede & Consultoria",
    items: [FAQ_ITEMS[10], FAQ_ITEMS[11], FAQ_ITEMS[14]],
  },
];