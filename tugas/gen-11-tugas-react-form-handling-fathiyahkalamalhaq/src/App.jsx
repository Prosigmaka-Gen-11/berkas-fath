import React from "react";
import FormHandlingClass from "./FormHandlingClass";
import FormHandlingFunction from "./FormHandlingFunction";

export default function App(){
  return <>
  <h1 className="text-xl font-semibold text-sky-300">hai, ini dari function</h1>
  <FormHandlingFunction />
  <hr />
  <h1 className="text-xl font-semibold text-sky-300">Ini dari Class Component</h1>
  <FormHandlingClass/>
  </>
  
}