import React from 'react'
import Search from './Search';

const Contact = () => {

    const arr = [1, 2, 3];
  return (
    <div>
          {
              arr.map(() => (
                  <Search/>
              ))
      }
    </div>
  )
}

export default Contact
