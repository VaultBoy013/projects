import React from "react";
import { LabelUserType, TextColor } from "../../types/label";
import {labelName} from "../../tools/namesHandler";

const UserLabel = () => {
    const labelNameToggle = labelName();
    let textColor;

    if ( labelNameToggle ) {
        textColor = TextColor.BLUE;
    } else {
        textColor = TextColor.BLACK;
    }

    return (
        <label className={LabelUserType.CLASS + textColor} htmlFor={LabelUserType.HTML_FOR}>
            {labelNameToggle ? `Add the user  ${labelNameToggle}?` : LabelUserType.SEARCH_USER}
        </label>
    );
};

export default UserLabel;

