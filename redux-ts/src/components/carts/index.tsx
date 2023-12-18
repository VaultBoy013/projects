import React, { useEffect } from 'react'
import { Dispatch, Selector } from '../../state/hooks'
import fetchUsers from '../../state/actions/fetchUsers'
import { ButtonCart, InputCart, LabelCart, NameType } from './cartsType'

const names: NameType = (data, error, loading) => {
  const nameArr: string[] = []
  data.forEach(({ name }) => {
    nameArr.push(name.firstname)
  })
  if (nameArr.length === data.length && !error && !loading) {
    return nameArr
  }
}

const Wrapper: React.FC = () => {
  const dispatch = Dispatch()
  const { data, error, loading } = Selector((state) => state.fetchReducer)
  useEffect(() => {
    dispatch(fetchUsers(10))
  }, [])
  const allNames = names(data, error, loading)
  return (
    <>
      <div className="w-full max-w-xs m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className={LabelCart.CLASS} htmlFor={LabelCart.HTML_FOR}>
              Username
            </label>
            <input
              className={InputCart.CLASS}
              id={InputCart.ID}
              type={InputCart.TYPE}
              placeholder={InputCart.PLACEHOLDER}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={ButtonCart.CLASS}
              type={ButtonCart.TYPE}
              onClick={() => {
                console.log(allNames)
              }}
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Wrapper
