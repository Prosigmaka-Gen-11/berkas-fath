import React, { Component } from "react";
import Lifecycle from "./Lifecycle";
import SideEffect from "./SideEffect";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Fath",
      gender: "Perempuan",
      donasi: 180000,
      lifecycle: true,
      sideEffect: true
    }
  }

  render() {
    return <div>
      <div className="w-4/6 mx-auto mt-10 text-center ">
        <h1 className="text-3xl font-serif mb-5">Contributor's Card </h1>
      </div>

      <div className="w-1/2 mx-auto shadow-md bg-rose-100 p-5 mb-5">
        <ul className="mx-56 shadow p-5 bg-sky-100 font-mono ">
          <li>Name: {this.state.name}</li>
          <li>Gender: {this.state.gender}</li>
          <li>Donate: {this.state.donasi}</li>
        </ul>
      </div>

      <div className="w-full mx-auto text-center  item-center">
        <div className="grid grid-cols-2">
          <div className="mx-auto  px-5 ">
            {this.state.lifecycle
            ? <Lifecycle name={this.state.name} />
            : null
            }

            <button 
            className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => this.setState({ lifecycle: true})}>
              Show  Lifecycle
            </button>
            <button 
            className="focus:outline-none text-white bg-rose-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={()=> this.setState({lifecycle: false})}>
              Clear Lifecycle
            </button>
            <br />

          </div>
          <div className="mx-auto px-5">
            {this.state.sideEffect
            ? <SideEffect name = {this.state.name} donasi = {this.state.donasi} />
            : null
            }
            
            <button 
            className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={(e) => this.setState({ sideEffect: true})}>
              Show Side Effect
            </button>
            <button 
            className="focus:outline-none text-white bg-rose-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={()=> this.setState({sideEffect: false})}>
              Clear Side Effect
            </button>
          </div>
        </div>
      </div>
    </div>
  }
}