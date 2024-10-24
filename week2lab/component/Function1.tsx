import React from "react"
import { useState } from "react"

interface function1props{
    number: Number;
}

const Function1 = (prop: function1props )=>{
    const [num, setNum]=useState(prop.number)
    const [count,setCount]=useState(100);
    return<>
        Num: {num}
    </>
}
export default Function1;
