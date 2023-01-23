import { useNavigate } from "react-router-dom";
import { BtnSimulation, Description, Title, WelcomeWrapper } from "./style";

const Welcome = () => {
	const navigate = useNavigate();

	return (
		<WelcomeWrapper>
			<Title role={"title"}>Bem vindo ao Simulator!</Title>
			<Description role={"description"}>
				O Simulator é uma calculadora de antecipação de transações!
				<br />
				<br />
				Tendo em mãos o valor total de sua venda (em centavos), o total
				de parcelas e o percentual da taxa MDR, você poderá saber quanto
				custará antecipar sua transação.
				<br />
				<br />
				Para continuar, basta clicar em "Simular"!
			</Description>
			<BtnSimulation role={"button"}
				type="button"
				onClick={() => navigate("/simulation")}
			>
				Simular
			</BtnSimulation>
		</WelcomeWrapper>
	);
};

export default Welcome;
