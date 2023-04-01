import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chat from './Components/Chat';
import Join from './Components/Join';
import Chatstate from './Components/Context/Chatstate';

function App() {
  return (
    <BrowserRouter>
      <Chatstate>
        <Routes>
          <Route path='/' element={<Join />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
        </Routes>
      </Chatstate>
    </BrowserRouter>
  );
}

export default App;
