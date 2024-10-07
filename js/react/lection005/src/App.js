import './App.css';
import { createContext, useContext, useState } from 'react'
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {configureStore}from '@reduxjs/toolkit'

// пример 1
const MessageContext = createContext();

function GrandParent() {
  return <MessageContext.Provider value='Hello from the top context!'>
    <Parent />
  </MessageContext.Provider>
}

function Parent() {
  return <Child />
}

function Child() {
  return <GrandChild />
}

function GrandChild() {
  return <GrandGrandChild />
}

function GrandGrandChild() {
  const message = useContext(MessageContext);
  return <span>{message}</span>
}

// пример 2
const ThemeContext = createContext();

const ThemeButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Themed button
    </button>
  );
}

// пример 3

const NotesContext = createContext();

// создаем пользовательские хуки для удобства использования
const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);

// создаем список заметок (компонент)
const NotesList = () => {
  const { notes } = useNotes();
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

// компонент для добавления заметок
const NoteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { addNote } = useNotes();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Add</button>
    </div>
  );
}

// компонент для переключения темы
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>Change theme on {theme === 'light' ? 'dark' : 'light'}</button>
  );
};

// пример 4 HOC

const withStyles = (WrappedComponent, styles) => {
  return (props) => {
    const newProps = { ...props, styles };
    return <WrappedComponent {...newProps} />
  };
};

const Button = ({ styles }) => {
  return (
    <button style={styles}>Click me</button>
  );
};

const Text = ({ styles }) => {
  return (
    <p style={styles}>Any text</p>
  );
};

const StyledButton = withStyles(Button, { background: 'blue', color: 'white' });
const StyledButton2 = withStyles(Button, { background: 'green', color: 'white' });
const StyledText = withStyles(Text, { background: 'yellow', color: 'red' });

// пример 5
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(prev => prev + 1);
    };

    const newProps = {
      count,
      incrementCount,
      ...props
    };

    return <WrappedComponent {...newProps} />;
  };
};

const ClickCounter = ({ count, incrementCount, message }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={incrementCount}>+1</button>
      <p>Clicked {count} time(s)</p>
    </div>
  )
}

const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

// redux
// npm install react-redux
// все действия в отдельных компонентах


const Counter = () => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>

    </div>
  )
}

// npm install @reduxjs/toolkit



// reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// создание хранилища (store)
const store = configureStore({
  reducer: reducer
});

function App() {

  // пример 1
  // return (
  //   <div className="App">
  //     <h1>React.Context</h1>
  //     <GrandParent />
  //   </div>
  // );

  // пример 2
  // const [theme, setTheme] = useState({
  //   background: 'lightgray',
  //   foreground: 'black'
  // });

  // return (
  //   <ThemeContext.Provider value={theme}>
  //     <div>
  //       <h1>React.Context</h1>
  //       <ThemeButton />
  //       <button onClick={() => setTheme({
  //         background: 'black',
  //         foreground: 'white'
  //       })}>Change theme</button>
  //     </div>
  //   </ThemeContext.Provider>
  // );

  // пример 3
  // const [theme, setTheme] = useState('light');
  // const [notes, setNotes] = useState(['Element 1', 'Element 2']);

  // const toggleTheme = () => {
  //   setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  // };

  // const addNote = (note) => {
  //   setNotes((prevNotes) => [...prevNotes, note]);
  // }

  // return (
  //   <ThemeContext.Provider value={{ theme, toggleTheme }}>
  //     <NotesContext.Provider value={{ notes, addNote }}>
  //       <div className='content' style={{ color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black' }}>
  //         <h1>List</h1>
  //         <ThemeToggle />
  //         <NotesList />
  //         <NoteInput />
  //       </div>
  //     </NotesContext.Provider>
  //   </ThemeContext.Provider>
  // );

  // пример 4 HOC
  // return (
  //   <div>
  //     <h1>HOC</h1>
  //     <StyledButton />
  //     <StyledButton2 />
  //     <StyledText />
  //   </div>
  // );

  // пример 5
  // return (
  //   <div>
  //     <h1>HOC with other props</h1>
  //     <ClickCounterWithCounterAndProps message='First: ' />
  //     <ClickCounterWithCounterAndProps message='Second: ' />
  //   </div>
  // );

  //redux
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App;
