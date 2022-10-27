import { listOfRobots } from "../models/listOfRobots";
import { useState } from "react";
import { RobotsContext } from "./contextrobots";

export function RobotsContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots = listOfRobots;
    const [robots, setRobots] = useState(initialRobots);

    const handleDelete = (id: number) => {
        let newState = [...robots];
        newState = newState.filter((robot) => robot.id !== id);
        console.log(newState);
        setRobots(newState);
    };

    const handleAdd = ({
        name,
        imageURL,
        speed,
        resistance,
    }: {
        name: string;
        imageURL: string;
        speed: number;
        resistance: number;
    }) => {
        let newState = [...robots];
        const robotId = Math.floor(Math.random() * 1000000);
        const robotName = name;
        const robotImageURL = imageURL;
        const robotSpeed = speed;
        const robotResistance = resistance;
        const robotCreationDate = new Date().toLocaleDateString();

        const newRobot = {
            id: robotId,
            name: robotName,
            imageURL: robotImageURL,
            speed: robotSpeed,
            resistance: robotResistance,
            creationDate: robotCreationDate,
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
