import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'

import DayCard from './components/DayCard'
import Header from './components/Header';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-lais"

const AllPage = styled.div`
    width: 100%;
    height: 100%;
  `

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


  return (

    <AllPage>
      <Header
        getTasks={getTasks}
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
    </AllPage>
  );
}

export default App;
