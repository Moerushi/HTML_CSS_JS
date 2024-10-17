import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const todoSlice = createSlice({ // создает авоматически объект
    name: "todo", // имя редъюсера
    initialState, // описывается начальное состояние
    reducers: { // функции для выполнения
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                isCompleted: false
            };
            state.items.push(newTodo);
        },
        deleteTodo: (state, action) => { // всегда принимают state и action
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer; // создается автоматически через createSlice