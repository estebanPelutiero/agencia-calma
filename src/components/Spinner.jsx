import React from 'react'
import DotLoader from "react-spinners/DotLoader";

const Spinner = ({isLoading}) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <DotLoader color='#8743FF' loading={isLoading}></DotLoader>
    </div>
  )
}

export default Spinner