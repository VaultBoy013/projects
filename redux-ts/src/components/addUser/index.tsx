import React, { useEffect} from 'react'
import { Dispatch, Selector } from '../../state/hooks'
import fetchUsers from '../../state/actions/fetchUsers'
import { ButtonUser, InputUser, LabelUser, NameType } from './userTypes'
import './css/style.scss'
import { autoComp, changeVal } from '../../state/reducers/userSearcher'
const names: NameType = (data, error, loading) => {
  const nameArr: string[] = []
  data.forEach(({ name }) => {
    nameArr.push(name.firstname)
  })
  if (nameArr.length === data.length && !error && !loading) {
    return nameArr
  }
}
const AddUser: React.FC = () => {
  const dispatch = Dispatch()
  const { data, error, loading } = Selector((state) => state.fetchReducer)
  const { changeValue, autoComplete } = Selector((state) => state.searcherReducer)
  const inputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    dispatch(changeVal(value.replace(/[^a-zа-яё]/gi, '').toUpperCase()))//
  }
  useEffect(() => {
    dispatch(fetchUsers(10))
  }, [])
  const allNames = names(data, error, loading)
  return (
    <>
      <div className="w-full max-w-xs m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
          <div className="mb-4">
            <label className={LabelUser.CLASS} htmlFor={LabelUser.HTML_FOR}>
              Search name
            </label>
            <input
              className={InputUser.CLASS}
              id={InputUser.ID}
              type={InputUser.TYPE}
              autoComplete={InputUser.AUTO_COMPLETE_OFF}
              placeholder={InputUser.PLACEHOLDER}
              value={changeValue}
              onChange={inputChange}
              onClick={() => {
                dispatch(autoComp(true))
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={ButtonUser.CLASS}
              type={ButtonUser.TYPE}
              onClick={() => {
                dispatch(autoComp(false))
                dispatch(changeVal(''))//
              }}
            >
              ADD CART
            </button>
            <ul
              className={` bg-white shadow-md rounded px-4 py-2 text-sm font-bold absolute  overflow-auto ${
                autoComplete ? 'auto-completes' : 'auto-completes-off'
              }`}
            >
              {allNames?.map((name, i) => {
                const nameUp: string = name.toUpperCase()
                return (
                  <li
                    className={
                      'cursor-pointer text-gray-500 hover:text-blue-500'
                    }
                    key={name + `${i}li`}
                    onClick={() => {
                      dispatch(changeVal(nameUp))//
                      dispatch(autoComp(false))
                    }}
                  >
                    {nameUp}
                  </li>
                )
              })}
            </ul>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddUser
