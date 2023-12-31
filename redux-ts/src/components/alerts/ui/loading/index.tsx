import React from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
const Alert: React.FC = () => {
    const { loading } = Selector( ( state ) => state.fetchReducer );
    return (
        <div className={ loading ? "bg-indigo-900 text-center py-4 lg:px-4 alert-show " : "alert-hidden "}>
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert">
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Wait</span>
                <span className="font-semibold mr-2 text-left flex-auto">Loading data...</span>
            </div>
        </div>
    );
};

export default Alert;