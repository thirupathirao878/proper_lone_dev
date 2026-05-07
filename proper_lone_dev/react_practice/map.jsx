import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
function MyCars(){
    const cars=['ford','bmw','audi','honda','active'];
    return(<div>
    <h1>my cars:</h1>
    <ol>
        {cars.map((car)=><li>I am a {car}</li>)}
    </ol>
    </div>);
}
const root=createRoot(document.getElementById('root'));
root.render(<MyCars/>)