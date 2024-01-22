import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";



function App() {
  const [showAddTask, setShowAddTask] = useState (false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3, 
      text: "Food Shopping", 
      day: "Feb 11th at 1:00pm", 
      reminder: true,
    },
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000 ) + 1; // random number
    const newTask = {id,...task}; // copying id to the task in the begining 
    setTasks([...tasks, newTask]); // copying to the tasks array 
  }

  // delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id != id))
  };

  // toggle remainder 

  const toggleReminder = (id) =>{
    setTasks( 
      tasks.map( (task) => {  
        return task.id  === id ? {...task, reminder: !task.reminder}:task
      }
    ));
  }


  const title = " Task List";
  return <div className="container">
    <Header title = {title}  onShowAdd ={()=>setShowAddTask(!showAddTask)} buttonValue = {showAddTask}/>
    {showAddTask && <AddTask onAdd = {addTask} />}
      { 
        tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>: ' No Tasks to Show '
      } 
    {
    /* 
    ** this is how to pass argument in a function object in JSX <Tasks task = {tasks} > 
    ** 'Tasks' is the name of the function object that is imported
    ** task is the argument 
    ** { tasks } is the passing value ;
    */}
  </div>;
}

export default App;
