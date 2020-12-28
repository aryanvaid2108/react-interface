import { useState } from 'react'

const useSignupForm = (callback) => {
    const [inputs, setInputs] = useState({petName:"",ownerName:"",aptDate:"",aptTime:"",aptNotes:""});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs.petName ===""||inputs.ownerName ===""||inputs.aptDate ===""||inputs.aptTime ===""||inputs.aptNotes ===""){
            alert("All the input fields are required!");
            return;
        }      
        else{
            callback();
        } 
    }
    const handleInputChange = (e) => {
        e.persist()
        setInputs(inputs=>({...inputs,[e.target.name]:[e.target.value]}));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useSignupForm;