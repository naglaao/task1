import React from 'react'

const Wellcome = () => {
  // get name form localstorge
  const email = localStorage.getItem('email');
  return (

    <div className='wellcome'>
        <h1 >
         {email}
        </h1>
        <h3>Welcometo the new world of web development!</h3>
    </div>
  )
}

export default Wellcome