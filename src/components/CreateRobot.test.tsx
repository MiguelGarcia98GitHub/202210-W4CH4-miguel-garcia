import { screen, render } from "@testing-library/react";
import { RobotCard } from "./RobotCard";

describe("Given CreateRobot Component", () => {
    describe("When we render the component...", () => {
        test("Then it should display its resistance somewhere", () => {
            const mockRobotData = {
                id: Math.floor(Math.random() * 1000000),
                name: "Terminator",
                imageURL:
                    "https://static.abc.es/media/tecnologia/2017/09/25/inteligencia-artificial-terminator-kKjH--1240x698.jpg",
                speed: 8,
                resistance: 9,
                creationDate: new Date().toLocaleDateString(),
            };
            render(<RobotCard data={mockRobotData} />);
            const element = screen.getByText(/Resistance/i);
            expect(element).toBeInTheDocument();
        });
        test("Then it should display speed somewhere", () => {
            const mockRobotData = {
                id: Math.floor(Math.random() * 1000000),
                name: "Terminator",
                imageURL:
                    "https://static.abc.es/media/tecnologia/2017/09/25/inteligencia-artificial-terminator-kKjH--1240x698.jpg",
                speed: 8,
                resistance: 9,
                creationDate: new Date().toLocaleDateString(),
            };
            render(<RobotCard data={mockRobotData} />);
            const element = screen.getByText(/Speed/i);
            expect(element).toBeInTheDocument();
        });
    });
});
