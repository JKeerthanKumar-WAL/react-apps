import{useState} from "react";
function Average(){
    let [number, setNumber] = useState([]);
    function showAvg(event){
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.number;
        let newArray = [...number, inputTag.value]
        setNumber(newArray);
    }
    function average(){
        let sum = 0;
        let avg = 0;
        number.map(function(val,index){
            sum += Number(val);
        })
        avg = sum/number.length
        document.querySelector(".ban").innerHTML = "The average of all the numbers in the state variable is" + " " +avg;
    }
    return(
        <div className="App-div">
            <h1>Average</h1>
            <form onSubmit={showAvg}>
                <input type="number" name="number" /><br /><br />
                <button>Add Number</button><br /><br />
            </form>
            <button onClick={average}>Average</button><br /><br />
            <div className="wrap">
                {number.map(function(val, index){
                    return <div className="divone"><b>{val}</b></div>
                })}
                <b><div className="ban"></div></b>
            </div>
        </div>
    )
}
export default Average;