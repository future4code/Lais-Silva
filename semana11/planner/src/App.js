import React, { useState, useEffect } from 'react';
import axios from 'axios'

import DayCard from './components/DayCard'
import Header from './components/Header';


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-lais"

const App = () => {

  const [tasks, setTasks] = useState([])

  const getTasks = () => {
    axios
      .get(`${baseUrl}`)
      .then(response => {
        setTasks(response.data)
      })
  }


  useEffect(() => {
    getTasks()
  }, [])

  const [text, setText] = useState("")
  const [day, setDay] = useState("")

  const handleInputChange = (event) => {
    setText(event.target.value)
  }
  const handleDayChange = (event) => {
    setDay(event.target.value)
  }

  const createTask = () => {
    const body = {
      text: text,
      day: day
    }
    axios
      .post(`${baseUrl}`, body)
      .then(() => {
        getTasks()
        setText("")
      })
  }
  
  return (

    <div>
      <Header
        day={day}
        text={text}
        handleInputChange={handleInputChange}
        handleDayChange={handleDayChange}
        createTask={createTask} 
      />
      <DayCard
      day={"sunday"}
      tasks={tasks}
      />
      <DayCard
      day={"monday"}
      tasks={tasks}
      />
      <DayCard
      day={"tuesday"}
      tasks={tasks}
      />
      <DayCard
      day={"wednesday"}
      tasks={tasks}
      />
      <DayCard
      day={"thursday"}
      tasks={tasks}
      />
      <DayCard
      day={"friday"}
      tasks={tasks}
      />
      <DayCard
      day={"saturday"}
      tasks={tasks}
      />
    </div>
  );
}

export default App;
