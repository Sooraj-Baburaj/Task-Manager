import Header from './components/Header';
import Tasks from './components/Tasks';
import  { useState } from 'react' ;
import AddTask from './components/AddTask';

function App() {
  const [tasks ,setTasks] = useState([
    {text: "Shopping" ,
     id:1,
     day:"July 10th at 4pm",
     reminder:false
    }
    ]);
    const [showAddTask, setShowAddTask] = useState(false)
    //Adding Tasks
    const addTask = (task) => {
      const id = Math.floor(Math.random()*10000)+1;
      const newTask = {id,...task}
      setTasks([...tasks, newTask])
    }
    //deleteing Tasks
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id!== id))
    }
    //toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
    }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
