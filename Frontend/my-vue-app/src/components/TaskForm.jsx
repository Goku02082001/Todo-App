import  { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{marginLeft:'100px',marginTop:'10px'}}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit" style={{marginTop:'10px' ,marginLeft:'5px'}}>Add Task</button>
    </form>
  );
};

export default TaskForm;