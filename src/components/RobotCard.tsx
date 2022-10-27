import { Robot } from "../models/listOfRobots";
import { useContext } from "react";
import { RobotsContext } from "../context/contextrobots";

export function RobotCard({ data }: { data: Robot }) {
    const { handleDelete } = useContext(RobotsContext);

    return (
        <div className="robot__card" id={data.id.toString()}>
            <div className="robot__name__container">
                <span className="robot__name">{data.name}</span>
            </div>
            <div className="robot__image__container">
                <img
                    className="robot__image"
                    src={data.imageURL}
                    alt={data.name}
                />
            </div>
            <div className="robot__speed__container">
                <span className="robot__speed"> Speed: {data.speed}</span>
            </div>
            <div className="robot__resistance__container">
                <span className="robot__resistance">
                    Resistance: {data.resistance}
                </span>
            </div>
            <div className="robot__creationDate__container">
                <span className="robot__creationDate">
                    Creation Date: {data.creationDate}
                </span>
            </div>
            <div>
                <button
                    onClick={() => {
                        handleDelete(data.id);
                    }}
                >
                    {" "}
                    DELETE {data.name.toLocaleUpperCase()}{" "}
                </button>
            </div>
        </div>
    );
}
