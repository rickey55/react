import React, { useState } from 'react';
import Select from 'react-select'

const defaultSelectValue = "3"

const Test = () => {  
    const [selected, setSelected] = useState(defaultSelectValue)
    console.log('selected',selected)

    return (
        <div >
        <h2> test </h2>
        </div>
        );
};

export default Test;
