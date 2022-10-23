import React from "react";
import Lifecycle from "./Lifecycle";
import Anak,{ Name, Age } from "./Children";
import SideEffect from "./SideEffect";

export default class App extends React.Component {
  // tahap pertama
  constructor(props) {
    //panggil constructor yg ada di class React.Component
    super(props);


    this.state = {
      name: "fath",
      umur: 20,
      munculinLifeCycle: true,
      munculinSideEffect: true
    }
  }

  // ini yg modern
  // state = {
  //   name: "Fath"
  // }
  //fungsi ubah nama
  ubahNama(){
    this.setState({
      name: "Kalamal"
    })
  }
  // tahap kedua
  render() {
    return <div>
      <h1>Hai Ibu {this.state.name}</h1>
      <Anak name="Bambang" sebutNama = {(namaTersebut)=>{
        alert('Hai Bambang dan '+namaTersebut)
        this.setState({
          name: namaTersebut
        })
        }} />
      <button onClick={()=>this.ubahNama()}>
        Ubah Nama {Name} {Age}
      </button>

      <br />
      <button onClick={()=> this.setState({ munculinLifeCycle:false})}>
        hilangin Lifecycle
      </button>

      {/* penulisan if dalam js, klo lebih dari 1 line maka pake ( div ) atau divnya bisa pake fragment */}
      {this.state.munculinLifeCycle
      ?  <>
          <h1>Aku bagian dari lifecycle</h1>
          <h2>aku juga, kita didalam if true</h2>
          <Lifecycle name={this.state.name}/>
      </>
        
      : this.state.name == 'fath'
      ? <h2>Namaku Fath</h2>
      : this.state.name == "Kalamal"
      ? <h2>Namaku Kalamal</h2>
      : null
      }

      <button onClick={()=> this.setState({munculinSideEffect:false})}>
        hilangin SideEffect
      </button>

      {this.state.munculinSideEffect
      ? <SideEffect />
      : null
      }
    </div>
  }
}