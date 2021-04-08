import React from 'react';
import confLogo from '../images/badge-header.svg';
import '../css/badge.css';

export const Badge = ({firstName, lastName, jobTitle, twitter, avatarUrl}) => {

    const avatarImg = avatarUrl ? avatarUrl : 
                    `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=1b1b25&color=fff`;

    return (
        <div className="custom-badge">
            <div className="custom-badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="custom-badge__section-name">
                <img src={avatarImg} alt="Avatar" className="custom-badge__avatar"/>
                <h1>{firstName} <br/> {lastName}</h1>
            </div>

            <div className="custom-badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>

            <div className="custom-badge__footer">#platziconf</div>

        </div>
    );
}
