import React from "react";
import { ButtonUserType } from "../../types/button";
import { actionsBind, Selector } from "../../../../state/hooks";
import { includesName} from "../../tools/namesHandler";
import pushCart from "../../tools/submit";
const { autoComp, changeVal, warnForm, successForm } = actionsBind;



const BtnUser: React.FC = () => {
    const { loading, error, data } = Selector( ( state ) => state.fetchReducer );
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
                    pushCart( userInputValue, data );
                } else if ( btnBlocking && !nameIn ) {
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
