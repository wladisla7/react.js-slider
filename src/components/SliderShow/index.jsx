import React, { useEffect, useState } from "react";
import './slidershow.css'

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
        let idInterval = setInterval(props.action, deley * 1000)
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


    return (
        <div>
            <button onClick={SliderShowChange}>{buttonText}</button>
            <label className="delay">Stop for Change Deley: seconds </label>
            <input type="number" name="deley" onChange={handleChange} value={deley} />
             
        </div>
    )
}



