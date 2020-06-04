import React from 'react'
import './App.css';
import Axios from 'axios';

class App extends React.Component {

  state = {
    activityType: undefined,
    activity: "escolha uma opção acima e a atividade sera mostrada aqui",
    activityNumber: "escolha uma opção acima e a atividade sera mostrada aqui"
  }

  getType = event => {
    const newType = event.target.value;
    Axios.get (`http://www.boredapi.com/api/activity?type=${newType}`)
    .then(response => {
      this.setState({activity: response.data.activity})
    })
    
  }
  
  getNumber = event => {
    const newNumber = event.target.value
    Axios.get(`http://www.boredapi.com/api/activity?participants=${newNumber}`)
    .then(response => {
      this.setState({activityNumber: response.data.activity})
    }
    )
  } 

  render () {
    return (
      <container>
        <div className="pageOne">
          <h3>Ideias de atividades com base no tipo</h3>
          <p>Escolha um tipo de atividade:</p>
          <select onChange={this.getType}>
            <option value="" />
            <option value="education">Educação</option>
            <option value="recreational">Recreação</option>
            <option value="social">Social</option>
            <option value="diy">Faça você mesmo</option>
            <option value="charity">Caridade</option>
            <option value="cooking">Cozinha</option>
            <option value="relaxation">Relaxamento</option>
            <option value="music">Musica</option>
            <option value="busywork">Manter-se ocupado</option>
          </select>
          <p><strong>{this.state.activity}</strong></p>    
        </div>

    <div className="pageTwo">

        <h3>Ideias de atividades com base no numero de pessoas envolvidas</h3>
        <p>Defina o úumero de pessoas:</p>
        <input type="number" onChange={this.getNumber}></input>
      
        <p><strong>{this.state.activityNumber}</strong></p>    
      
    </div>


     </container>
    )
  }
}

export default App;

