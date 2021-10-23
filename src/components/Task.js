
const Task = ({ task ,onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3 key={task.id}>{task.text} 
            <button className='closeBtn' onClick={() => onDelete(task.id)}>Close</button>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
