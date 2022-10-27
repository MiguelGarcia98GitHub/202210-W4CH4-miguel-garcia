import { Robot } from "./../models/listOfRobots";
import { createContext } from "react";

const initialContext: {
    robots: Array<Robot>;
    handleDelete: (deletedID: number) => void;
    handleAdd: (data: {
        name: string;
        imageURL: string;
        speed: number;
        resistance: number;
    }) => void;
} = {
    robots: [],
    handleDelete: () => undefined,
    handleAdd: () => undefined,
};

export const RobotsContext = createContext(initialContext);
