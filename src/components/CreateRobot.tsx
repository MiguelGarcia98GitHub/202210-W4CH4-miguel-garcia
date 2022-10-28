import { useContext, useState } from "react";
import { RobotsContext } from "../context/contextrobots";

export function CreateRobot() {
    const { handleAdd } = useContext(RobotsContext);

    const [formData, setFormData] = useState({
        name: "",
        imageURL: "",
        speed: 0,
        resistance: 0,
    });

    function submitForm(e: React.SyntheticEvent) {
        e.preventDefault();
        handleAdd(formData);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter robot name..."
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value.trim(),
                            });
                        }}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Enter robot image URL..."
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value.trim(),
                            });
                        }}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="speed"
                        placeholder="Enter robot speed..."
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: Number(e.target.value.trim()),
                            });
                        }}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="resistance"
                        placeholder="Enter robot resistance..."
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: Number(e.target.value.trim()),
                            });
                        }}
                    />
                </label>
                <button type="submit"></button>
            </form>
        </div>
    );
}
