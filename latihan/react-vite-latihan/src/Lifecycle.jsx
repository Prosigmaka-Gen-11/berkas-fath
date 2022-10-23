import React from "react";

export default class Lifecycle extends React.Component {
    //method paling awal muncul di layar
    constructor() {
        super();

        //Inisialisasi state
        this.state = {
            mobil: "",
            motor: "",
            rangkuman: ""
        }
    }

    //buat ambil data dari database, tahap setelah render
    componentDidMount() {
        console.log("subscribe ke db gopay, tiap ada perubahan di gopay diambil")
        // document.addEventListener("mousemove", this.getMouseMoveEvent)
        this.setState({
            mobil: "Avanza",
            motor: "Beat",
        })
    }

    //untuk eval ulang data, ngubah state lain. setelah dirender kembali ke didupdate
    //buat mengubah state lain/menjalankan fungsi berdasarkan perubahan yg terjadi di layar
    componentDidUpdate(propsSebelumnya, stateSebelumnya) {
        //bakal nampilin seluruh state beserta isinya di console
        console.log(propsSebelumnya)
        console.log("props terbaru: ",this.props.name)
        console.log(stateSebelumnya)
        console.log(this.state)

        //jika nama mobil sebelumny ga sama dengan yg skg maka rangkumannya akan diubah, begitu juga yg motor
        if(stateSebelumnya.mobil!== this.state.mobil || stateSebelumnya.motor!== this.state.motor) {
            this.setState({
                rangkuman: `mobil ${this.state.mobil} dan motor ${this.state.motor}`
            })
        }
    }


    //ketika komponen akan hilang dari layar, buat bersihin event listener
    //buat bersihin event listener dari console
    componentWillUnmount() {
        console.log("saya akan menghilang")
        console.log("bisa dipake buat unsubscribe ke db gopay")
        // document.removeEventListener("mousemove", this.getMouseMoveEvent)
        
        //biasa dipakai untuk form agar setelah disubmit bisa kembali kosong
        this.setState({
            mobil: "",
            motor: "",
            rangkuman: ""
        })
    }
    //untuk menangkap pergerakan mouse
    getMouseMoveEvent(evt){
        // document.addEventListener("wheel", evt => console.log(evt.offsetY))
        console.log(evt.offsetY)
    }
    
    
    // gambar kode ke layar, fungsinya buat nampilin html 
    render() {
        return <div>
            <h3>Nama saya: {this.props.name}</h3>
            <ul>
                <li>mobil: {this.state.mobil}</li>
                <li>motor: {this.state.motor}</li>
            </ul>
            <p>{this.state.rangkuman}</p>
            <button onClick={()=> this.setState({mobil:'kijang'})}>
                Ubah Mobil
            </button>
            <button onClick={()=> this.setState({motor:'supra'})}>
                Ubah Motor
            </button>
            
        </div>
    }
}