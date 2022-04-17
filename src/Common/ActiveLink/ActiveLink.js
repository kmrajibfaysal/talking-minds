/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                color: match ? '#F7AB1E' : '',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}

export default ActiveLink;
