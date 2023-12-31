import React from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
const Alert: React.FC = () => {
    const { success } = Selector( ( state ) => state.searcherReducer );
    const { warn } = Selector( ( state ) => state.searcherReducer );
    const trigger = ( success && !warn );
    return (
        <div className={ trigger ? "flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 alert-show" : "alert-hidden" } role="alert">
            <p>Name added!</p>
        </div>
    );
};

export default Alert;