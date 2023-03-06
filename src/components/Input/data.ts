import { InputHTMLAttributes } from "react";

export interface IInputLayout extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
}
