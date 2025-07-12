import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/students/";

// -------------- fetch data ---------------

export const fetchData = createAsyncThunk(
  "student/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(api);
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// --------------- create data ----------------

export const createData = createAsyncThunk(
  "student/createData",
  async (students, { rejectWithValue }) => {
    try {
      const response = await axios.post(api, students);
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ----------------- delete data ------------------

export const deleteData = createAsyncThunk(
  "student/deleteData",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${api}${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ----------------- update data ------------------

export const updateData = createAsyncThunk(
  "student/updateData",
  async ({ id, students }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${api}${id}`, students);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
