import React from "react";
import { ButtonUserType } from "../../types";
import { actionsBind, Selector } from "../../../../state/hooks";
import { includesName} from "../../tools/namesHandler";
const { autoComp, changeVal, alertForm } = actionsBind;

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
                } else if ( !nameIn ) {
                    alertForm( true );
                }
            }}
        >
      ADD CART
        </button>
    );
};

export default BtnUser;
