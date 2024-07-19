import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import TaskForm from './TaskForm';

const socket = io('http://localhost:3000', {
  auth: {
    token: localStorage.getItem('token')
  }
});

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on('init', (initialTasks) => {
      setTasks(initialTasks);
    });

    socket.on('updateTasks', (updatedTasks) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off('init');
      socket.off('updateTasks');
    };
  }, []);

  const addTask = (taskContent) => {
    const task = { id: Date.now(), content: taskContent, status: 'pending' };
    socket.emit('addTask', task);
  };

  const updateTask = (taskId, status) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    updatedTask.status = status;
    socket.emit('updateTask', updatedTask);
  };

  const deleteTask = (taskId) => {
    socket.emit('deleteTask', taskId);
  };

  return (
    <div style={{height:'auto',width:'500px' ,border:'1px solid black', marginLeft:'500px'}}>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.content} - {task.status}
            <button onClick={() => updateTask(task.id, 'in-progress')} style={{marginLeft:'5px'}}>In Progress</button>
            <button onClick={() => updateTask(task.id, 'completed')} style={{marginLeft:'5px'}}>Completed</button>
            <button onClick={() => deleteTask(task.id)} style={{marginLeft:'5px'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;