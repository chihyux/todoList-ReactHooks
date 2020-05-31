import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//title
const Title = (props) => {
    return <div><h1>{props.title}</h1></div>
}

const InputName = (props) => {
  return (
    <div><h3>{props.inputName}</h3></div>
  )
}

//Todo items
function Todo({ todo, delate }) {
  const [done, setDone] = useState(false)

  const completeT = () => {
    setDone(!done)
  }

  return (
    <div class='card'>
      <div>
        <input type='checkbox' onClick={()=>completeT()}></input>
        <div style={{ textDecoration: done? 'line-through' : '' }}>
          <h6>Deadline: {todo.date}</h6>
          <h5>{todo.name}</h5>
        </div>
          
      </div>
      <div class='memo'>Memo:<br></br> {todo.comment}</div>
      <button class='btn btn-danger' onClick={()=>delate(todo.id)}>Delate</button>
    </div>
  )
}

//form Task
function Form({ addTodo }) {
  const [value, setValue] = useState({
    id: '',
    date: '',
    name: '',
    comment: ''
  });

  const close = () => {
    document.getElementById('form').style.display = 'none';
    document.getElementById('addSomething').style.display='';
    setValue({
      id: '',
      date: '',
      name: '',
      comment: '',
      done: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.name) {
      alert('You need to add something!')
    } else {
      close() 
      addTodo(value);
      
      setValue({
      id: '',
      date: '',
      name: '',
      comment: '',
      done: ''
    })
    }
  }

  return (
    <div class='card'>
      <form>
        <div class='card-body'>
        <InputName inputName='New Todo' />
        <input type='text' placeholder='Add Something to do !' value={value.name} onChange={e => setValue({...value,name: e.target.value})}/>
        <div class='deadline'>
        <InputName inputName='Deadline' />
        <input type='date' value={value.date} onChange={e => setValue({...value,date:e.target.value})} />
        </div>
        <div class='comment'>
          <InputName inputName='Comment' />
          <textarea type='text' rows='5' cols='40' value={value.comment} onChange={e => setValue({...value,comment:e.target.value})}>
          </textarea>
        </div>
        </div>
        <div class='card-body'>
        <button class='btn btn-danger' type='button' onClick={close}>Cancel</button>
        <button class='btn btn-primary' type='submit' onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  )
}

//Add something
function AddSomething ({ addTodo }) {
  function open() {
    document.getElementById('addSomething').style.display = 'none'
    document.getElementById('form').style.display=''
  }
  return (
    <div>
      <div id='addSomething' onClick={open}>
        <input class='col-sm-7' type='text' placeholder='Add Something to do !' />
        <i class="col-sm-1 fas fa-pen fa-lg icon icon_edit"></i>
      </div>
      <div id='form' style={{display:'none'}}>
        <Form addTodo={addTodo} />
      </div>
    </div>
  )
}

function App () {
  const [todos, setTodos] = useState([
    {
      id: '0',
      date: '2020/04/12',
      name: "first Todo !!",
      comment: 'hi',
    }
  ])

  const addTodo = (value) => {
    setTodos([...todos, value]);
  }

  const delate = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
    <Title title="Todo List" />
    <AddSomething addTodo={addTodo} />
    <div class='List'>
        {todos.map((todo,index) => (
        <Todo 
        todo={todo} 
        index={index}
        delate={delate}
        />
        ))}
    </div>
  </div>
  )
}
  
ReactDOM.render(<App />, document.getElementById('root'));