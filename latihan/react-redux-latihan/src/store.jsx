import { configureStore} from "@reduxjs/toolkit";
import bookSlice from "./BookSlice";

//modul dalam redux namanya slice
//store buat nampung berbagai slice

 const store = configureStore({
    reducer:{
        book: bookSlice
    }
})

export default store