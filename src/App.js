/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
// import Course from './Helper/HomePageCourse/CourseBox'
import CourseDetails from './pages/Project/projects'
import Footer from './components/footer/Footer'
import BackToTopButton from './Helper/scroll/BackToTopButton'
import './styles/style.css'
import InfoSchool from './pages/InfoSchool/InfoSchool'
// import CourseData from './courses.json'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/projects/:slug" element={<CourseDetails />} />
          <Route
            path="/information-about-the-school"
            element={<InfoSchool />}
          ></Route>
        </Routes>

        <BackToTopButton />

        <Footer />
      </Router>
    </div>
  )
}

export default App

// ${createUrlSafeSlug(course.slug)}
