import type { Tech } from "./tech";

export type MarketingTechCategory = {
  id: string;
  label: string;
  tools: Tech[];
};

const MKT_LOGO = (file: string) => `/logos/marketing/png/${file}.png`;

export const marketingTechCategories: MarketingTechCategory[] = [
  {
    id: "paid",
    label: "Mídia paga",
    tools: [
      { name: "Meta Ads", icon: "meta", logo: MKT_LOGO("meta") },
      { name: "Google Ads", icon: "google-ads", logo: MKT_LOGO("google-ads") },
      { name: "LinkedIn Ads", icon: "linkedin", logo: MKT_LOGO("linkedin") },
    ],
  },
  {
    id: "crm",
    label: "CRM & e-mail",
    tools: [
      { name: "HubSpot", icon: "hubspot", logo: MKT_LOGO("hubspot") },
      { name: "Klaviyo", icon: "klaviyo", logo: MKT_LOGO("klaviyo") },
      { name: "Mailchimp", icon: "mailchimp", logo: MKT_LOGO("mailchimp") },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & SEO",
    tools: [
      { name: "Google Analytics", icon: "ga4", logo: MKT_LOGO("ga4") },
      { name: "Hotjar", icon: "hotjar", logo: MKT_LOGO("hotjar") },
      { name: "Semrush", icon: "semrush", logo: MKT_LOGO("semrush") },
    ],
  },
  {
    id: "creative",
    label: "Criativos & automação",
    tools: [
      { name: "Canva", icon: "canva", logo: MKT_LOGO("canva") },
      { name: "Zapier", icon: "zapier", logo: MKT_LOGO("zapier") },
      { name: "OpenAI", icon: "openai", logo: MKT_LOGO("openai") },
    ],
  },
];
