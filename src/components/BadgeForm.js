import React from 'react'
import { useForm } from '../hooks/useForm';

export const BadgeForm = () => {
    
    const initialForm = {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        twitter: ''
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const handleOnClick = () => {
        console.log('Button Pressed');
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        console.log(formValues);
        reset();
    }

    return (
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        className="form-control" 
                        type="name" name="firstName" 
                        onChange={handleInputChange}
                        value={formValues.firstName}
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                        className="form-control" 
                        type="text" name="lastName" 
                        onChange={handleInputChange}
                        value={formValues.lastName}
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input 
                        className="form-control" 
                        type="text" name="jobTitle" 
                        onChange={handleInputChange}
                        value={formValues.jobTitle}
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        className="form-control" 
                        type="email" name="email" 
                        onChange={handleInputChange}
                        value={formValues.email}
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input 
                        className="form-control" 
                        type="text" name="twitter" 
                        onChange={handleInputChange}
                        value={formValues.twitter}
                    />
                </div>

                <button className="btn btn-primary" onClick={handleOnClick}>
                    Save
                </button>

            </form>
            
        </div>
    )
}
