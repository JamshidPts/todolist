import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import Modal from './Modal'; // New Modal Component

const AddTodo = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo(''); // Clear input field
      setShowModal(false); // Close the modal after adding the todo
    }
  };

  return (
    <div className='mt-[80px] p-[20px] border-solid border-[1px] border-[rgb(92, 91, 91)] rounded-[8px]'>
      <div className="flex justify-end items-center gap-[150px]">
        <SearchBar />
        <button className='p-[10px] rounded-[5px] bg-[#295F98] text-[white] text-[15px]' onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className='font-bold w-[140px] py-[10px] rounded-[5px] font-[sans-serif]'>Add New Todo</h2>
          <input
            className='rounded-[5px] w-[340px] h-[40px] p-[10px] mt-[10px] border-[1px] border-[#333]'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new task"
          />
          <button className='mt-[20px] py-[10px] px-[20px] bg-[#295F98] text-[white] border-none rounded-[5px] cursor-pointer' onClick={handleAddTodo}>
            Add
          </button>
        </Modal>
      )}
      <TodoList />
    </div>
  );
};

export default AddTodo;
