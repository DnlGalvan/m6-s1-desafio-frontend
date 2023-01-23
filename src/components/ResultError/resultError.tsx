import { IResultErrorProps } from "../../interfaces/IResultErrorProps";
import { ErrorWrapper, Message, TitleResult } from "./style";

const ResultError = ({ menssage, ...rest }: IResultErrorProps) => {
	return (
		<ErrorWrapper role={"resultError"} {...rest}>
			<TitleResult>DESCULPE!</TitleResult>
			<Message>{menssage}</Message>
		</ErrorWrapper>
	);
};

export default ResultError;
