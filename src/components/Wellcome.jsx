import React from 'react'

const Wellcome = () => {
  // get email form localstorge
  const email = localStorage.getItem('email');
  return (

    <div className='wellcome'>
        <h1 >
            Welcome {email} to the new world of web development!
            
        </h1>
    </div>
  )
}

export default Wellcome