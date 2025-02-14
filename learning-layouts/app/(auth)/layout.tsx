import React,{ReactNode} from 'react'

export default function layout({children}:{children : ReactNode}) {
  return (
    <div>
        <h2>Headerrrrr</h2>
      {children}
      <h2>Fooooterrrr</h2>
    </div>
  )
}
