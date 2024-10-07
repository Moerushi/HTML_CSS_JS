import React from "react";
import PropTypes from 'prop-types';

const Student = ({ name, age, isStudent }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p> Age: {age}</p>
            <p>{isStudent ? 'Student' : 'Not a student'}</p>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool
}

export default Student;