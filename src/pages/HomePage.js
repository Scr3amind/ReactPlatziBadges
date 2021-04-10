import React from 'react';
import platziConfLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';
import { useHistory } from 'react-router';
import './styles/HomePage.css';

export const HomePage = () => {

    const history = useHistory();

    const handleButton = () => {
        history.push('/badges');
    }

    return (
        <div className="homepage">
            <div className="homepage__info-container">
                <img src={platziConfLogo} alt="platziConf Logo" />
                <h1>Print your Badges</h1>
                <p>The easiest way to manage your conference</p>
                <button className="btn btn-primary" onClick={handleButton}>
                    Start
                </button>
            </div>
            <img className="homepage__img" src={astronauts} alt="astronautas"/>
        </div>

    )
}
