import { Outlet } from "react-router-dom"

export default function BookLayout (){
    return <>
        <h3>Popular Books</h3>
        <ul>
            <li>Harry Potter</li>
            <li>Ayat-ayat Cinta</li>
            <li>How to influence people</li>
        </ul>

        <br /><hr /><br />
        {/* hasil render children di main jsx bakal ditampilin di outlet */}
        <Outlet/> 
    </>
}