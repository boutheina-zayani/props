
// import React, { Children } from 'react'
function Profile({fullName, bio, profession,children,handleName}) {
   
    return (
 
        <div> 
            {handleName(fullName)}
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <h2>{profession}</h2>
          
          <div>
          {children}
        </div>
             </div>   
    )
}



export default Profile
