import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
