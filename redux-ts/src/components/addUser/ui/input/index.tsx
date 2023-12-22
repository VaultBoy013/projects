import React from 'react';
import { actionsBind } from '../../../../state/hooks';
import { InputUserType } from '../../types';
import { Selector } from '../../../../state/hooks';

const { autoComp, changeVal } = actionsBind;

const InputUser: React.FC = () => {
  const { userInputValue } = Selector((state) => state.inputUserReducer);
  const inputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    changeVal(value.replace(/[^a-zа-яё]/gi, '').toUpperCase()); //
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
        autoComp(true);
      }}
    />
  );
};

export default InputUser;
