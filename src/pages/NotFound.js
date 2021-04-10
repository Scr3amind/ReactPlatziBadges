import React from 'react';
import { useHistory } from 'react-router';
import lost from '../images/Lost.svg'
import './styles/HomePage.css';

export const NotFound = () => {

    const history = useHistory();

    const handleButton = () => {
        history.push('/');
    }

    return (
        <div className="homepage">
            <div className="homepage__info-container">
                <h1>404 Not Found</h1>
                <p>Sorry, maybe you're lost</p>
                <button className="btn btn-primary" onClick={handleButton}>
                    Go to main page
                </button>
            </div>
            <img className="homepage__img" src={lost} alt="Perdido"/>
        </div>
    );
}
