import React from "react";

export default function IconSwitch ({icon, onSwitch}) {

    return (
        <div className="icon">
            <button onClick={onSwitch}>
                <span className="material-icons">{icon}</span>
            </button>
        </div>
    )
}