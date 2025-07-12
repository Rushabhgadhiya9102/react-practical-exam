import { createSlice } from "@reduxjs/toolkit";
import { createData, deleteData, fetchData, updateData } from "../thunk/thunk";

const initialState = {
    students : [],
    selectedData : null,
    loading : false,
    error: null
}

const studentSlice = createSlice({

    name:"students",
    initialState,
    reducers:{
        setSelectedData:(state,action)=>{
            state.selectedData = action.payload
        },
        clearSelectedData : (state)=>{
            state.selectedData = null
        }
    },
    extraReducers: (builder)=>{

        // ------------ fetch data ---------------

        builder.addCase(fetchData.pending,(state) =>{
            state.loading = true
        })

        builder.addCase(fetchData.fulfilled,(state,action) =>{
            state.loading = false
            state.students = action.payload
        })

        builder.addCase(fetchData.rejected,(state,action) =>{
            state.loading = false
            state.error = action.error.message
        })

        // ------------ create data ---------------

        builder.addCase(createData.pending,(state) =>{
            state.loading = true
        })

        builder.addCase(createData.fulfilled,(state,action) =>{
            state.loading = false
            state.students.push(action.payload)
        })

        builder.addCase(createData.rejected,(state,action) =>{
            state.loading = false
            state.error = action.error.message
        })

        // ------------ delete data ---------------

        builder.addCase(deleteData.pending,(state) =>{
            state.loading = true
        })

        builder.addCase(deleteData.fulfilled,(state,action) =>{
            state.loading = false
            state.students = state.students.filter(student => student.id !== action.payload)
        })

        builder.addCase(deleteData.rejected,(state,action) =>{
            state.loading = false
            state.error = action.error.message
        })

        // -------------- update data ----------------

        builder.addCase(updateData.pending,(state)=>{
            state.loading = true
        })

        builder.addCase(updateData.fulfilled,(state,action)=>{
            state.loading = false
            state.students = state.students.map((val) => {
                if(val.id === action.payload.id){
                    return action.payload
                }else{
                    return val
                }
            })
        })

        builder.addCase(updateData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })

    }

})

export const {setSelectedData, clearSelectedData} = studentSlice.actions
export default studentSlice.reducer