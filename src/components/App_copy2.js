//Example of react hook
import React, { useState } from "react";

const App = () => {
    const [resource, setResource] = useState("posts");
    //can call useState as many times as needed
    //const [resource2, setResource2] = useState("random");

    return (
        <div>
            <div>
                <button onClick={() => setResource("posts")}>
                    Posts
                </button>
                <button onClick={() => setResource("todos")}>
                    Todos
                </button>
            </div>
            {resource}
        </div>
    );
}

export default App;