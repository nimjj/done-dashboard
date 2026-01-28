import { useState } from 'react'

function App() {
  // 1. Tracks the input box
  const [taskName, setTaskName] = useState("");
  
  // 2. Tracks Selected Category
  const [category, setCategory] = useState("Deep Work");
  
  // 3. Track completed tasks
  const [tasks, setTasks] = useState([]);

  //  LOGIC (The Functions)
  
  // Calculate the total score
  const totalScore = tasks.reduce((sum, task) => sum + task.points, 0);

  function handleAddTask() {
    // Check if input is empty
    if (taskName === "") return;

    // Assign points based on category
    let points = 0;
    if (category === "Deep Work") {
      points = 10;
    } else if (category === "Admin") {
      points = 2;
    } else if (category === "Meeting") {
      points = 1;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // Give it ID based on time
      name: taskName,
      category: category,
      points: points
    };

    // Update the list of tasks
    setTasks([newTask, ...tasks]);

    // Clear the input box so it's ready for the next one
    setTaskName("");
  }

  // UI 
  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
      
      <h1> The Done Dashboard</h1>

      {/* INPUT SECTION */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        
        {/* The Text Input */}
        <input 
          type="text" 
          placeholder="What did you finish?" 
          value={taskName} // Connects input to State
          onChange={(e) => setTaskName(e.target.value)} // Updates State when typing
          style={{ padding: "10px", flexGrow: 1 }}
        />
        
        {/* The Dropdown */}
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option value="Deep Work">Deep Work (10 pts)</option>
          <option value="Admin">Admin (2 pts)</option>
          <option value="Meeting">Meeting (1 pt)</option>
        </select>

        {/* The Button */}
        <button 
          onClick={handleAddTask} 
          style={{ padding: "10px 20px", cursor: "pointer", background: "black", color: "white", border: "none" }}
        >
          Log
        </button>
      </div>

      {/* SCOREBOARD */}
      <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px", textAlign: "center", borderRadius: "10px" }}>
        <h2 style={{ margin: 0 }}>Total Score: {totalScore}</h2>
      </div>
1
      {/* LIST SECTION */}
      <div>
        <h3>History</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0", display: "flex", justifyContent: "space-between" }}>
              <span>
                <strong>{task.name}</strong> 
                <span style={{ marginLeft: "10px", fontSize: "0.8em", color: "#666" }}>({task.category})</span>
              </span>
              <span>+{task.points} pts</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App