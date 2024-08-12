// import React, { useState, useEffect } from 'react';
// import LoginForm from '../Modal/loginapi';
// import Navbar from '../Navbar/index';

// const Login = () => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const checkLogin = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/auth/login');
//         const data = await response.json();
//         if (data.username) {
//           setUsername(data.username);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     checkLogin();
//   }, []);

//   const handleLogin = (newUsername) => {
//     setUsername(newUsername);
//   };

//   return (
//     <>
//       <Navbar username={username} />
//       {username ? (
//         <p>You are logged in!</p>
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </>
//   );
// };

// export default Login;