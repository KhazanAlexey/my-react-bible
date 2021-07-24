import {useState} from "react";

export function App6 () {
    const[count1,setcount1]=useState(1)
    let count2=1
    const handler1=()=>{
        setcount1(prev=>prev+1)
    }
    const handler3=()=>{
        setcount1(count1+1)
    }
    const handler2=()=>{
        count2=count2+1
    }

    return (
        <>
            <p>{count1}
                <button onClick={handler1}>set1</button>
            </p>
            <hr></hr>

            <p>{count1}
                <button onClick={handler3}>set1</button>
            </p>
            {count2}
       <button onClick={handler2}>set2handler</button>

        </>

    )
}



