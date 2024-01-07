import React from "react";
import { ButtonAlert } from "../../../types/success/button";
import { actionsBind } from "../../../../../state/hooks";
const { successForm } = actionsBind;
const Index = () => {
    const onClick = ()=>{successForm( false );};
    return (
        <button className={ButtonAlert.BTN_CLASS} onClick={onClick}>
        🗙
        </button>
    );
};

export default Index;