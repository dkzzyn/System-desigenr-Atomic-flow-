export type LeadFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  teamSize: string;
  goal: string;
  message: string;
};

export const TEAM_SIZE_OPTIONS = [
  { value: "", label: "Selecione" },
  { value: "1-10", label: "1 a 10 pessoas" },
  { value: "11-50", label: "11 a 50 pessoas" },
  { value: "51-200", label: "51 a 200 pessoas" },
  { value: "200+", label: "Mais de 200 pessoas" },
] as const;

export const GOAL_OPTIONS = [
  { value: "", label: "Selecione" },
  { value: "estrategia", label: "Estratégia e roadmap de IA" },
  { value: "automacao", label: "Automatizar processos" },
  { value: "agentes", label: "Agentes de IA sob medida" },
  { value: "integracao", label: "Integração de sistemas" },
  { value: "outro", label: "Outro objetivo" },
] as const;

export const EMPTY_LEAD_FORM: LeadFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  teamSize: "",
  goal: "",
  message: "",
};
