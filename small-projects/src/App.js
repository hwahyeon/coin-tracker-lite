import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Todo from "./components/Todo";
import Coin from "./components/Coin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/coin" element={<Coin />} />
            </Routes>
        </Router>
    );
}

export default App;
