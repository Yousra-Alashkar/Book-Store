import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import LibraryPage from './pages/LibraryPage'
import CartPage from "./pages/CartPage"
import PaymentPage from './pages/PaymentPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App({ children }) {
  return (
    <>
    <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}

       <BrowserRouter>
       <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/library" element={<LibraryPage/>}/>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/payment" element={<PaymentPage/>} />
       </Routes>
      </BrowserRouter> 
      </LocalizationProvider>
    </div>
    </>
  );
}

export default App;
