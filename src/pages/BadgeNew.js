import React from 'react';
import { Badge } from '../components/Badge';
import { BadgeForm } from '../components/BadgeForm';
import { Navbar } from '../components/Navbar';
import { useForm } from '../hooks/useForm';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

export const BadgeNew = () => {

    const initialForm = {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        twitter: ''
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);

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
                            firstName={formValues.firstName} 
                            lastName={formValues.lastName} 
                            jobTitle={formValues.jobTitle} 
                            twitter={formValues.twitter} 
                        />
                    </div>
                    <div className="col">
                        <BadgeForm formValues={formValues} handleInputChange={handleInputChange} reset={reset}/>
                    </div>
                </div>


            </div>
        </div>
    )
}
