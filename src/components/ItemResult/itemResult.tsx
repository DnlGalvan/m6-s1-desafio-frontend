import { IItemResultProps } from "../../interfaces/IItemResultProps";
import { Li as Item } from "./style";

export const ItemResult = ({ response, ...rest }: IItemResultProps) => {
	return (
		<Item role={"itemResult"} {...rest}>
			Amanhã: <b>R$ {(response / 100).toFixed(2).replace(".", ",")}</b>
		</Item>
	);
};

export default ItemResult;
