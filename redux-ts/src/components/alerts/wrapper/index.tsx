import React from "react";
import { Selector } from "../../../state/hooks";

const Alert: React.FC = () => {
    const { alert } = Selector( ( state ) => state.searcherReducer );
    const alertTrigger = ( alert );
    console.log( alertTrigger );
    return (
        <div className={alertTrigger ? "" : "hidden " + "p-top-10" } role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-1">
              Name not found.
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700">
                <p>This name not found, try entering a different name.</p>
            </div>
        </div>
    );
};

export default Alert;