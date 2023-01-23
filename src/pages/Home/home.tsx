import Welcome from "../../components/Welcome/welcome";
import Offline from "../../components/Offline/offline";

const Home = () => {
	return (
		<>
			{!navigator.onLine && <Offline />}
			{navigator.onLine && <Welcome />}
		</>
	);
};

export default Home;
