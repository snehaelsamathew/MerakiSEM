import React from 'react'
import './Sidebar.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoListCircleOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
            <NavLink to='/add' className='sidebar-option'>
              <IoIosAddCircleOutline />
                <p>Add Items</p>
                </NavLink>
          
            <NavLink to='/list' className='sidebar-option'>
                <IoListCircleOutline />
                <p>List Items</p>
           </NavLink>
            <NavLink to='/orders' className='sidebar-option'>
               <FaClipboardList />
                <p>Orders</p>
                </NavLink>
          
      </div>
      </div>
  )
}

export default Sidebar