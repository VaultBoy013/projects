import React from "react";
import { AddUser } from "../userForm/ui";
import Alert from "../alerts/wrapper";

const App: React.FC = () => {
    return (
        <>
            <Alert/>
            <div className={"container mx-auto py-10 bg-gray-100 shadow-md"}>
                <AddUser />
            </div>
        </>
    );
};

export default App;
