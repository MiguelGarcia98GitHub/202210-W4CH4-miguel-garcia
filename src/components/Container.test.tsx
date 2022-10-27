import { screen, render } from "@testing-library/react";
import { Container } from "./Container";
import { RobotCard } from "./RobotCard";

describe("Given Container Component", () => {
    describe("When we render the component...", () => {
        test("Then it should have at least 1 children RobotCard component", () => {
            const mockRobotData = {
                id: Math.floor(Math.random() * 1000000),
                name: "Terminator",
                imageURL:
                    "https://static.abc.es/media/tecnologia/2017/09/25/inteligencia-artificial-terminator-kKjH--1240x698.jpg",
                speed: 8,
                resistance: 9,
                creationDate: new Date().toLocaleDateString(),
            };
            render(<Container children={<RobotCard data={mockRobotData} />} />);
            const element = screen.getByText(/Speed/i);
            expect(element).toBeInTheDocument();
        });
    });
});
