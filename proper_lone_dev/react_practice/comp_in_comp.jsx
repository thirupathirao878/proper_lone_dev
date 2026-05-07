import { createRoot } from "react-dom/client";

function Car(props){
    return(<h2>i am a {props.color} car</h2>);
}

function Garage(){
    return(
        <div>
            <h2>i am a garage</h2>
            <Car color="red" />
            <Car color="blue"/>
        </div>
    );
}
const root=createRoot(document.getElementById('root'));
root.render(<Garage/>)