// "use client"

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


// export default function Home() {

  
//   return (
//     <SessionProvider>
//       <OtherHome/>
//     </SessionProvider>
//   );
// }

// function OtherHome (){
//   const session = useSession()

//   return (
//     <div>
//       {session.status === "authenticated" && <button onClick={()=>signOut()}>Signout</button>}
//       {session.status === "unauthenticated" && <button onClick={()=>signIn()}>Signin</button>}
//     </div>
//   )

// }

//better way ->

import {getServerSession} from 'next-auth'

export default async function Home(){
  const session = await getServerSession()

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}