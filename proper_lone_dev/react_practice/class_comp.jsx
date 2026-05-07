import React from "react";
import { createRoot } from "react-dom/client";
class Car extends React.Component{
    render(){
        return(<h2>i am a  car</h2>);
    }
}
const root=createRoot(document.getElementById('root'));
root.render(<Car/>)