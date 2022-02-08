import PropTypes from "prop-types";
function AddNos(props){
    function add(){
        let sum=0;
        sum = props.numberOne + props.numberTwo;
        document.querySelector(".borderClass").innerHTML += "The sum of two numbers is "+" "+sum
    }
    return (
        <div className="border">
            <h1>Add Numbers using Props</h1>
            <h3>First Number = {props.numberOne}</h3>
            <h3>Second Number = {props.numberTwo}</h3>
            <h3 className="borderClass"></h3>
            <button onClick={add}>Add</button>
        </div>
    );
}
AddNos.propTypes = {
    numberOne: PropTypes.number,
    numberTwo: PropTypes.number
};
export default AddNos;

