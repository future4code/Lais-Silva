import React from 'react'


const DayCard = (props) => {

    return (
        <div>
            <h5>{props.day}</h5>
            {props.tasks.filter(task => task.day === props.day).map(task => {
                return (
                    <p>{task.text}</p>
                )
            })}
        </div>
    )
}
export default DayCard

