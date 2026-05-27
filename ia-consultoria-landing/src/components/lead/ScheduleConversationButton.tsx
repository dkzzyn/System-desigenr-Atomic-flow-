import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useLeadForm } from "../../context/LeadFormContext";

type ScheduleConversationButtonProps = {
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function ScheduleConversationButton({
  className,
  children,
  showArrow = false,
  onClick,
  ...rest
}: ScheduleConversationButtonProps) {
  const { openLeadForm } = useLeadForm();

  return (
    <button
      type="button"
      className={className}
      data-open-lead-form="true"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        openLeadForm();
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
      {showArrow ? <span className="arrow">→</span> : null}
    </button>
  );
}
