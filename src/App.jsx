import './App.css';
import { Outlet, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import HomeScreen from './components/home_screen.jsx';
import Layout from './components/layout.jsx'
import About from './components/about_me_screen.jsx';
import CV from './components/cv_screen.jsx';
import Projects from './components/projets_screen.jsx';




function Main(){
  return(
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/cv' element={<CV/>}/>
      </Route>
    </Routes>
)}

function App() {

  return (
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
  )
}

export default App;
