import PropTypes  from "prop-types"

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
Profile.defaultProps={
    fullName:"guest",
    bio:" bio not found" ,
    profession: " profession not found",
    handleName:()=>alert("default function")
  }
  
  Profile.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    handleName:PropTypes.func
  }
  


export default Profile
