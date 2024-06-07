import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/sketch/list`);
      console.log('API response:', response);
      if (response.data && response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching list: " + (response.data?.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error fetching list:", error);
      toast.error("Error fetching list: " + (error.response?.data?.message || error.message || "Unknown error"));
    }
  };

  const removeSketch = async (sketchId) => {
    try {
      const response = await axios.post(`${url}/api/sketch/remove`, { id: sketchId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();  // Refetch list after removing
      } else {
        toast.error("Error removing sketch: " + (response.data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error removing sketch:", error);
      toast.error("Error removing sketch: " + (error.response?.data?.message || error.message || "Unknown error"));
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p onClick={() => removeSketch(item._id)} className='cursor'>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
