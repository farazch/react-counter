import React,{ useState } from 'react'

function LoginForm({Login,error}) {

    const [details,setDetails] = useState({name:"",email:"",password:""});

    const submitHandler = e => {

        e.preventDefault();

        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
    <h2>Login</h2>
    {(error !== '') ? <div>{error}</div> : ""}
    <div> 
        <input type="text" name="name" id="name" onChange={e => setDetails({...details,name:e.target.value})} value={details.name}  />
        <br />
        <input type="text" name="email" id="email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email} />
        <br />
        <input type="password" password="password" id="password" onChange={e => setDetails({...details,password:e.target.value})} value={details.password} />
        <br />
        <input type="submit" value="Submit" />
        <br />
    </div>
    </form>
  )
}

export default LoginForm
