import React, { FormEvent, ReactNode, FC } from "react";
import { UserSearcherWrapper } from "../../types";
import { actionsBind } from "../../../../state/hooks";
import { includesName } from "../../tools/namesHandler";
const { changeVal, warnForm, successForm } = actionsBind;
interface Children {
  children: ReactNode
}



const UserForm: FC<Children> = ( {children} ) => {
    const nameIn = ( includesName() );
    const onSubmit = ( event:  FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        changeVal( "" );
        if ( !nameIn ) {
            warnForm( true );
            successForm( false );
        } else {
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