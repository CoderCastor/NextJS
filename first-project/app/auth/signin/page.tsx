"use client"
import React from 'react'

function page() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center p-10 bg-zinc-900 gap-5'>
      <div className='flex justify-center flex-col gap-5 rounded-2xl px-28 py-16 items-center bg-zinc-800'>
      <h2 className='text-4xl text-white'>Sign in</h2>
      <input key={1} className='bg-zinc-900 rounded-2xl px-2 py-2' type="text" name="username" placeholder='username' id="" />
      <input key={2} className='bg-zinc-900 rounded-2xl px-2 py-2' type="password" name="password" placeholder='password' id="" />
      <button>Sign in</button>
      </div>
    </div>
  )
}

export default page
