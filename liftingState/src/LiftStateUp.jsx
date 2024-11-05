import { useState } from "react";


// parent component
export const LiftStateUp = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    );
};


// child component
const InputComponent = ({ inputValue, setInputValue }) => {
    // to make sure this sate can be shared with other child component create the state in the ancester/parent component and pass it as a prop to be used with child component

    // child cannot pass prop for other child component, it can only pass prop to parent component

    // const [inputValue, setInputValue] = useState("");
    return (
        <>
            <input
                type="text"
                placeholder="enter your name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{padding: "5px", width: "250px"}}
            />
        </>
    )
}




// child component
const DisplayComponent = ({ inputValue }) => {
    return(
        <h1>The current input value is {inputValue}</h1>
    )
}