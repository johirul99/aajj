import React from 'react'
import Image from './Image'
import product from  '../assets/product1.png'
import Budge from './Budge'
import PortionHeading from './PortionHeading'


const Product = () => {
  return (
    <>
    <div className='relative'>

    <Image src={product} className='w-[300px] '/>
    <Budge text="10%"/>
    </div>
    <div className='flex mt-4'>
    <PortionHeading text="Basic Crew Neck Tee"/>
    <p className='font-dm font-normal text-base mr-3'>$44.00</p>
    </div>
    </>
    
  )
}

export default Product