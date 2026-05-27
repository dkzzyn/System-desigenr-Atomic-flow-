import { createContext, useCallback, useContext, useMemo, useState } from "react";

type LeadFormContextValue = {
  isOpen: boolean;
  openLeadForm: () => void;
  closeLeadForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = useCallback(() => setIsOpen(true), []);
  const closeLeadForm = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openLeadForm, closeLeadForm }),
    [isOpen, openLeadForm, closeLeadForm],
  );

  return <LeadFormContext.Provider value={value}>{children}</LeadFormContext.Provider>;
}

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within LeadFormProvider");
  }
  return context;
}
