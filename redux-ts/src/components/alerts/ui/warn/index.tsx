import React from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
import { Warn } from "../../types/warn";
const Alert: React.FC = () => {
    const { success, warn, userInputValue } = Selector( ( state ) => state.searcherReducer );
    const { error } = Selector( ( state ) => state.fetchReducer );
    const notFound = ( InpVal: string )=>{
        if ( InpVal.length > 20 ) {
            return `${InpVal.slice( 0, 20 )}...`;
        } else {
            return InpVal;
        }
    };
    const trigger = ( !success && warn );
    return (
        <div className={trigger || error ? Warn.SHOW : Warn.HIDDEN + Warn.TOP } role={Warn.ROLE}>
            <div className={Warn.HEADER}>
                {Warn.HEADER_TEXT}
            </div>
            <div className={Warn.BODY}>
                <p>{`${notFound( userInputValue )} ${Warn.TEXT}`}</p>
            </div>
        </div>
    );
};

export default Alert;