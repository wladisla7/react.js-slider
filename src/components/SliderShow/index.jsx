import React, { useEffect, useState } from "react";

export default function SliderShow(props) {
    const [interval, setIntervalID] = useState(null);
    // const [deley, setDeley] = useState(null);

    function SliderShowChange() {

        if (interval === null) {
            startChange()
        } else {
            stopChange()
            setIntervalID(null)
        }
    }

    const startChange = () => {
        let idInterval = setInterval(props.action, 3000);
        setIntervalID(idInterval);
    };

    const stopChange = () => {
        clearInterval(interval)
    }


    // const deleyChange = (value) => {
    //     let idDeley = setIntervalID(value)
    //     setDeley(idDeley)
    // }

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
        </div>
    )
}



// (Текст в переменой или старт или стоп, взавсимисоти от переменной interval)

