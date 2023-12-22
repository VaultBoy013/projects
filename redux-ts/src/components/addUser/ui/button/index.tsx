import React from 'react';
import { ButtonUserType } from '../../types';
import { actionsBind, Selector } from '../../../../state/hooks';
const { autoComp, changeVal } = actionsBind;

const BtnUser: React.FC = () => {
  const { loading, error } = Selector((state) => state.fetchReducer);
  const { userInputValue } = Selector((state) => state.inputUserReducer);
  const btnBlocking: boolean = !loading && !error && userInputValue.length > 0;
  const classBtn: () => string = () => {
    if (btnBlocking) {
      return ButtonUserType.CLASS;
    } else {
      return ButtonUserType.CLASS_BLOCKING;
    }
  };
  return (
    <button
      className={classBtn()}
      type={ButtonUserType.TYPE}
      onClick={() => {
        if (btnBlocking) {
          autoComp(false);
          changeVal('');
        }
      }}
    >
      ADD CART
    </button>
  );
};

export default BtnUser;
