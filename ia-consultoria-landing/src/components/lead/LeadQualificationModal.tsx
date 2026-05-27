import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useLeadForm } from "../../context/LeadFormContext";
import { useSiteMode } from "../../context/SiteModeContext";
import {
  EMPTY_LEAD_FORM,
  GOAL_OPTIONS,
  TEAM_SIZE_OPTIONS,
  type LeadFormValues,
} from "../../types/leadForm";
import { LeadSubmitError, submitLeadForm } from "../../utils/submitLeadForm";

type FormErrors = Partial<Record<keyof LeadFormValues, string>>;

function validate(values: LeadFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Informe seu nome.";
  if (!values.email.trim()) {
    errors.email = "Informe seu e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "E-mail inválido.";
  }
  if (!values.phone.trim()) errors.phone = "Informe telefone ou WhatsApp.";
  if (!values.company.trim()) errors.company = "Informe a empresa.";
  if (!values.role.trim()) errors.role = "Informe seu cargo.";
  if (!values.teamSize) errors.teamSize = "Selecione o tamanho da equipe.";
  if (!values.goal) errors.goal = "Selecione o objetivo principal.";
  if (!values.message.trim()) errors.message = "Conte brevemente o contexto do projeto.";
  else if (values.message.trim().length < 20) {
    errors.message = "Descreva o contexto com pelo menos 20 caracteres.";
  }

  return errors;
}

export function LeadQualificationModal() {
  const titleId = useId();
  const descId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const { isOpen, closeLeadForm } = useLeadForm();
  const { mode } = useSiteMode();
  const [values, setValues] = useState<LeadFormValues>(EMPTY_LEAD_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    setSubmitted(false);
    setSubmitError(null);
    setSubmitting(false);
    setErrors({});
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLeadForm();
    };

    window.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("input, select, textarea, button")?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [isOpen, closeLeadForm]);

  useEffect(() => {
    if (!isOpen) {
      setValues(EMPTY_LEAD_FORM);
      setErrors({});
      setSubmitted(false);
      setSubmitError(null);
      setSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateField = (field: keyof LeadFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitError(null);
    setSubmitting(true);

    try {
      await submitLeadForm(values, mode);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof LeadSubmitError
          ? error.message
          : "Não foi possível enviar agora. Tente novamente em instantes.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div className="lead-modal" role="presentation">
      <button
        type="button"
        className="lead-modal__backdrop"
        aria-label="Fechar formulário"
        onClick={closeLeadForm}
      />
      <div
        ref={dialogRef}
        className="lead-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <button type="button" className="lead-modal__close" onClick={closeLeadForm} aria-label="Fechar">
          ×
        </button>

        {submitted ? (
          <div className="lead-modal__success">
            <p className="lead-modal__kicker">Recebido</p>
            <h2 id={titleId} className="lead-modal__title">
              Qualificação enviada
            </h2>
            <p id={descId} className="lead-modal__lead">
              Obrigado, <strong>{values.name.split(" ")[0] || values.name}</strong>. Nossa equipe analisa
              seu contexto e retorna em até 1 dia útil no e-mail{" "}
              <strong>{values.email}</strong>.
            </p>
            <div className="lead-modal__actions">
              <button type="button" className="lead-modal__submit" onClick={closeLeadForm}>
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="lead-modal__kicker">Agendar conversa</p>
            <h2 id={titleId} className="lead-modal__title">
              Qualificação rápida
            </h2>
            <p id={descId} className="lead-modal__lead">
              Preencha os campos abaixo para entendermos seu contexto antes da conversa.
            </p>

            <form className="lead-form" onSubmit={handleSubmit} noValidate>
              <div className="lead-form__grid">
                <label className="lead-form__field">
                  <span>Nome completo *</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? <em className="lead-form__error">{errors.name}</em> : null}
                </label>

                <label className="lead-form__field">
                  <span>E-mail corporativo *</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <em className="lead-form__error">{errors.email}</em> : null}
                </label>

                <label className="lead-form__field">
                  <span>WhatsApp / telefone *</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone ? <em className="lead-form__error">{errors.phone}</em> : null}
                </label>

                <label className="lead-form__field">
                  <span>Empresa *</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={values.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    aria-invalid={Boolean(errors.company)}
                  />
                  {errors.company ? <em className="lead-form__error">{errors.company}</em> : null}
                </label>

                <label className="lead-form__field">
                  <span>Cargo *</span>
                  <input
                    type="text"
                    name="role"
                    autoComplete="organization-title"
                    value={values.role}
                    onChange={(event) => updateField("role", event.target.value)}
                    aria-invalid={Boolean(errors.role)}
                  />
                  {errors.role ? <em className="lead-form__error">{errors.role}</em> : null}
                </label>

                <label className="lead-form__field">
                  <span>Tamanho da equipe *</span>
                  <select
                    name="teamSize"
                    value={values.teamSize}
                    onChange={(event) => updateField("teamSize", event.target.value)}
                    aria-invalid={Boolean(errors.teamSize)}
                  >
                    {TEAM_SIZE_OPTIONS.map((option) => (
                      <option key={option.value || "empty"} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.teamSize ? <em className="lead-form__error">{errors.teamSize}</em> : null}
                </label>

                <label className="lead-form__field lead-form__field--full">
                  <span>Objetivo principal *</span>
                  <select
                    name="goal"
                    value={values.goal}
                    onChange={(event) => updateField("goal", event.target.value)}
                    aria-invalid={Boolean(errors.goal)}
                  >
                    {GOAL_OPTIONS.map((option) => (
                      <option key={option.value || "empty"} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.goal ? <em className="lead-form__error">{errors.goal}</em> : null}
                </label>

                <label className="lead-form__field lead-form__field--full">
                  <span>Contexto / desafio *</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Ex.: Queremos automatizar atendimento e integrar CRM com IA..."
                    value={values.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? <em className="lead-form__error">{errors.message}</em> : null}
                </label>
              </div>

              <div className="lead-modal__actions">
                {submitError ? <p className="lead-form__error lead-form__error--submit">{submitError}</p> : null}
                <button type="submit" className="lead-modal__submit" disabled={submitting}>
                  {submitting ? "Enviando..." : "Enviar qualificação"}
                </button>
                <button type="button" className="lead-modal__ghost" onClick={closeLeadForm}>
                  Cancelar
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
