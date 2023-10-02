import React from "react";
import Alert from 'react-bootstrap/Alert';

//props of Jumbo:
//msg

function Jumbo(props) {
  return (
    <Alert className="m-4" key="dark" variant="dark">
      Alert{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  );
}

// function Jumbo(props){
//     return <p>Message: {props.msg}</p>
// }

export default Jumbo;
