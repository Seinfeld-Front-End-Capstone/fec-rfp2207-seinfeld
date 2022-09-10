import React from 'react'
import { BsFacebook, BsPinterest } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='OVcenterInfo'>
      <BsFacebook  className='OVSocialMedia'/>
      <BsPinterest className='OVSocialMedia'/>
      <AiFillTwitterCircle className='OVSocialMedia'/>
    </div>
  )
}

export default SocialMedia