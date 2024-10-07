import PropTypes from 'prop-types';

export const Message = ({ message }) => {
  return (
    <>
      <li>{message}</li>
    </>
  );
}

Message.propTypes = {
    message: PropTypes.string.isRequired
};