import offline from "../../assets/offline.png";
import { ContainerOffline, Image, Title } from "./style";

const Offline = () => {
	return (
		<ContainerOffline>
			<Title role={"title"}>Houve algum problema com sua conexão de internet!</Title>
			<Image role={"image"}src={offline} alt="Offline" />
		</ContainerOffline>
	);
};

export default Offline;
