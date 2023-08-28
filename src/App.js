import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';

import LoginForm from './components/LoginForm';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {

  const adminUser = {
    email:"admin@admin.com",
    password:"admin123"

  }

  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password)
    {
      console.log("Logged in");
      setUser({name:details.name,email:details.email});
    }
    else
    {
      console.log("You are not Logged in");
      setUser({name:"",email:""});
      setError("You are not Logged in");
    }  
  };

  const Logout = () => {
    console.log("Logout");
    setUser({name:"",email:""});
  };

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome! <span>{user.email}</span></h2>
          <span onClick={Logout}>LogOut</span>  
        </div>
      ):(
        <LoginForm Login={Login} error={error} />
      )}

<Carousel responsive={responsive} autoPlay={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Carousel>    
    </div>
  );
}

export default App;
