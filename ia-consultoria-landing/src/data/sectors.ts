export type SectorIconKey =
  | "gear"
  | "chat"
  | "truck"
  | "edit"
  | "chart"
  | "dollar";

export type Sector = {
  title: string;
  text: string;
  icon: SectorIconKey;
};

export const sectors: Sector[] = [
  {
    title: "Operações e processos",
    text: "Automatize o que é repetitivo e ganhe previsibilidade com agentes acoplados aos seus sistemas.",
    icon: "gear",
  },
  {
    title: "CRM e vendas",
    text: "Qualificação de leads, follow-up e priorização de oportunidades com IA conversacional.",
    icon: "chat",
  },
  {
    title: "Logística",
    text: "Previsão de demanda, alertas de gargalo e apoio à decisão sobre estoque e rotas.",
    icon: "truck",
  },
  {
    title: "Criação e conteúdo",
    text: "Workflows de briefing, revisão e variantes de campanha com guardrails de marca.",
    icon: "edit",
  },
  {
    title: "Dados e insights",
    text: "Relatórios assistidos, detecção de padrões e narrativas a partir dos seus dados.",
    icon: "chart",
  },
  {
    title: "Financeiro e administrativo",
    text: "Conciliações, classificação de documentos e alertas — sempre com auditoria humana.",
    icon: "dollar",
  },
];

export const heroPills: string[] = [
  "Operações",
  "Vendas & CRM",
  "Logística",
  "Dados",
  "Atendimento",
];
