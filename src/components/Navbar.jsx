import React from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { AiOutlineBell, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'

const Navbar = ({ logged }) => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='logo'>
          <Typography variant='h4' color='primary'>
            Moviex
          </Typography>
        </div>
        <div className='register'>
          {!logged && (
            <Button variant='outlined' color='primary' className='button'>
              <Typography variant='button'>Register</Typography>
            </Button>
          )}
          {logged && (
            <>
              <div className='search-input'>
                <AiOutlineSearch className='icon-search' />
                <input type='text' placeholder='Search...' />
              </div>
              <AiOutlineBell className='icon' />
              <AiOutlineUser className='icon' />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
