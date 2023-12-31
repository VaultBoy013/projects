import React from "react";
import "./css/index.css";
import { AddUser } from "../userForm/ui";
import Alert from "../alerts/ui/warn";
import AlertSuccess from "../alerts/ui/success";
import AlertLoading from "../alerts/ui/loading";

const App: React.FC = () => {
    return (
        <>
            <div className={"container mx-auto bg-gray-100 shadow-md"}>
                <Alert/>
                <AlertSuccess/>
                <AlertLoading/>
                <div className={"flex main-container"}>
                    <AddUser />
                </div>
            </div>
        </>
    );
};

export default App;
