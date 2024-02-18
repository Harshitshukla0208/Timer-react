import { useState } from 'react';
import './Countdown.css'

function Countdown() {
    const [target, setTarget] = useState(null)
    return (
        <>
            <h1>Timer</h1>
            <div class="container">
                <div class="input-container">
                    <input type="datetime-local" id="date-time" />
                </div>
                <button id="submit-btn">Start</button>
            </div>

            <div id="display">
                <ul>
                    <li><span id="days">10</span>days</li>
                    <li><span id="hours">2</span>hours</li>
                    <li><span id="minutes">55</span>minutes</li>
                    <li><span id="seconds">5</span>seconds</li>
                </ul>
            </div>

        </>
    )
}

export default Countdown;