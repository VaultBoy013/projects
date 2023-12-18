import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface DataFetch {
  address: {
    geolocation: { lat: string; long: string }
    city: string
    street: string
    number: number
    zipcode: string
  }
  id: number
  email: string
  username: string
  password: string
  name: { firstname: string; lastname: string }
  phone: string
}

enum TypePrefix {
  USER = 'user/fetchUsers',
}

const fetchUsers = createAsyncThunk(TypePrefix.USER, (num: number) => {
  return axios
    .get<DataFetch[]>(`https://fakestoreapi.com/users`, {
      params: {
        limit: num,
      },
    })
    .then((res) => res.data)
})

export default fetchUsers
