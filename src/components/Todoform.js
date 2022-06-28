import React, {useContext, useEffect, useState} from "react";
import {TodoTitle,NotificationTitle} from '../App';
import useNotifiCation from './useNotifiCation';

export default function Todoform(){
    const title = useContext(TodoTitle);
    const Notifi = useContext(NotificationTitle);

    const [Workn, setWorkn] = useState('');

    const[Tododata, setTododata] = useState([]);
   
    const changeval = (event)=>{
        setWorkn(event.target.value);
    }
   

    const formSubmit = (event)=>{
        event.preventDefault();
        console.log(event.target['workname'].value)

        setTododata((oldTododata)=>{
            return [...oldTododata, event.target['workname'].value];
           
        })
        
        setWorkn('');   
      //  useNotifiCation(Notifi,Tododata);         
    }

    const deletetodo = (key)=>{
        setTododata((oldTododata)=>{
            return oldTododata.filter((arrElem,index)=>{
                return index !== key;
            }
    )})     
   // useNotifiCation(Notifi,Tododata);  
    }
    
    useNotifiCation(Notifi,Tododata);
    

    return(
        <>
        <section>
            <header >
                <h1>{title}</h1>
                <form onSubmit={formSubmit}>
                <input 
                onChange={changeval}
                className="inputname"
                type="text"
                name="workname"
                value={Workn}
                placeholder="Enter the Work"
                />
                <button id="input-form-btn"><i className="fa-solid fa-plus"></i></button>
                </form>
            </header>

            <div className="container">
                {Tododata.map((todo,index)=>(
                    
                    <>
                <div className="task">
                <div className="content">
                   {todo}
                </div>
                <div className="btn">
                <button id="del" onClick={()=>deletetodo(index)}><i className="fa-solid fa-trash-can"></i></button>
                </div>
                </div>
                    </>
                ))}
                

            </div>

        </section>
        </>
    )
}