import React, { useState } from 'react'
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';

const App = () => {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [ ...prevItems, inputText];
    });
  }
  function deleteItem(id){
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }


  console.log (items);
  return (
    <div className='container'>
      <h1>To Do List</h1>
      <InputArea addItem = {addItem}></InputArea>
      <ul>
        {
          items.map((todoitem,index) => {
            return <ToDoItem key = {index} text={todoitem} id={index} deleteItem={deleteItem}/>
          })
        }
      </ul>
    </div>
  )
}
export default App;