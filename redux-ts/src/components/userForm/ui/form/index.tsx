import React, { FormEvent, ReactNode, FC } from "react";
import { UserSearcherWrapper } from "../../types/form";
import { actionsBind, Selector } from "../../../../state/hooks";
import { includesName } from "../../tools/namesHandler";
import pushCart from "../../tools/submit";
const { changeVal, warnForm, successForm } = actionsBind;
interface Children {
  children: ReactNode
}



const UserForm: FC<Children> = ( {children} ) => {
    const { data } = Selector( ( state ) => state.fetchReducer );
    const { userInputValue } = Selector( ( state ) => state.searcherReducer );
    const nameIn = ( includesName() );
    const onSubmit = ( event:  FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        changeVal( "" );
        if ( !nameIn ) {
            warnForm( true );
            successForm( false );
        } else {
            pushCart( userInputValue, data );
            warnForm( false );
            successForm( true );
        }

    };
    return (
        <form className={UserSearcherWrapper.FORM} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default UserForm;