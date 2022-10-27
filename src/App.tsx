import { Container } from "./components/Container";
import { RobotCard } from "./components/RobotCard";
import { RobotsContextProvider } from "./context/providerrobots";
import { listOfRobots } from "./models/listOfRobots";
import { useContext } from "react";
import { RobotsContext } from "./context/contextrobots";

function App() {
    const { robots } = useContext(RobotsContext);

    const renderAllRobotCards = robots.map((robotData) => {
        return <RobotCard data={robotData} key={robotData.name} />;
    });

    return (
        <div className="app">
            <Container>
                <>{renderAllRobotCards} </>
            </Container>
        </div>
    );
}

export default App;
