import {useState} from 'react'
import "./Button.scss"

const Button = () => {
    const [counter, setCounter] = useState(0);
    const handleDecrement = () => {
        counter === 0 ? setCounter(0) : setCounter(counter -1);

    };

    const handleIncrement = () => {
        setCounter(counter + 1);

    }
    return (
        <div className="Button-tile">
            <h2 className='Button-tile__heading'>Tickets Assigned</h2>
            <div className="Button-tile__display">{counter}</div>
            <button className='Button-tile__icon__plusOne' onClick={handleIncrement}
            >+1</button>

            <button className='Button-tile__icon__minusOne' onClick={handleDecrement}
            >-1</button>
        </div>
    )
}

export default Button;