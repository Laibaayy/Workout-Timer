import { useState, useEffect } from "react";
import styles from "./Form.module.css"
import sea from './sea.mp3';

const Form = ({ workouts, setnumber, number, allowSound }) => {
    const [setsdone, setsetsdone] = useState(1);
    const [speed, setspeed] = useState(90);
    const [breaktime, setbreaktime] = useState(5);
    const [duration, setduration] = useState((number * setsdone * speed) / 60 + (setsdone - 1) * breaktime);

    useEffect(() => {
        const AlarmSound = () => {
            if (!allowSound) return;
            const alarm = new Audio(sea);
            alarm.play()
        }
        AlarmSound()
    }, [duration, allowSound])



    const minutes = Math.floor(duration);
    const seconds = Math.round((duration - minutes) * 60);

    const inchandler = () => {
        setduration(Math.round(duration + 1))
    }
    const dechandler = () => {
        setduration(Math.round(duration - 1))
    }

    useEffect(() => {
        setduration((number * setsdone * speed) / 60 + (setsdone - 1) * breaktime)
        // alarm.play()
    }, [setsdone, speed, breaktime, number])

    return (
        <div className={styles.form}>
            <form >
                <label>Type Of Workout</label>
                <select value={number} onChange={(e) => setnumber(e.target.value)}>
                    {workouts.map((work, index) => (
                        <option key={index} value={work.numExercises}>
                            {work.name} ({work.numExercises} exercises)
                        </option>
                    ))}
                </select>
                <div>
                    <label>How Many Sets</label>
                    <input
                        className={styles.sets}
                        type="range"
                        max={10}
                        value={setsdone}
                        onChange={(e) => setsetsdone(e.target.value)}
                    />
                    <span>{setsdone}</span>
                </div>
                <div>
                    <label>How Fast are You</label>
                    <input
                        className={styles.fast}
                        type="range"
                        min='30'
                        max='180'
                        value={speed}
                        step='30'
                        onChange={(e) => setspeed(e.target.value)}
                    />
                    <span>{speed} sec/exercise</span>
                </div>
                <div>
                    <label>Break Length</label>
                    <input
                        className={styles.break}
                        type="range"
                        max={10}
                        value={breaktime}
                        onChange={(e) => setbreaktime(e.target.value)}
                    />
                    <span>{breaktime} min/break</span>
                </div>
                <div className={styles.btn}>
                    <button type="button" onClick={inchandler}>+</button>
                    <h1>
                        {minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes} :{" "}
                        {seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds}
                    </h1>
                    <button type="button" onClick={dechandler}>-</button>
                </div>
            </form>
        </div>
    );

};
export default Form
