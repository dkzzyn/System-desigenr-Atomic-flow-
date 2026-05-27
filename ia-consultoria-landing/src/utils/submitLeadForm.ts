import type { SiteMode } from "../constants/siteMode";
import type { LeadFormValues } from "../types/leadForm";

export class LeadSubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LeadSubmitError";
  }
}

export async function submitLeadForm(values: LeadFormValues, mode: SiteMode): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT?.trim();

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        mode,
        source: "atomicflow-landing",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new LeadSubmitError("Não foi possível enviar agora. Tente novamente em instantes.");
    }

    return;
  }

  await new Promise((resolve) => {
    window.setTimeout(resolve, 450);
  });
}
