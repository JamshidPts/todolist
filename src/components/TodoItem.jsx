import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/TodoSlice';
import Modal from './Modal';

const TodoItem = ({ todo }) => {
  // const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      // setIsEditing(false);
      setShowModal(false);
    }
  };

  return (
    <div className='w-[400px] my-[20px] mx-0 py-[10px] px-[40px] text-[white] relative'>
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className='font-bold w-[140px] py-[10px] rounded-[5px] font-[sans-serif] text-[black]'>Edit Todo</h2>
          <input className='w-[90%] mt-[5px] text-[black] p-[5px] border-[1px] border-[#333] rounded-[5px]'
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className='mt-[20px] py-[10px] px-[20px] bg-[#295F98] text-[white] border-none rounded-[5px] cursor-pointer' onClick={handleEdit}>Save</button>
        </Modal>
      ) : (
        <div className='flex items-center'>
          <span className='text-[20px] bg-[#333] py-[10px] px-[20px] rounded-[6px] min-w-[400px]'>{todo.text}</span>
          <button className='absolute left-[520px] py-[10px] px-[20px] bg-[#295F98] text-[white] border-none rounded-[5px] cursor-pointer' onClick={() => setShowModal(true)}>Edit</button>
          <button className='absolute left-[600px] py-[10px] px-[15px] bg-[#295F98] text-[white] border-none rounded-[5px] cursor-pointer' onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
