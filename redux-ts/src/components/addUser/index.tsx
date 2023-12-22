import React, { useEffect } from 'react';
import { Dispatch, Selector, actionsBind } from '../../state/hooks';
import fetchUsers from '../../state/reducers/fetch/asyncThunk';
import { AutoComplete, NameType } from './types';
import './css/style.scss';
import BtnUser from './ui/button';
import InputUser from './ui/input';
import UserLabel from './ui/label';

const { changeVal, autoComp } = actionsBind;

const names: NameType = (dataFetch) => {
  const nameArr: string[] = [];
  dataFetch.forEach(({ name }) => {
    nameArr.push(name.firstname);
  });
  if (nameArr.length === dataFetch.length) {
    return nameArr;
  }
};
const AddUser: React.FC = () => {
  const dispatch = Dispatch();
  const { data } = Selector((state) => state.fetchReducer);
  const { autoComplete } = Selector((state) => state.inputUserReducer);
  const autoCompleteClasses: string =
    AutoComplete.UL +
    `${autoComplete ? AutoComplete.SHOW : AutoComplete.HIDDEN}`;
  useEffect(() => {
    dispatch(fetchUsers(10));
  }, []);
  const allNames = names(data);
  console.log(1);
  return (
    <>
      <div className="w-full max-w-xs m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
          <div className="mb-4">
            <UserLabel/>
            <InputUser />
          </div>
          <div className="flex items-center justify-between">
            <BtnUser />
            <ul className={autoCompleteClasses}>
              {allNames?.map((name, i) => {
                const nameUp: string = name.toUpperCase();
                return (
                  <li
                    className={AutoComplete.LI}
                    key={name + `${i}li`}
                    onClick={() => {
                      changeVal(nameUp);
                      autoComp(false);
                    }}
                  >
                    {nameUp}
                  </li>
                );
              })}
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
