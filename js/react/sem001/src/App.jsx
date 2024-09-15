import s from './app.module.css'
import { CurrentTime } from './components/CurrentTime/CurrentTime'
import { EventCard } from './components/EventCard/EventCard'
import { Greeting } from './components/Greeting/Greeting'

function App() {
  return (
    <>
    {/* <div className={s.root}> */}
      <Greeting />
      <CurrentTime />
      <div className={s.cards}>
        <EventCard name='Dog competition' date='14 September, 2024' place='Moscow' />
        <EventCard name='Cat competition' date='15 September, 2024' place='Kazan' />
        <EventCard name='Hamster competition' date='16 September, 2024' place='Omsk' />
      </div>

    {/* </div> */}
    </>

  )
}

export default App
