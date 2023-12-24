import './App.css';
import React, { useEffect} from 'react';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import TeacherDashboard from './Components/TeacherDashboard';
import { Route, Routes,useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Studentlogin from './Components/Studentlogin';
import StudentDashboard from './Components/StudentDashboard';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import StudentRegistration from './Components/StudentRegistration';
import StudentProfile from './Components/StudentProfile';




function App() {

  const navigate = useNavigate();

  



  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/') {
      navigate('/home');
    }
  }, [navigate]);

  
  return (
   <>
    <Navbar/>
   
   <Routes>

  {/* <Route exact path='/adminlogin' element={<AdminLogin handleAdminLogin={handleAdminLogin} />} />
  <Route path="/dashboard/*" element={<Dashboard  user={user}/>}></Route>
  <Route path="/admindashboard/*" element={<AdminDashboard  admin={admin}/>}></Route> */}
  <Route exact path='/login' element={<Login/>}></Route>
  <Route exact path='/teacher' element={<TeacherDashboard/>}></Route>
  <Route exact path='/studentlogin' element={<Studentlogin/>}></Route>
  <Route  path="/studentdashboard/*" element={<StudentDashboard/>}></Route>
  <Route exact path='/home' element={<HeroSection/>}></Route>
  <Route exact path='/studentregister' element={<StudentRegistration/>}></Route>
  <Route exact path='/studentprofle' element={<StudentProfile/>}></Route>
  

   {/* <Route exact path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />}></Route>
  <Route exact path='/load' element={<LoadingAnimation/>}></Route> */}

  </Routes>
  <Footer/>
   </>
  );
}

export default App;
