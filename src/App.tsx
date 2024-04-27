import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';


import { LoginSignup } from './Components/LoginSignup/LoginSignup';







function App() {
 



  // const ok = () => {
  //   socket.emit("oke", {message:message})
  // }

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
      
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  return (
    <>
      <LoginSignup/>
     
        
      
    </>

  );
}

export default App;
