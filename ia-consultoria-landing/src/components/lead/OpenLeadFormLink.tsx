import type { ReactNode } from "react";
import { useLeadForm } from "../../context/LeadFormContext";

type OpenLeadFormLinkProps = {
  className?: string;
  children: ReactNode;
  onAfterOpen?: () => void;
};

export function OpenLeadFormLink({ className, children, onAfterOpen }: OpenLeadFormLinkProps) {
  const { openLeadForm } = useLeadForm();

  return (
    <a
      href="#contato"
      className={className}
      data-open-lead-form="true"
      onClick={(event) => {
        event.preventDefault();
        openLeadForm();
        onAfterOpen?.();
      }}
    >
      {children}
    </a>
  );
}
