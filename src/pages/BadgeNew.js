import React from 'react';
import { Badge } from '../components/Badge';
import { BadgeForm } from '../components/BadgeForm';
import { Navbar } from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

export const BadgeNew = () => {
    return (
        <div>
            <Navbar/>
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="header"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName="Isaac" 
                            lastName="Cruz" 
                            jobTitle="FullStack Developer" 
                            twitter="scr3amind" 
                        />
                    </div>
                    <div className="col">
                        <BadgeForm/>
                    </div>
                </div>


            </div>
        </div>
    )
}
