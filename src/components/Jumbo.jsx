import React from "react";

//props of Jumbo:
//msg

function Jumbo(props) {
  return (
    <div className="m-2">
      <div role="alert" class="fade alert alert-primary show">
        {props.msg}
      </div>
    </div>
  );
}

// function Jumbo(props){
//     return <p>Message: {props.msg}</p>
// }

export default Jumbo;
