import React from 'react';
import '../css/badgeListItem.css';

export const BadgeListItem = ({firstName, LastName, Jobtitle, twitter, avatarUrl}) => {


    return (
        <div className="BadgeListItem">

            <img src={avatarUrl} alt="Avatar" className="BadgeListItem__avatar"/>
            
            <div className="BadgeListItem__info">
                <h1 className="BadgeListItem__name">{firstName} {LastName}</h1>
                <a href={`https://twitter.com/${twitter}`} className="BadgeListItem__twitter">
                    <i className="fab fa-twitter"></i>
                    @{twitter}
                </a>
                <p className="BadgeListItem__job">{Jobtitle}</p>
            </div>

        </div>
    );
}
