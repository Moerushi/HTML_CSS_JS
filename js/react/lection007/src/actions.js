export const fetchUserData = () => async dispatch => {
    dispatch({ type: 'FETCH_USER_START' });

    try {
        const response = await fetch('https://appiactions.ru');
        const userData = await response.json();

        dispatch({ Type: 'FETCH_USER_SUCCESS', payload: userData });
    } catch (error) {
        dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message })
    }
}