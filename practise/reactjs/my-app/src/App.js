import "./App.css";
import { useReducer, useRef, useState } from "react";
import { Task } from "./Task";
// import { Users } from "./Users";
function App() {
  // let name = "Tran The Huy";
  // let name1 = <h1>Tran The Huy</h1>;
  // const age = 15;
  // change to true or false to test the Example
  // const isGreen = false;

  // const names = ["Huy", "Duyen", "Giang", "Hung", "Phuong"];
  // const users = [
  //   { name: "Huy", age: 20 },
  //   { name: "Duyen", age: 21 },
  //   { name: "Khoa", age: 21 },
  // ];

  // useState
  // const [age, setAge] = useState(0);
  // const increaseAge = () => {
  //   setAge(age + 1);
  // };

  // const [inputValue, setInputValue] = useState("");
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const [showText, setShowText] = useState(true);
  // const handleHideAndShow = () => {
  //   // if (showText) {
  //   //   setShowText(false);
  //   // } else {
  //   //   setShowText(true);
  //   // }
  //   // Viết gọn lại
  //   setShowText(!showText);
  // };

  // const [textColor, setTextColor] = useState("black");

  // const [count, setCount] = useState(0);

  // ! Todo project
  // const [todoList, setTodoList] = useState([]);
  // const [newTask, setNewTask] = useState("");

  // const handleChange = (event) => {
  //   setNewTask(event.target.value);
  // };

  // const addTask = () => {
  //   const task = {
  //     id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
  //     taskName: newTask,
  //     completed: false,
  //   };
  //   const newTodoList = [...todoList, task];
  //   setTodoList(newTodoList);
  // };

  // const deleteTask = (id) => {
  //   const newTodoList = todoList.filter((task) => task.id !== id);

  //   // cách dài hơn
  //   // if (task === taskName) {
  //   //   return false;
  //   // }
  //   // return true;
  //   setTodoList(newTodoList);
  // };

  // const completeTask = (id) => {
  //   setTodoList(
  //     todoList.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, completed: true };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };

  // ! Todo project with useReducer
  // * useReducer
  // 1. Init state
  const initState = {
    job: "",
    jobs: [],
  };
  // 2. Actions
  const SET_JOB = "set_job";
  const ADD_JOB = "add_job";
  const DELETE_JOB = "delete_job";

  const setJob = (payload) => {
    return {
      type: SET_JOB,
      payload,
    };
  };
  const addJob = (payload) => {
    return {
      type: ADD_JOB,
      payload,
    };
  };
  const deleteJob = (payload) => {
    return {
      type: DELETE_JOB,
      payload,
    };
  };
  // console.log(setJob("rua bat"));
  // 3. Reducer
  const reducer = (state, action) => {
    console.log("<<=== Action ===>>", action);
    console.log("<<=== Pre state ===>>", state);
    let newState;
    switch (action.type) {
      case SET_JOB:
        newState = {
          ...state,
          job: action.payload,
        };
        break;
      case ADD_JOB:
        newState = {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
        console.log(
          "Giá trị của state.jobs sau khi thêm công việc mới:",
          ...state.jobs
        );
        break;
      case DELETE_JOB:
        const newJobs = [...state.jobs];
        newJobs.splice(action.payload, 1);
        newState = {
          ...state,
          jobs: newJobs,
        };
        break;
      default:
        throw new Error("Invalid action!");
    }
    console.log("<<=== New state ===>>", newState);
    return newState;
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div className="App">
      {/* component */}
      {/* <h1>{name}</h1>
      {name1} */}
      {/* <User name="Tran The Huy" age={20} email="huytran@gmail.com" />
      <User name="Pham My Duyen" age={21} email="myduyen@gmail.com" />
      <User name="Nguyen Thi Bich Giang" age={22} email="bichgiang@gmail.com" /> */}

      {/* Example */}
      {/* {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h2 style={{ color: isGreen ? "green" : "red" }}>This has color</h2>
      {isGreen && (
        <button style={{ cursor: "pointer" }}>This is a button</button>
      )} */}

      {/* List - Array */}
      {/* {names.map((value, index) => {
        return <h1 key={index}>{value}</h1>;
      })} */}

      {/* {users.map((user, index) => {
        return <Users key={index} name={user.name} age={user.age} />;
      })} */}

      {/* useState */}
      {/* {age}
      <button onClick={increaseAge}>Increase Age</button> */}

      {/* <input type="text" onChange={handleInputChange} />
      {inputValue} */}
      {/* <button onClick={handleHideAndShow}>{showText ? 'Show' : 'Hide'}</button>
      {showText && <h1>Hi my name is Huy</h1>} */}

      {/* <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Change color
      </button>
      <h1 style={{ color: textColor }}>Hello Guys</h1> */}

      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to zero
      </button>
      {count} */}
      {/* // ? todo project  */}
      {/* <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <ul className="list">
          {todoList.map((task, index) => {
            return (
              <Task
                key={index}
                id={task.id}
                taskName={task.taskName}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </ul>
      </div> */}

      {/* // ? todo project with useReducer */}
      <div>
        <h3>Todo</h3>
        <input
          ref={inputRef}
          value={job}
          type="text"
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span
                onClick={() => {
                  dispatch(deleteJob(index));
                }}
                style={{ cursor: "pointer" }}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// component
// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.email}</h2>
//     </div>
//   );
// };

export default App;
