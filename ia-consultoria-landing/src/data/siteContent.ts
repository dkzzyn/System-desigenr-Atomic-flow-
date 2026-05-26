import type { SiteMode } from "../constants/siteMode";
import { differentials as consultoriaDifferentials } from "./differentials";
import { pillars as consultoriaPillars } from "./pillars";
import { sectors as consultoriaSectors } from "./sectors";
import { services as consultoriaServices } from "./services";

export type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export type SectorItem = {
  title: string;
  text: string;
  icon: "gear" | "chat" | "truck" | "edit" | "chart" | "dollar";
};

export type DifferentialItem = {
  title: string;
  text: string;
  icon: "shield" | "trend" | "users";
};

export type PillarItem = {
  step: number;
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    trustLine: [string, string, string];
    microStrong: string;
    pillsLabel: string;
    heroPills: string[];
  };
  problem: {
    kicker: string;
    titleEmphasis: string;
    titleRest: string;
    lead: string;
    imageAlt: string;
    cta: string;
    microStrong: string;
  };
  services: {
    kicker: string;
    titleBefore: string;
    titleEmphasis: string;
    lead: string;
    items: ServiceItem[];
  };
  marquee: {
    phraseBefore: string;
    phraseEmphasis: string;
    phraseAfter: string;
    srOnly: string;
  };
  sectors: {
    kicker: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    lead: string;
    items: SectorItem[];
  };
  tech: {
    kicker: string;
    titleBefore: string;
    titleEmphasis: string;
    lead?: string;
    leadStrong?: string;
    leadRest?: string;
  };
  differentials: {
    kicker: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    lead: string;
    items: DifferentialItem[];
    cta: string;
    microStrong: string;
  };
  method: {
    kicker: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    lead: string;
    pillars: PillarItem[];
    cta: string;
    microStrong: string;
  };
  faq: {
    kicker: string;
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    lead: string;
    cta: string;
  };
  footer: {
    tagline: string;
    ctaLabel: string;
  };
};

export const modeBrandLabel: Record<SiteMode, string> = {
  consultoria: "Atomic Flow",
  marketing: "Atomic Flow Mkt",
};

export const navBrandLabel: Record<SiteMode, string> = {
  consultoria: "atomicflow.ai",
  marketing: "Atomic Flow Mkt",
};

export const siteContentByMode: Record<SiteMode, SiteContent> = {
  consultoria: {
    meta: {
      title: "Consultoria em IA | Atomic Flow",
      description:
        "Consultoria especializada em IA — estratégia, implementação e agentes sob medida para sua empresa.",
    },
    hero: {
      titleBefore: "Fazemos ",
      titleEmphasis: "inteligência artificial",
      titleAfter: " trabalhar por você",
      lead:
        "Transformamos empresas tradicionais em organizações AI-first: do diagnóstico e letramento à implementação de agentes, automações e integrações sob medida.",
      primaryCta: "Entender como funciona",
      secondaryCta: "Agendar conversa",
      trustLine: ["Estratégia", "Implementação", "Resultados mensuráveis"],
      microStrong: "conversa rápida",
      pillsLabel: "Onde costumamos atuar",
      heroPills: ["Operações", "Vendas & CRM", "Logística", "Dados", "Atendimento"],
    },
    problem: {
      kicker: "Para equipes sem IA, o problema é esse",
      titleEmphasis: "equipe",
      titleRest: " está no limite?",
      lead:
        "O time está sobrecarregado porque o negócio não foi estruturado com mentalidade AI-first. O tempo não aumenta — mas a produtividade pode multiplicar com processos e agentes bem desenhados.",
      imageAlt: "Pressão pelo tempo e prazos — equipes no limite antes de uma operação AI-first",
      cta: "Entender como funciona",
      microStrong: "conversa rápida",
    },
    services: {
      kicker: "Serviços",
      titleBefore: "Da ideia ao ",
      titleEmphasis: "deploy",
      lead: "Quatro frentes típicas de uma jornada de consultoria orientada a resultado.",
      items: consultoriaServices,
    },
    marquee: {
      phraseBefore: "Recupere o ",
      phraseEmphasis: "tempo da sua equipe",
      phraseAfter: " com IA sob medida",
      srOnly: "Recupere o tempo da sua equipe com IA sob medida",
    },
    sectors: {
      kicker: "O que a IA faz por você",
      titleBefore: "É ",
      titleEmphasis: "muito mais",
      titleAfter: " que automação",
      lead: "Inteligência estratégica para cada área do negócio — sempre com foco em impacto mensurável.",
      items: consultoriaSectors,
    },
    tech: {
      kicker: "Tecnologias",
      titleBefore: "Stack & ",
      titleEmphasis: "ecossistema",
      leadStrong: "crescimento com IA",
      leadRest: " — escolhidas conforme seu contexto.",
    },
    differentials: {
      kicker: "Diferenciais",
      titleBefore: "Por que ",
      titleEmphasis: "escolher",
      titleAfter: " a Atomic Flow?",
      lead: "Não somos apenas uma equipe técnica vendendo buzzwords. Somos consultores que ligam processo, pessoas e tecnologia.",
      items: consultoriaDifferentials,
      cta: "Entender como funciona",
      microStrong: "conversa rápida",
    },
    method: {
      kicker: "Transformação AI-first",
      titleBefore: "Os ",
      titleEmphasis: "4 pilares",
      titleAfter: " do método",
      lead: "Colocar IA no centro do negócio exige método: validar, educar, construir e escalar. É assim que geramos resultados sustentáveis.",
      pillars: consultoriaPillars,
      cta: "Entender como funciona",
      microStrong: "conversa rápida",
    },
    faq: {
      kicker: "Perguntas frequentes",
      title: "Antes de toda grande parceria",
      items: [
        {
          question: "Quem é a Atomic Flow?",
          answer:
            "Somos consultores de transformação digital com foco em IA: estratégia, implementação e capacitação. O objetivo é fazer a IA sair do slide e entrar no fluxo de trabalho — com governança e métricas.",
        },
        {
          question: "O que exatamente vocês entregam?",
          answer:
            "Diagnóstico e roadmap, treinamentos, escolha de stack, integrações (APIs, RAG, automações), agentes sob medida e acompanhamento pós-go-live. O escopo é definido junto com você em fases.",
        },
      ],
    },
    finalCta: {
      titleBefore: "Faça a ",
      titleEmphasis: "IA",
      titleAfter: " trabalhar por você",
      lead: "Empresas que adotam IA com método costumam acelerar resultados de forma desproporcional.",
      cta: "Agendar conversa",
    },
    footer: {
      tagline: "Atomic Flow — consultoria em IA",
      ctaLabel: "Falar com consultor",
    },
  },

  marketing: {
    meta: {
      title: "Marketing com IA | Atomic Flow Mkt",
      description:
        "Marketing orientado a performance com IA — estratégia, conteúdo, mídia paga, automação e conversão.",
    },
    hero: {
      titleBefore: "Marketing que escala com ",
      titleEmphasis: "inteligência artificial",
      titleAfter: " de ponta a ponta",
      lead:
        "Planejamos, produzimos e otimizamos campanhas com IA: conteúdo em escala, mídia paga inteligente, automação de funis e relatórios que mostram o que realmente converte.",
      primaryCta: "Ver abordagem",
      secondaryCta: "Falar com o time",
      trustLine: ["Conteúdo", "Performance", "Conversão"],
      microStrong: "diagnóstico gratuito",
      pillsLabel: "Canais que aceleramos",
      heroPills: ["Paid Media", "Conteúdo", "E-mail", "Social", "SEO", "CRO"],
    },
    problem: {
      kicker: "Para times de marketing sob pressão",
      titleEmphasis: "campanha",
      titleRest: " não escala sozinha?",
      lead:
        "Briefings acumulados, criativos atrasados e budget queimado sem clareza de ROI. Marketing manual não acompanha a velocidade do mercado — mas IA bem aplicada acelera produção, segmentação e otimização.",
      imageAlt: "Time de marketing sob pressão de prazos, métricas e volume de campanhas",
      cta: "Ver como funciona",
      microStrong: "diagnóstico gratuito",
    },
    services: {
      kicker: "Serviços",
      titleBefore: "Da estratégia ao ",
      titleEmphasis: "scale",
      lead: "Quatro frentes para acelerar marketing com IA — sempre ligadas a métricas de negócio.",
      items: [
        {
          title: "Estratégia & posicionamento",
          description:
            "Mapeamos audiência, proposta de valor e oportunidades no funil. Definimos onde IA gera mais impacto em aquisição, retenção e LTV.",
          tags: ["Estratégia", "Funil"],
          href: "#contato",
        },
        {
          title: "Conteúdo & criativos",
          description:
            "Briefings, copies, variações de anúncio e calendário editorial acelerados por IA — com voz de marca, guardrails e revisão humana.",
          tags: ["Conteúdo", "Criativos"],
          href: "#contato",
        },
        {
          title: "Mídia & automação",
          description:
            "Campanhas paid, segmentação, fluxos de nutrição e relatórios automatizados para reduzir CAC e escalar o que funciona.",
          tags: ["Paid Media", "Automação"],
          href: "#contato",
        },
        {
          title: "Analytics & CRO",
          description:
            "Dashboards, testes A/B assistidos e insights de conversão. Transformamos dados em decisões de budget, criativo e canal.",
          tags: ["Dados", "Conversão"],
          href: "#contato",
        },
      ],
    },
    marquee: {
      phraseBefore: "Converta mais com ",
      phraseEmphasis: "marketing inteligente",
      phraseAfter: " e IA aplicada",
      srOnly: "Converta mais com marketing inteligente e IA aplicada",
    },
    sectors: {
      kicker: "O que aceleramos",
      titleBefore: "Marketing ",
      titleEmphasis: "além",
      titleAfter: " do básico",
      lead: "Campanhas, conteúdo e growth com IA — cada canal conectado a métricas reais de aquisição e conversão.",
      items: [
        {
          title: "Paid media & performance",
          text: "Estruturação de campanhas, criativos em variação, otimização de lances e relatórios de ROAS e CAC.",
          icon: "chart",
        },
        {
          title: "Conteúdo & social",
          text: "Calendário editorial, copies, roteiros e adaptação multicanal com consistência de marca.",
          icon: "edit",
        },
        {
          title: "E-mail & automação",
          text: "Fluxos de nutrição, segmentação comportamental e personalização em escala.",
          icon: "chat",
        },
        {
          title: "SEO & inbound",
          text: "Pesquisa de keywords, briefings de artigo, clusters de conteúdo e otimização assistida.",
          icon: "gear",
        },
        {
          title: "Brand & criativos",
          text: "Diretrizes visuais, variações de peças e testes criativos acelerados por IA.",
          icon: "dollar",
        },
        {
          title: "Analytics & CRO",
          text: "Funis, heatmaps narrados, hipóteses de teste e priorização do que move conversão.",
          icon: "truck",
        },
      ],
    },
    tech: {
      kicker: "Ferramentas",
      titleBefore: "Stack de ",
      titleEmphasis: "growth",
      lead:
        "Mídia paga, CRM, analytics e criativos conectados — montamos o stack certo para seu canal, budget e maturidade de dados.",
    },
    differentials: {
      kicker: "Diferenciais",
      titleBefore: "Por que ",
      titleEmphasis: "Atomic Flow Mkt",
      titleAfter: "?",
      lead: "Não entregamos volume vazio. Construímos um sistema de marketing que escala com criatividade, dados e IA — do plano ao resultado.",
      items: [
        {
          title: "Performance de verdade",
          text: "Cada entrega ligada a KPIs: CAC, ROAS, conversão, LTV. Otimizamos o que move receita — não vanity metrics.",
          icon: "trend",
        },
        {
          title: "Marca protegida",
          text: "IA com guardrails de tom, visual e compliance. Criatividade em escala sem perder identidade nem qualidade.",
          icon: "shield",
        },
        {
          title: "Criativo + dados",
          text: "Estrategistas, copywriters e analistas trabalhando juntos — campanha bonita que também converte.",
          icon: "users",
        },
      ],
      cta: "Ver abordagem",
      microStrong: "diagnóstico gratuito",
    },
    method: {
      kicker: "Método de growth",
      titleBefore: "Os ",
      titleEmphasis: "4 pilares",
      titleAfter: " do marketing com IA",
      lead: "Escalar marketing exige processo: diagnosticar o funil, produzir em volume, otimizar campanhas e converter mais — com IA em cada etapa.",
      pillars: [
        {
          step: 1,
          title: "Diagnosticar funil",
          text: "Auditoria de canais, mensagens, métricas e gargalos. Priorizamos quick wins com maior impacto em conversão.",
        },
        {
          step: 2,
          title: "Produzir em escala",
          text: "Conteúdo, criativos e fluxos com IA + revisão humana. Mais volume, mesma qualidade de marca.",
        },
        {
          step: 3,
          title: "Otimizar campanhas",
          text: "Testes, segmentação e ajustes contínuos em paid, e-mail e landing pages com dados em tempo real.",
        },
        {
          step: 4,
          title: "Escalar conversão",
          text: "Playbooks, automações e melhoria contínua pós-lançamento — do lead ao cliente recorrente.",
        },
      ],
      cta: "Ver abordagem",
      microStrong: "diagnóstico gratuito",
    },
    faq: {
      kicker: "Perguntas frequentes",
      title: "Antes de acelerar seu marketing",
      items: [
        {
          question: "O que é a Atomic Flow Mkt?",
          answer:
            "É a vertical de marketing da Atomic Flow: estratégia, conteúdo, mídia paga, automação e analytics potencializados por IA. Focamos em performance, marca e escala — não em posts soltos.",
        },
        {
          question: "Vocês substituem meu time de marketing?",
          answer:
            "Não. Atuamos como parceiros estratégicos: aceleramos produção, trazemos método e ferramentas de IA, e liberamos seu time para decisões criativas e de negócio. Podemos operar junto ou capacitar internamente.",
        },
        {
          question: "Quais resultados posso esperar?",
          answer:
            "Depende do ponto de partida, mas clientes típicos buscam redução de tempo de produção, mais variações criativas para teste, melhor ROAS/CAC e funis mais previsíveis. Definimos metas claras na fase de diagnóstico.",
        },
      ],
    },
    finalCta: {
      titleBefore: "Faça seu ",
      titleEmphasis: "marketing",
      titleAfter: " trabalhar por você",
      lead: "Marcas que aplicam IA no marketing costumam ganhar velocidade, escala e eficiência de forma desproporcional.",
      cta: "Falar com o time",
    },
    footer: {
      tagline: "Atomic Flow — marketing com IA",
      ctaLabel: "Falar com o time",
    },
  },
};
