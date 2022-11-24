import Root from './pages/Root';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Root />} />
         <Route path='/login' element={<Login />} />
       </Routes>
    </div>
  );
}

export default App;
