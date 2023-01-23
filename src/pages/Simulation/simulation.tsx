//REACT
import { useState } from "react";
import { useForm } from "react-hook-form";
//HOOH-FORM
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//AXIOS E APIS
import { AxiosError } from "axios";
import api from "../../service/api";
import apiTimeout from "../../service/apiTimeout";
import apiError from "../../service/apiError";
//COMPONENTS
import Input from "../../components/Input/input";
import Loading from "../../components/Loading/loading";
import ItemResult from "../../components/ItemResult/itemResult";
import ResultError from "../../components/ResultError/resultError";
//INTERFACES
import { IError } from "../../interfaces/IError";
import { IRequestProps } from "../../interfaces/IRequestProps";
import { IResponseProps } from "../../interfaces/IResponseProps";
//STYLES
import {
	Container,
	ContainerForm,
	ContainerResult,
	FormWrapper,
	InputWrapper,
	TitleResult,
	TitleSimulation,
} from "./style";

const Simulation = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [responseData, setResponseData] = useState({
		1: 0,
		15: 0,
		30: 0,
		90: 0,
	} as IResponseProps);
	const [error, setError] = useState<AxiosError<IError>>();

	const formSchema = yup.object().shape({
		amount: yup
			.number()
			.typeError("Deve ser um número")
			.min(1000, "Deve ser maior ou igual a 1000")
			.max(99999999, "Deve ser menor ou igual que 99999999")
			.required("Campo Obrigatório"),
		installments: yup
			.number()
			.typeError("Deve ser um número")
			.min(1, "Mínimo de 1 parcela")
			.max(12, "Máximo de 12 parcelas")
			.required("Campo Obrigatório"),
		mdr: yup
			.number()
			.typeError("Deve ser um número")
			.min(1, "Deve ser maior ou igual a 1")
			.max(100, "Deve ser menor ou ingual a 100")
			.required("Campo Obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRequestProps>({ resolver: yupResolver(formSchema) });

	const onSubmitRequest = async (data: IRequestProps) => {
		try {
			setIsLoading(true);
			setError(undefined);
			const res = await api.post("", data);

			//Teste API error Timeout
			// const res = await apiTimeout.post("", data);

			//Teste API error Internal Error
			// const res = await apiError.post("", data);

			setResponseData(res.data);
			setIsLoading(false);
		} catch (error) {
			const err = error as AxiosError<IError>;
			setError(err);
			setIsLoading(false);
		}
	};

	return (
		<Container>
			{isLoading && <Loading />}
			<ContainerForm>
				<TitleSimulation>Simule sua Antecipação</TitleSimulation>
				<FormWrapper onSubmit={handleSubmit(onSubmitRequest)}>
					<InputWrapper>
						<Input
							role={"inputAmount"}
							type={"number"}
							label="Informe o valor da venda em centavos *"
							name="amount"
							register={register}
							error={errors.amount}
							placeholder={"Ex: 1000"}
						/>
					</InputWrapper>
					<InputWrapper>
						<Input
							role={"inputInstallments"}
							type={"number"}
							label="Em quantas parcelas *"
							name="installments"
							register={register}
							error={errors.installments}
							placeholder={"Ex: 12"}
						/>
					</InputWrapper>
					<InputWrapper>
						<Input
							role={"inputMdr"}
							type={"number"}
							label="Informe o percentual de MDR *"
							name="mdr"
							register={register}
							error={errors.mdr}
							placeholder={"Ex: 40"}
						/>
					</InputWrapper>
					<input type="submit" hidden />
				</FormWrapper>
			</ContainerForm>
			{error?.response?.request.status === 408 && (
				<ResultError
					menssage={
						"Sua requisição está demorando para retornar. Tente novamente!"
					}
				/>
			)}
			{error?.response?.request.status === 500 && (
				<ResultError
					menssage={
						"Houve um problema interno com sua requisição. Tente novamente!"
					}
				/>
			)}
			{!error && (
				<ContainerResult>
					<TitleResult>VOCÊ RECEBERÁ</TitleResult>
					<ItemResult response={responseData[1]} />
					<ItemResult response={responseData[15]} />
					<ItemResult response={responseData[30]} />
					<ItemResult response={responseData[90]} />
				</ContainerResult>
			)}
		</Container>
	);
};

export default Simulation;
