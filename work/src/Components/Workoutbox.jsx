import React, { useEffect, useState } from 'react';

const Workoutbox = () => {
    const [date, setDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer) // Clean up the timer on component unmount
    }, []);

    return (
        <div className='heading'>
            <h1>WorkOut Timer</h1>
            <p>FOR YOUR WORKOUT ON {date}</p>
        </div>
    );
}

export default Workoutbox;
