// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

import React, { useState } from 'react';
import style from './CommentsList.module.css'

export function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: `Это первый комментарий` },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это четвертый комментарий" },
        { id: 5, text: "Это пятый комментарий" },
        { id: 6, text: "Это шестой комментарий" }
    ]);

    const deleteComment = (id) => setComments(previousArray => [...previousArray].filter((item) => item.id != id));

    return (
        <div>
            <h1>Мои комментарии</h1>
            <ul>
                {comments.map((comment) => (
                    <li className={style.card} key={comment.id}>
                        {comment.text}
                        <button onClick={() => deleteComment(comment.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>)



}

export default CommentsList;