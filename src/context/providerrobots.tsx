import { listOfRobots } from "../models/listOfRobots";
import { useState } from "react";
import { RobotsContext } from "./contextrobots";
import { HandleAddRobot } from "../models/handleAddRobot";

export function RobotsContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots = listOfRobots;
    const [robots, setRobots] = useState(initialRobots);

    const handleDelete = (id: number) => {
        let newState = [...robots];
        newState = newState.filter((robot) => robot.id !== id);
        setRobots(newState);
    };

    const handleAdd = (data: HandleAddRobot) => {
        let newState = [...robots];
        const newRobot = {
            ...data,
            id: Math.floor(Math.random() * 1000000),
            creationDate: new Date().toLocaleDateString(),
        };
        newState.push(newRobot);
        setRobots(newState);
    };

    const context = {
        robots,
        handleDelete,
        handleAdd,
    };

    return (
        <RobotsContext.Provider value={context}>
            {children}
        </RobotsContext.Provider>
    );
}
