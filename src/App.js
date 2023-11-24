import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import TeacherDashboard from './Components/TeacherDashboard';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Studentlogin from './Components/Studentlogin';
import StudentRegistration from './Components/RegisterStudent';
import StudentDashboard from './Components/StudentDashboard';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';



function App() {
  return (
   <>
    <Navbar/>
   
   <Routes>

  {/* <Route exact path='/adminlogin' element={<AdminLogin handleAdminLogin={handleAdminLogin} />} />
  <Route path="/dashboard/*" element={<Dashboard  user={user}/>}></Route>
  <Route path="/admindashboard/*" element={<AdminDashboard  admin={admin}/>}></Route> */}
  <Route exact path='/login' element={<Login/>}></Route>
  <Route exact path='/teacher' element={<TeacherDashboard/>}></Route>
  <Route exact path='/registerstudent' element={<StudentRegistration/>}></Route>
  <Route exact path='/studentlogin' element={<Studentlogin/>}></Route>
  <Route exact path='/studentdashboard' element={<StudentDashboard/>}></Route>
   {/* <Route exact path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />}></Route>
  <Route exact path='/load' element={<LoadingAnimation/>}></Route> */}

  </Routes>
  <HeroSection/>
  <Footer/>
   </>
  );
}

export default App;
