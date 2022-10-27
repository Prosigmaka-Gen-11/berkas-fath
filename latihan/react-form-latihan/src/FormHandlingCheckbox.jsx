export default function FormHandlingCheckbox (){
    const [single,setSingle] = useState(false);
    const [multi,setMulti] = useState([

    ]);
    
    function handleSingleCheck(evt){
        setSingle(evt.target.checked);
    }
    return <>
        <p>Single: {single? true : false} </p>

        <label htmlFor="">
            Single Checkbox <br />
            <input type="checkbox" checked={single} onChange = {handleSingleCheck}/>
        </label>
        <br /><br />
        Multi Checkbox <br />
        <label htmlFor="">
            <input type="checkbox" value = "banana"/>
            Banana
        </label><br />
        <label htmlFor="">
            <input type="checkbox" value = "papaya"/>
            Papaya
        </label><br />
        <label htmlFor="">
            <input type="checkbox" value = "mango"/>
            Mango
        </label>
    
    </>
}