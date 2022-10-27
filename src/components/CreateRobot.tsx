export function CreateRobot() {
    function submitForm(e: React.SyntheticEvent) {
        e.preventDefault();
    }

    return (
        <div>
            <form action="submit" onSubmit={submitForm}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter robot name..."
                    />
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Enter robot image URL"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter robot speed"
                    />
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter robot speed"
                />
            </form>
        </div>
    );
}
