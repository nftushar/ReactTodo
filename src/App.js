import React, { useState } from 'react';
import './App.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function TransitionProps(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function App() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  ///////////////////  opoup close  ////////////////////////

  const defaultTodos = [
    {
      text: "my  firstfirst  todo list",
      status: true,
    },
    {
      text: "my  list",
      status: true,
    },
    {
      text: "my first  todo list",
      status: true,
    },
    {
      text: "my first  todo list",
      status: true,
    },
    {
      text: "my first todo list",
      status: false,
    },
  ]

  const [text, setText] = useState();
  const [todos, setTodo] = useState(defaultTodos);

  const handleCheck = (index) => {

    const newTodos = [...todos];
    newTodos[index].status = !todos[index].status;
    setTodo(newTodos);
  };

  const handleDelete = (index) => {
    // console.log(todos);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);

  };

  const handleSubmit = (index) => {
    const newTodos = [...todos];
    newTodos.push({ text: text, status: true })
    setTodo(newTodos);
    setText(" ")
  }

  return (

    // ////////// pop-up close  
    <div className='container'>
      <div className='row'>

        {/* ///////////////////  pop-up Start  //////////////////////// */}
        <div>

          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description" >

            <DialogContent width="100%">
              {/* <DialogContentText id="alert-dialog-slide-description"> */}
              <div className='inputs inputspopup' >
                <h1 className='activity'>Add Activity</h1>
                <input value={text} placeholder='Do home Work' className="inputTag" onChange={(e) => setText(e.target.value)} /> <br></br><br></br>
                <div className='container'>
                  <div className='row'>
                    <div className='btns'>
                      <button className='btnadd btnback' onClick={() => handleClose()} href="#" >Back</button>
                      <button className='btnadd btnadd2' onClick={() => handleSubmit()}>Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* ///////////////////  opoup close  //////////////////////// */}


        <div className='wrapper'>
          <div className='head'>
            <h2 className='baricon' >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 35 23"><g id="hambuger-menu" transform="translate(-36 -18)"><rect id="Rectangle_5" data-name="Rectangle 5" width="35" height="3" rx="1.5" transform="translate(36 18)" fill="#fff"></rect><rect id="Rectangle_6" data-name="Rectangle 6" width="28" height="3" rx="1.5" transform="translate(36 28)" fill="#fff"></rect><rect id="Rectangle_7" data-name="Rectangle 7" width="22" height="3" rx="1.5" transform="translate(36 38)" fill="#fff"></rect></g></svg>
            </h2>
            <h1 className='heading'>React ToDo</h1>
          </div>
          <p className='subheading'>Click to finish activity</p>
          {todos.map((todo, index) => (
            <div className='maindata' >
              <span className='data'>
                <div>
                  <input type="checkbox" className='checkbox' onClick={() => handleCheck(index)} />
                </div>
                <div>
                  <p className='text'>{todo.text}</p>
                </div>
                <div>
                  {/* {element} */}
                  <div onClick={() => handleDelete(index)} className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.474" height="17.972" viewBox="0 0 16.474 17.972"><g id="trash-can" transform="translate(-1)">
                      <path id="Path_1" data-name="Path 1" d="M16.912,7.118H1.562A.562.562,0,0,1,1,6.557v-1.5A2.061,2.061,0,0,1,3.059,3H15.415a2.061,2.061,0,0,1,2.059,2.059v1.5A.562.562,0,0,1,16.912,7.118Z" transform="translate(0 -0.754)" fill="#d90000"></path><path id="Path_2" data-name="Path 2" d="M3,9.5v8.8a2.061,2.061,0,0,0,2.059,2.059h9.36A2.061,2.061,0,0,0,16.479,18.3V9.5Zm4.306,7.863a.749.749,0,0,1-1.5,0V11.746a.749.749,0,0,1,1.5,0Zm3.182,0a.749.749,0,0,1-1.5,0V11.746a.749.749,0,0,1,1.5,0Zm3.182,0a.749.749,0,1,1-1.5,0V11.746a.749.749,0,1,1,1.5,0Z" transform="translate(-0.502 -2.386)" fill="#d90000"></path><path id="Path_3" data-name="Path 3" d="M13.991,1.5V1.31A1.312,1.312,0,0,0,12.68,0H9.31A1.312,1.312,0,0,0,8,1.31V1.5Z" transform="translate(-1.758)" fill="#d90000">
                      </path></g></svg>
                  </div>
                </div>
              </span><br></br>
            </div>
          ))}
          {/* <div className='maininputs'> */}
          <div className='inputs' >
            {/* <div></div> */}
            <p className='activity'>Add Activity</p>
            <button variant="outlined" className='btn-add' onClick={handleClickOpen}>Add Activity</button>
          </div>

          {/* ////////////////////////////////////  Popup part //////////////////////////  */}
          {/* < div className='inputs inputspopup ' >
            <p className='activity'>Add Activity</p>
            <input value={text} className="inputTag" onChange={(e) => setText(e.target.value)} /> <br></br><br></br>
            <div className='container'>
              <div className='row'>
                <div className='btns'>
                  <button className='btnadd btnback' href="#" >Back</button>
                  <button className='btnadd btnadd2' onClick={() => handleSubmit()}>Add</button>

                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>


  )
}


