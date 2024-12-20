import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Modal from '../Modal/Modal';

const Navbar = () => {
    const [time, setTime] = useState(600);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isTimerRunning && time > 0) {
            timer = setInterval(() => setTime((prev) => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, time]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <nav className="navbar">
            <div className="logo">Codingal</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <button onClick={() => setIsModalOpen(true)}>End Class</button>
                <div className="timer">{formatTime(time)}</div>
            </div>
            {isModalOpen && (
                <Modal
                    onCancel={() => setIsModalOpen(false)}
                    onEndClass={() => {
                        setIsTimerRunning(false);
                        setIsModalOpen(false);
                    }}
                />
            )}
        </nav>
    );
};

export default Navbar;
