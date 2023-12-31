import React from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
const Alert: React.FC = () => {
    const { success } = Selector( ( state ) => state.searcherReducer );
    const { warn } = Selector( ( state ) => state.searcherReducer );
    const { userInputValue } = Selector( ( state ) => state.searcherReducer );
    const notFound = ( InpVal: string )=>{
        if ( InpVal.length > 20 ) {
            return `${InpVal.slice( 0, 20 )}...`;
        } else {
            return InpVal;
        }
    };
    const trigger = ( !success && warn );
    return (
        <div className={trigger ? "alert-show" : "alert-hidden " + "p-top-10" } role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-1">
              Name not found.
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700">
                <p>{`${notFound(userInputValue)} not found, try entering a different name.`}</p>
            </div>
        </div>
    );
};

export default Alert;