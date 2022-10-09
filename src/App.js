import logo from './logo.svg';
import './App.css';
import {ChakraProvider, Text} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Text>Test</Text>
    </ChakraProvider>
  );
}

export default App;
