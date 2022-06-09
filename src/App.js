
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashbord from './component/dashbord';
import Profile from './component/profile';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashbord" element={<Dashbord />} />
        
      </Routes>
    </BrowserRouter>
   
  );

}

export default App;
