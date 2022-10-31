import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ShopDetail(){
    const params = useParams()
    const [shop, setShop] = useState({})

    async function getDetail(){
        const res = await axios.get("http://localhost:3000/registrasi/"+params.shopId)
        setShop(res.data)
    }

    useEffect(() => {
        getDetail()
    },[])
    
    return <>
        <h1 className="text-cyan-700 text-3xl font-bold font-sans text-center p-5">Detail Pembelian</h1>
    
        <div className="shadow-md w-[750px] mx-auto p-5 ">
            <table className=" w-2/3 mx-auto font-mono">
                <tr>
                    <td>Nama</td>
                    <td className="px-4">:</td>
                    <td>{shop.nama}</td>
                </tr>
                <tr>
                    <td>No HP</td>
                    <td className="px-4">:</td>
                    <td>{shop.hp}</td>
                </tr>
                <tr>
                    <td>Tanggal Pengiriman</td>
                    <td className="px-4">:</td>
                    <td>{shop.tanggal}</td>
                </tr>
                <tr>
                    <td>Item yang dipesan</td>
                    <td className="px-4">:</td>
                    <td>{shop.item}</td>
                </tr>
                <tr>
                    <td>Opsi Pembayaran</td>
                    <td className="px-4">:</td>
                    <td>{shop.opsi}</td>
                </tr>
                <tr>
                    <td>Jasa Pengiriman</td>
                    <td className="px-4">:</td>
                    <td>{shop.jasa}</td>
                </tr>
                <tr>
                    <td>Saran dan Kritik</td>
                    <td className="px-4">:</td>
                    <td>{shop.saran}</td>
                </tr>
            </table>
        </div>
    </>
}