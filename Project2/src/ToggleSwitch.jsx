import React, { useState } from 'react';
import "./ToggleSwitch.css";

const ToggleSwitch = () => {

    const [on, setOn] = useState(false);

    const handleToggleSwitch = () => {
        setOn(!on);
    }

    return (
        <div className='toggle-switch' style={{backgroundColor: on ? "#4caf50" : "#f44336"}} onClick={handleToggleSwitch}>
            <div className={`switch ${on ? "on" : "off"}`}>
                <span className='switch-state'>
                    {on ? "on" : "off"}
                </span>
            </div>
        </div>
    )
}

export default ToggleSwitch