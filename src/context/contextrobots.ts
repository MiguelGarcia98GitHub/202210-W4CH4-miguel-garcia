import { Robot } from "./../models/listOfRobots";
import { createContext } from "react";

const initialContext: {
    robots: Array<Robot>;
    handleDelete: (deletedID: number) => void;
} = {
    robots: [],
    handleDelete: () => undefined,
};

export const RobotsContext = createContext(initialContext);
