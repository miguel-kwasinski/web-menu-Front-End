import { useEffect, useState } from "react"
import { useFoodData } from "../../Hooks/useFoodData";
import { FoodData } from './../../interface/FoodData';
import { useFoodDataMutate } from "../../Hooks/useFoodDataMutate";
import "./modal.css"

interface InputProps {
    lable: string,
    value: string | number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateValue(value: any): void
}

interface ModalProps {
    closeModal():void
}

const Input = ({lable, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{lable}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function Createmodal({closeModal}:ModalProps){
    const [title,setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess } = useFoodDataMutate();

    const submit = ( ) =>{
        const foodData:FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);

    }

    useEffect(() =>{
        if(!isSuccess) return
        closeModal();
    },[isSuccess])

    return(
        <div className ="modal-overlay">
            <div className="modal-body">
                <h2>Register a new item on the menu.</h2>
                <form className="input-container">
                    <Input lable="title" value={title} updateValue={setTitle}/>
                    <Input lable="price" value={price} updateValue={setPrice}/>
                    <Input lable="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">Post</button>
            </div>
        </div>
    )
}