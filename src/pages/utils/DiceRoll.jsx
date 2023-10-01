import React from "react";

function Dice(props){
    let num = 0
    function genRandomNum(){
        num = Math.random()*parseInt(props.sides)+1;
        num = Math.floor(num)
        return num
    }
    
    return <div>
        rolling die of {props.sides} , result {genRandomNum()}
    </div>
}

export default Dice