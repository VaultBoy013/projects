import React from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
import { Success } from "../../types/success";
import Button from "./button";
const Alert: React.FC = () => {
    const { success } = Selector( ( state ) => state.searcherReducer );
    const { warn } = Selector( ( state ) => state.searcherReducer );
    const trigger = ( success && !warn );
    return (
        <div className={ trigger ? Success.SHOW : Success.HIDDEN } role={Success.ROLE}>
            <p>{Success.TEXT}</p>
            <Button/>
        </div>
    );
};

export default Alert;