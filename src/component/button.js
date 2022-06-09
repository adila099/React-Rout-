import React, {useState} from "react";
const MyComponent = () => {
    const [value, setValue] = useState(1);

function increment (){
    return setValue(value + 1);
}
    
    return ( 
        <div>
            <p>{value}</p>
            <button onClick={increment }>Increment Value</button>
        </div>
    );
};
export default MyComponent