import React from "react";
import { actionsBind , Selector } from "../../../../state/hooks";
import { InputUserType } from "../../types/input";

const { autoComp, changeVal, warnForm, successForm } = actionsBind;


const InputUser: React.FC = () => {
    const { userInputValue } = Selector( ( state ) => state.searcherReducer );
    const inputChange = ( { target }: React.ChangeEvent<HTMLInputElement> ) => {
        warnForm( false );
        const { value } = target;
        changeVal( value.replace( /[^a-zA-Z0-9_]*$/, "" ).toUpperCase() ); //
    };

    return (
        <input
            className={InputUserType.CLASS}
            id={InputUserType.ID}
            type={InputUserType.TYPE}
            autoComplete={InputUserType.AUTO_COMPLETE_OFF}
            placeholder={InputUserType.PLACEHOLDER}
            value={userInputValue}
            onChange={inputChange}
            onClick={() => {
                autoComp( true );
                warnForm( false );
                successForm( false );
            }}
        />
    );
};

export default InputUser;
