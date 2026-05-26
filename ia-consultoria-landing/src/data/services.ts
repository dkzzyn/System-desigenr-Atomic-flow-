export type Service = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const services: Service[] = [
  {
    title: "Análise estratégica",
    description:
      "Em poucos dias mergulhamos em processos, pessoas e oportunidades reais para montar seu plano de implementação de IA.",
    tags: ["Estratégia", "Roadmap"],
    href: "#contato",
  },
  {
    title: "Letramento em IA",
    description:
      "Capacitamos sua equipe para entender IA, reduzir medo e usar ferramentas com confiança no dia a dia.",
    tags: ["Educação", "Capacitação"],
    href: "#contato",
  },
  {
    title: "Consultoria em Gen AI",
    description:
      "Escolhemos stack e fluxos certos para cada setor — prompts, RAG, políticas de uso e integrações.",
    tags: ["Stack", "Produtividade"],
    href: "#contato",
  },
  {
    title: "Agentes e sistemas",
    description:
      "Construímos agentes e sistemas que resolvem problemas reais em vendas, operação e conteúdo.",
    tags: ["Desenvolvimento", "Inovação"],
    href: "#contato",
  },
];
