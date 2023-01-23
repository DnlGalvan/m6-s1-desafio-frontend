import {
	Input as InputValues,
	Span as Error,
	Label as LabelInput,
} from "./style";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IInputProps } from "../../interfaces/IInputProps";

const Input = ({ label, name, register, error, ...rest }: IInputProps) => {
	return (
		<>
			<LabelInput>{label}:</LabelInput>
			<InputValues {...rest} {...register(name)} />
			<Error role={"error"}>
				{error?.message}
				{""}
				{error?.message && <MdOutlineErrorOutline />}
			</Error>
		</>
	);
};

export default Input;
