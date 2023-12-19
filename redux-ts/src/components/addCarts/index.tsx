import React, { useEffect, useState } from 'react'
import { Dispatch, Selector } from '../../state/hooks'
import fetchUsers from '../../state/actions/fetchUsers'
import { ButtonCart, InputCart, LabelCart, NameType } from './AddUserType'
import './css/style.scss'
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
  const [inputVal, setInputVal] = useState<string>('')
  const [helpBox, setHelpBox] = useState<boolean>(false)
  const inputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setInputVal(value.replace(/[^a-zа-яё]/gi, ''))
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
            <label className={LabelCart.CLASS} htmlFor={LabelCart.HTML_FOR}>
              Username
            </label>
            <input
              className={InputCart.CLASS}
              id={InputCart.ID}
              type={InputCart.TYPE}
              autoComplete={InputCart.AUTO_COMPLETE_OFF}
              placeholder={InputCart.PLACEHOLDER}
              value={inputVal}
              onChange={inputChange}
              onClick={() => {
                setHelpBox(true)
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={ButtonCart.CLASS}
              type={ButtonCart.TYPE}
              onClick={() => {
                setHelpBox(false)
              }}
            >
              ADD
            </button>
            <ul
              className={`bg-white shadow-md rounded px-4 py-2 text-sm font-bold absolute auto-completes overflow-auto ${
                helpBox ? 'block' : 'hidden'
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
                      setInputVal(nameUp)
                      setHelpBox(false)
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

// top: 100px;
// right: 34px;
