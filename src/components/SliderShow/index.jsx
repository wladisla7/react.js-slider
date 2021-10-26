import React, { useEffect, useState } from "react";
import './slidershow.css'

export default function SliderShow(props) {
    const [interval, setIntervalID] = useState(null);
    const [deley, setDelay] = useState(5);

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
        stopChange();
        startChange();
    }


 

    useEffect(() => {
      
        return () => {
            stopChange()
        };
    }, []);


    let buttonText = "Stop SliderShow"
    if (interval === null) {
        buttonText = "Start SliderShow"
    }


    return (
        <div>
            <button onClick={SliderShowChange}>{buttonText}</button>
            <label className="delay">Stop for Change Deley: seconds </label>
            <input type="number" name="deley" onChange={handleChange} value={deley} />

        </div>
    )
}



