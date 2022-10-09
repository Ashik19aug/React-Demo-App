import logo from './logo.svg';
import './App.css';
import {ChakraProvider, Text} from '@chakra-ui/react'
import {Home} from "./Page";
import {NavBar} from "./Container";

function App() {
  return (
    <ChakraProvider>
        <NavBar/>
        <Home/>
    </ChakraProvider>
  );
}

export default App;
