import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	register: UseFormRegister<any>;
	error: FieldError | undefined;
}
