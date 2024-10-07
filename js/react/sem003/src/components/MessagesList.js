import { Message } from './Message'
import PropTypes from 'prop-types';

export const MessagesList = ({ messages }) => {

    return (
        <div>
            <h2>Messages list</h2>
            <ul>
                {messages.map((message) => <Message key={message.id} message={message.text} />)}
            </ul>
        </div>
    )
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({ // указывает на типы объектов
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }),
    ).isRequired,
};