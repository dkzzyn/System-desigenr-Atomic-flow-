export type DifferentialIconKey = "shield" | "trend" | "users";

export type Differential = {
  title: string;
  text: string;
  icon: DifferentialIconKey;
};

export const differentials: Differential[] = [
  {
    title: "Segurança e governança",
    text: "IA com proteção de dados, políticas claras e controle desde o primeiro sprint.",
    icon: "shield",
  },
  {
    title: "ROI comprovado",
    text: "Priorizamos iniciativas que aumentam receita ou cortam custo — não automação por automação.",
    icon: "trend",
  },
  {
    title: "Especialistas multidisciplinares",
    text: "Negócio, produto e engenharia alinhados: estratégia que vira sistema em produção.",
    icon: "users",
  },
];
