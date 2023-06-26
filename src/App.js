import './App.css';
import {Routes,Route} from "react-router-dom";
import { PostPage } from './pages/postpage/postpage';
import { LandingPage } from './pages/landingpage/landingpage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/post/:ID" element={<PostPage/>}/>
      </Routes>


     
    </div>
  );
}

export default App;
