import { createRoot } from "react-dom/client";
import React from "react";

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={color : "red",
                    brand: "bmw",
                    year: 2026
        }
    }
    Change_color=()=>{
        this.setState({color:"blue"});
    }
    render(){
        return(
            <div>
                <p>i am a {this.state.color} {this.state.brand} car
                Year: {this.state.year}</p>
                <button onClick={this.Change_color}>Change Color</button>
            </div>
        );
    }
}
const root = createRoot(document.getElementById('root'));
root.render(<Car/>)