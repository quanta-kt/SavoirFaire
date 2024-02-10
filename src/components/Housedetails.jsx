import React from 'react'

const Housedetails=({children,Class})=>{
  return (
    <>
        <p className={Class}>
            {children}
        </p>
    </>
  )
}

export default Housedetails