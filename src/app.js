import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/calculator/calculator';
import Navbar from './components/navbar';
import Todoapp from './components/todoapp/todoapp';
import './app.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/todoapp" element={<Todoapp />} />
            </Route>
        </Routes>



    );
}
export default App;