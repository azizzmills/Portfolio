import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div>
      <Home/>  
    </div>        
  );
}

export default App;
