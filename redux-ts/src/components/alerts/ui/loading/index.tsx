import React from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
import { LoadingAlert, LoadingText } from "../../types/loading";

const Alert: React.FC = () => {
    const { loading } = Selector( ( state ) => state.fetchReducer );
    return (
        <div className={ loading ? LoadingAlert.SHOW : LoadingAlert.HIDDEN }>
            <div className={LoadingAlert.WRAPPER}
                role={LoadingAlert.WRAPPER_ROLE}>
                <span className={LoadingAlert.SPAN_WAIT}>{LoadingText.WAIT}</span>
                <span className={LoadingAlert.SPAN_TEXT}>{LoadingText.LOADING_DATA}</span>
            </div>
        </div>
    );
};

export default Alert;