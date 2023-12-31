import React, { useEffect } from "react";
import { Dispatch, Selector, actionsBind } from "../../../state/hooks";
import fetchUsers from "../../../state/reducers/fetch/asyncThunk";
import { AutoComplete, UserSearcherWrapper } from "../types";
import "../css/style.css";
import { namesHandler } from "../tools/namesHandler";
import BtnUser from "./button";
import InputUser from "./input";
import UserLabel from "./label";
import UserForm from "./form";
const { changeVal, autoComp, warnForm, successForm } = actionsBind;
const AddUser: React.FC = () => {
    const dispatch = Dispatch();
    const { autoComplete } = Selector( ( state ) => state.searcherReducer );
    const autoCompleteClasses: string =
    AutoComplete.UL +
    `${autoComplete ? AutoComplete.SHOW : AutoComplete.HIDDEN}`;
    useEffect( () => {
        dispatch( fetchUsers( 10 ) );
    }, [dispatch] );
    return (
        <div className={UserSearcherWrapper.WRAPPER} >
            <UserForm >
                <div className="mb-4">
                    <UserLabel />
                    <InputUser />
                </div>
                <div className={UserSearcherWrapper.BOTTOM_WRAPPER}>
                    <BtnUser />
                    <ul className={autoCompleteClasses}>
                        {namesHandler()?.map( ( name, i ) => {
                            const nameUp: string = name.toUpperCase();
                            return (
                                <li
                                    className={AutoComplete.LI}
                                    key={name + `${i}li`}
                                    onClick={() => {
                                        warnForm( false );
                                        successForm( false );
                                        changeVal( nameUp );
                                        autoComp( false );
                                    }}
                                >
                                    {nameUp}
                                </li>
                            );
                        } )}
                    </ul>
                </div>
            </UserForm>
        </div>
    );
};

export { AddUser };
