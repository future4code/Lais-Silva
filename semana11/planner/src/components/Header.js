import React, { useState } from 'react'

const Header = (props) => {

    return (
        <div>
            <h3>...planner semanal...</h3>
            <input 
            type="text" 
            placeholder="Create an task" 
            value={props.text}
            onChange={props.handleInputChange}
            />
            <select 
            value={props.day} 
            onChange={props.handleDayChange}
            >
                <option value="">Choose a day</option>
                <option value="monday">Segunda-Feira</option>
                <option value="tuesday">Terça-Feira</option>
                <option value="wednesday">Quarta-Feira</option>
                <option value="thursday">Quinta-Feira</option>
                <option value="friday">Sexta-Feira</option>
                <option value="saturday">Sábado</option>
                <option value="sunday">Domingo</option>
            </select>
            <button data-testid={"123"} onClick={props.createTask}>Adicionar</button>
        </div>
    )
}

export default Header