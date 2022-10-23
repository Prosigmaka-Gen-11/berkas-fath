import React, { useEffect, useState } from "react"; //hook yg didalam {}

export default function SideEffect (){
    const [toko, setToko] = useState('');
    const [kemeja, setKemeja] = useState("");
    const [celana, setCelana] = useState("");
    const [rangkuman, setRangkuman] = useState("")

    //useEffect menerima 2 argumen
    //pertama akan menerima aksi(efek samping) yg akan dijalankan ketika menerima efek samping
    //kedua adalah part/objek mana yg akan beraksi(yg kena efek samping)
    useEffect(()=>{
        // console.log("efek samping pas awal render");
        //ceritanya ngisi data dari DB
        const dataFromDB = {
            toko: "Shopee",
            kemeja: "Woodcutter",
            celana: "Manzone",
            rangkuman: ""
        }

        setToko(dataFromDB.toko);
        setKemeja(dataFromDB.kemeja);
        setCelana(dataFromDB.celana);

        return ()=>{
            console.log("sebelum componentnya ilang")

            setToko("")
            setKemeja("")
            setCelana("")

        }
    },[]) //hanya bergantung pada render pertama kali==didmount, cirinya dengan list dependency yg kosong
    

    useEffect(()=>{
        console.log("efek sampingnya toko dan celana");

        setRangkuman(`Saya punya kemeja ${kemeja} dan celana ${celana}, belinya di ${toko}`)

        return () => {
            console.log("sebelum toko dan celana hilang");
        }
    },[toko,celana, kemeja]) //useeffect hanya akan berjalan pas pertama render dan ketika toko dan celana ada update
    

    useEffect(()=>{
        console.log("efek samping setiap update");

        return ()=>{
            console.log("sebelum efek samping selanjutnya jalan"); //willunmount
        }
    }) // setiap ada apdet akan jalan, baik itu kemeja/toko mirip dengan didupdate

    return <>
        <h1>Aku side effect</h1>
        <button onClick={()=> setToko('Tokopedia')}>
            {toko}
        </button>
        <button onClick={()=> setKemeja('Uniqlo')}>
            {kemeja}
        </button>
        <button onClick={()=> setCelana('Gutten')}>
            {celana}
        </button>
        <p>{rangkuman}</p>
    </>
}