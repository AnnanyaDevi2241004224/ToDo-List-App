import { useState, useEffect } from 'react';
import Head from './components/Head';
import Foot from './components/Foot';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)


  useEffect(() => {
    let s = localStorage.getItem("todos")
    if (s) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLocalStrorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const handleAdd = () => {
    // setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    // setTodo("")
    // saveToLocalStrorage(todos)
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    saveToLocalStrorage(newTodos);

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setTodos(newtodos);
    saveToLocalStrorage(newtodostodos)

  }
  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newtodos);
    saveToLocalStrorage(newtodostodos)
  }
  const handleDelete = (e, id) => {
    let newtodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newtodos);
    saveToLocalStrorage(newtodostodos)
  }
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)

  }


  return (
    <>
      <Head />
      <div className='container rounded-xl p-5 bg-[#d3f7d3] w-full md:max-w-[calc(100%-80px)] md:mx-auto my-5 min-h-[70vh]'>
        <div className="addTodo my-6">
          <h1 className='text-xl font-bold'>Add Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 px-2 py-3 h-9 rounded-xl' />
          <button onClick={handleAdd} disabled={todo.length <= 0} className='disabled:bg-[#0e510e] text-white bg-green-600 m-5 px-7 font-bold border-[3px] border-black py-1 rounded-md hover:bg-[red]'>ADD</button>
        </div>
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <h1 className='text-xl font-bold'>Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div className='m-4  text-xl'>No ToDos to display...</div>}
          {
            todos.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo px-2 rounded-md bg-[#b0fcb0] my-1 flex items-center justify-between md:w-1/2 hover:bg-[#83f783] hover:border-2 hover:border-black">
                <div className='flex items-center gap-4'>
                  <input onChange={handlecheckbox} type="checkbox" checked={item.isCompleted} name={item.id} />
                  <div className={`text-lg break-words whitespace-normal w-full ${item.isCompleted ? "line-through" : ""}`}>{item.todo}</div>
                </div>
                <div className="buttons flex items-center">
                  <button title='EDIT' onClick={(e) => { handleEdit(e, item.id) }} className='text-white bg-green-600 m-2 px-7 font-bold border-[3px] border-black py-1 rounded-md hover:bg-[red]'><FaEdit /></button>
                  <button title='DELETE' onClick={(e) => { handleDelete(e, item.id) }} className='text-white  bg-green-600 m-2 px-7 font-bold border-[3px] border-black py-1 rounded-md hover:bg-[red]'><MdDeleteForever /></button>
                </div>

              </div>
            })
          }
        </div>
      </div>
      <Foot />
    </>
  );
}

export default App;