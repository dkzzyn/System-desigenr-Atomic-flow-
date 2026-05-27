/** URL pública do site após deploy (sem barra no final). */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://atomicflowia.vercel.app";

export const SITE_NAME = "Atomic Flow";
