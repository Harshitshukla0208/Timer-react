import './Countdown.css'

function Countdown() {
    return (
        <>
            <h1>Countdown Timer App</h1>
            <div id="input">
                <input type="datetime-local" id="date-time" />
                <button id="submit-btn">Start</button>
            </div>
        </>
    )
}

export default Countdown;