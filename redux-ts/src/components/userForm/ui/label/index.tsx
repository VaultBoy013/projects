import React from "react";
import { LabelUserType } from "../../types";
import {labelName} from "../../tools/namesHandler";

const UserLabel = () => {
    const labelNameToggle = labelName();
    let textColor = "black";

    if ( labelNameToggle ) {
        textColor = "text-teal-500";
    } else {
        textColor = "text-black-500";
    }

    return (
        <label className={LabelUserType.CLASS + ` ${textColor}`} htmlFor={LabelUserType.HTML_FOR}>
            {labelNameToggle ? `Add the name  ${labelNameToggle}?` : "Search name"}
        </label>
    );
};

export default UserLabel;

