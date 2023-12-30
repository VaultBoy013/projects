import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface DataFetch {
    address: {
        geolocation: { lat: string; long: string };
        city: string;
        street: string;
        number: number;
        zipcode: string;
    };
    id: number;
    email: string;
    username: string;
    password: string;
    name: { firstname: string; lastname: string; };
    phone: string;
}

enum TypePrefix {
  USER = "user/fetchUsers",
}

const fetchUsers = createAsyncThunk( TypePrefix.USER, async ( num: number ) => {
    const response = await axios.get<DataFetch[]>(
        "https://fakestoreapi.com/users",
        {
            params: {
                limit: num,
            },
        }
    );
    return response.data;
} );
export default fetchUsers;
