// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const TodoList = () => {

  const [newTask, setNewTask] = useState('');
  const [comments, setComments] = useState([]);
  const [block, setBlock] = useState(true);

  const changeValue = (e) => {
    setNewTask(e.target.value);
  }

  const addToList = () => {
    setComments(prevArray => [...prevArray, { id: Date.now(), text: newTask }]);
    setNewTask(() => '');
  };

  const deleteItem = (id) => {
    setComments(prevArray => [...prevArray].filter((item) => item.id != id));
  };

  useEffect(() => {
    if (newTask.length === 0) {
      setBlock(true);
    } else {
      setBlock(false);
    }
  }, [newTask])

  return (
    <div style={{ margin: "20px", display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2 style={{ lineHeight: '30px' }}>Todo list</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
        <TextField onChange={changeValue} id="outlined-basic" label="Input your task" variant="outlined" value={newTask} />
        <Button onClick={addToList} style={{ padding: '16px 16px' }} variant="contained" disabled={block}>ADD</Button>

      </div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>

        {comments.map(comment => (
          <li key={comment.id} style={{ listStyle: 'none' }}>
            <Card sx={{ width: 275 }}>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {comment.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => deleteItem(comment.id)} variant="contained" size="small">DELETE</Button>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
