import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function Football(){
    const shoot = (a) => {
        alert(a);
    }
    return(
        <button onClick={()=> shoot("Goal")}>Take the shot</button> 
    );
}

const root = createRoot(document.getElementById('root'));
root.render(
  //<StrictMode>
    <Football />
  //</StrictMode>
);
