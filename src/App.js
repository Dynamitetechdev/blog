import logo from './logo.svg';
import Header from './component/header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
