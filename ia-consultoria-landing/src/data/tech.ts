export type TechIconKey =
  | "openai"
  | "anthropic"
  | "langchain"
  | "n8n"
  | "postgres"
  | "vertex"
  | "huggingface"
  | "ollama";

export type Tech = {
  name: string;
  icon: TechIconKey;
  logo: string;
};

export const tech: Tech[] = [
  { name: "OpenAI", icon: "openai", logo: "/logos/openai.svg" },
  { name: "Anthropic", icon: "anthropic", logo: "/logos/anthropic.svg" },
  { name: "LangChain", icon: "langchain", logo: "/logos/langchain.svg" },
  { name: "n8n", icon: "n8n", logo: "/logos/n8n.svg" },
  { name: "PostgreSQL", icon: "postgres", logo: "/logos/postgresql.svg" },
  { name: "Vertex AI", icon: "vertex", logo: "/logos/googlecloud.svg" },
  { name: "Hugging Face", icon: "huggingface", logo: "/logos/huggingface.svg" },
  { name: "Ollama", icon: "ollama", logo: "/logos/ollama.svg" },
];
