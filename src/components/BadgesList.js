import React from 'react';
import { BadgeListItem } from './BadgeListItem';

export const BadgesList = ({data}) => {
    return (
        <ul className="list-unstyled">
            {
                data.map(badge => {
                    return (
                        <li key={badge.id}>
                            <BadgeListItem 
                                firstName={badge.firstName} 
                                LastName={badge.lastName} 
                                twitter={badge.twitter} 
                                Jobtitle={badge.jobTitle}
                                avatarUrl={badge.avatarUrl}
                            />
                        </li>
                    );
                } )
            }
        </ul>
    );
}
