import React, {useState} from 'react';
import AppRouter from "./Router";
import {authService} from "../fbase";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
      <>
        <AppRouter isLoggedIn={isLoggedIn}/>
        <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      </>
  );
}

export default App;