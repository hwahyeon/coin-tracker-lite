import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./components/Todo";
import Coin from "./components/Coin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/reactjs_small/" element={<Home />} />
                <Route path="/reactjs_small/todo" element={<Todo />} />
                <Route path="/reactjs_small/coin" element={<Coin />} />
            </Routes>
        </Router>
    );
}

export default App;
