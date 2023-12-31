import React from "react";
import { ButtonUserType } from "../../types";
import { actionsBind, Selector } from "../../../../state/hooks";
import { includesName} from "../../tools/namesHandler";
const { autoComp, changeVal, warnForm, successForm } = actionsBind;

const BtnUser: React.FC = () => {
    const { loading, error } = Selector( ( state ) => state.fetchReducer );
    const { userInputValue } = Selector( ( state ) => state.searcherReducer );
    const btnBlocking: boolean = !loading && !error && userInputValue.length > 0;
    const nameIn = ( includesName() );
    const classBtn: () => string = () => {
        if ( btnBlocking ) {
            return ButtonUserType.UNBLOCK;
        } else {
            return ButtonUserType.BLOCK;
        }
    };
    return (
        <button
            className={classBtn()}
            type={ButtonUserType.TYPE}
            onClick={() => {
                if ( btnBlocking && nameIn ) {
                    autoComp( false );
                    changeVal( "" );
                    warnForm( false );
                    successForm( true );
                } else if ( !nameIn ) {
                    warnForm( true );
                    successForm( false );
                }
            }}
        >
      ADD CART
        </button>
    );
};

export default BtnUser;
