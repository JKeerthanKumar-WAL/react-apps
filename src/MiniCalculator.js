import PropTypes from "prop-types";
function MiniCalculator(props){
    let result = 0;
    if(props.operation == "add"){
        result = props.noOne + props.noTwo;
       return <div className="miniClass">
           <h1>Mini Calculator</h1>
           <h3>Operation = {props.operation}</h3>
            <h3>First Number = {props.noOne}</h3>
            <h3>Second Number = {props.noTwo}</h3>
           <h3>The addition of two numbers is {result}</h3>
           </div>
    }
    else if(props.operation == "subtract"){
        result = props.noOne - props.noTwo;
       return <div className="miniClass">
           <h1>Mini Calculator</h1>
           <h3>Operation = {props.operation}</h3>
            <h3>First Number = {props.noOne}</h3>
            <h3>Second Number = {props.noTwo}</h3>
           <h3>The subtraction of two numbers is {result}</h3>
           </div>
    }
    else if(props.operation == "multiply"){
        result = props.noOne * props.noTwo;
       return <div className="miniClass">
           <h1>Mini Calculator</h1>
           <h3>Operation = {props.operation}</h3>
            <h3>First Number = {props.noOne}</h3>
            <h3>Second Number = {props.noTwo}</h3>
           <h3>The multiplication of two numbers is {result}</h3>
           </div>
    }
    else if(props.operation == "divide"){
        result = props.noOne / props.noTwo;
       return <div className="miniClass">
           <h1>Mini Calculator</h1>
           <h3>Operation = {props.operation}</h3>
            <h3>First Number = {props.noOne}</h3>
            <h3>Second Number = {props.noTwo}</h3>
           <h3>The division of two numbers is {result}</h3>
           </div>
    }
    else{
        return <div className="miniClass"><b>Please prop the operation correctly.</b></div>
    }
}
export default MiniCalculator;

