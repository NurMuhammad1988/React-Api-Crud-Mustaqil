import './App.css';
// import Create from './Components/Create'; 
import Read from './Components/Read'
import { BrowserRouter as Router, } from 'react-router-dom'
// import Update from './Components/Update';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header" >React Crud Operations</h2>
        {/*<Create />*/}
        <Read />
        {/*<Update/>*/}
      </div>
    </Router>
  );
}

export default App;