import React, { useEffect, useState } from "react";

export default function SliderShow(props) {
    const [interval, setIntervalID] = useState(null);
    const [deley, setDelay] = useState(1);

    function SliderShowChange() {

        if (interval === null) {
            startChange()
        } else {
            stopChange()
            setIntervalID(null)
        }
    }


    const startChange = () => {
        let idInterval = setInterval (props.action, deley * 1000)
        setIntervalID(idInterval);
    };

    const stopChange = () => {
        clearInterval(interval)
    }


    const handleChange = (event) => {
        setDelay(Number(event.target.value))

    }

    useEffect(() => {
        startChange()
        return () => {
            stopChange()
        };
    }, []);


    let buttonText = "Stop Slider"
    if (interval === null) {
        buttonText = "Start Slider"
    }

    console.log(buttonText)

    return (
        <div>
            <button onClick={SliderShowChange}>{buttonText}</button>
            <input type="number" name="deley" onChange={handleChange} value={deley} placeholder="Deley for SliderShow" />
        </div>
    )
}



// (Текст в переменой или старт или стоп, взавсимисоти от переменной interval)

