import React from "react";
import PropTypes from 'prop-types';

export function Greeting ({name}) {
    return (
        <div>
            <h2>Hello, {name}</h2>
        </div>
    );
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
}
