import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'The Witches',
    type: 'Novel',
    author: 'Road Dahl'
    //ini bentuknya bisa object
}

export const bookSlice = createSlice( {
    name: "book",
    initialState, //initialState:initialState
    reducers: {
        //jangan masukin axios disini
        // ubahJudul(keadaan sekg, payloadnya atau value yg ingin diubah ){
        ubahJudul(state){
            state.title = 'Chocolate Factory'
        },
        ubahTipe(state, action){
            state.type = action.payload.tipeBuku
            state.author = action.payload.penulis
            console.log(action.payload)
        },
        ubahSemua(state, action){
            return action.payload
        }
    }
})

export const { ubahJudul,ubahTipe, ubahSemua } = bookSlice.actions //beda dengan yg ubahTipe (, actions)

export default bookSlice.reducer