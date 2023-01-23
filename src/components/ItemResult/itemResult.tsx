import { IItemResultProps } from "../../interfaces/IItemResultProps";
import { Li as Item } from "./style";

export const ItemResult = ({ response, days, ...rest }: IItemResultProps) => {
	return (
		<Item role={"itemResult"} {...rest}>
			{days}: <b>R$ {(response / 100).toFixed(2).replace(".", ",")}</b>
		</Item>
	);
};

export default ItemResult;
