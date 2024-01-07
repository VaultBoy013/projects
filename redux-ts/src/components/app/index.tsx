import React from "react";
import "./css/index.css";
import { AddUser } from "../userForm/ui";
import Alert from "../alerts/ui/warn";
import AlertSuccess from "../alerts/ui/success";
import AlertLoading from "../alerts/ui/loading";
import Board from "../board/ui";
import { AppClasses } from "./types";



const App: React.FC = () => {
    const screenHeight = window.screen.availHeight;
    return (
        <div className={AppClasses.CONTAINER} style={{minHeight: `${screenHeight}px`}}>
            <Alert/>
            <AlertSuccess/>
            <AlertLoading/>
            <div className={AppClasses.ADD_USER}>
                <AddUser />
            </div>
            <Board/>
        </div>
    );
};

export default App;
