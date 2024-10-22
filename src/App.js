import './App.css';
import Bookdetails from './Components/Bookdetails/Bookdetails';
import Books from './Components/Books/Books';
import Header from './Components/Header/Header';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <HashRouter>
       <Header/>
      <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/books" element={<Bookdetails/>} />
      </Routes>
    </HashRouter>
    </Provider>
  );
}

export default App;
