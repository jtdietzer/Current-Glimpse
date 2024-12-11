// Displays verification badges
import React from 'react';

const Badge = ({ status }) => {
    const colors = {
        verified: 'green',
        pending: 'yellow',
        not_verified: 'red',
        edited: 'blue',
    };

    return (
        <span style={{ backgroundColor: colors[status], padding: '5px' }}>
            {status.toUpperCase()}
        </span>
    );
};

export default Badge;
