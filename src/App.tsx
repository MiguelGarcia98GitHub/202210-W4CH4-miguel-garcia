import { Container } from "./components/Container";
import { RobotCard } from "./components/RobotCard";
import { useContext } from "react";
import { RobotsContext } from "./context/contextrobots";
import { CreateRobot } from "./components/CreateRobot";

function App() {
    const { robots } = useContext(RobotsContext);

    const renderAllRobotCards = robots.map((robotData) => {
        return <RobotCard data={robotData} key={robotData.name} />;
    });

    return (
        <div className="app">
            <CreateRobot />
            <Container>
                <>
                    <>{renderAllRobotCards} </>
                </>
            </Container>
        </div>
    );
}

export default App;
