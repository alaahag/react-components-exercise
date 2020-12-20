import Spam from "./Spam";
import React, { Component } from 'react';


function testSpam(){
    let arrayspam = [];
    for (let i=0; i<500; i++) {
        arrayspam.push(<Spam />);
    }
    return arrayspam;
}
class Spamalot extends Component {
// your code here...

    render () {
        for (let i=0; i<500; i++) {
            return (testSpam())
        }
    }
}

export default Spamalot

