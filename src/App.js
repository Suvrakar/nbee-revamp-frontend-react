// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CourseCard from "./Components/MainMenu/CourseCards/CourseCard";
import LoginForm from "./Components/MainMenu/Login/Login";
import PreRegister from "./Components/MainMenu/PreRegister/PreRegister";
import Support from "./Components/MainMenu/Support/Support";
import RegistrationForm from "./Components/MainMenu/Register/Register";
import ProtectedRoute from "./Components/PrivateRoutes";
import UserProfile from "./Components/MainMenu/Profile/Profile";
import LoginHeader from "./Components/Header/LoginHeader";
import CourseSection from "./Components/MainMenu/CourseSection/CourseSection";
import EditSectionForm from "./Components/MainMenu/EditProfile/EditProfile";
import EnrolledCourses from "./Components/MainMenu/EnrolledCourses/EnrolledCourses";
import UsersTable from "./Components/SuperAdmin/UserView/UserView";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Router>
        {isLoggedIn ? <LoginHeader /> : <Header />}
        <Routes>
          <Route exact path="/" element={<CourseCard />} />
          <Route
            exact
            path="/nbee/login"
            element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            exact
            path="/registration/preresigter"
            element={<PreRegister />}
          />
          <Route exact path="/nbeecommon/support" element={<Support />} />
          <Route
            exact
            path="/registration/register"
            element={<RegistrationForm />}
          />
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/profile" element={<UserProfile />} />
            <Route exact path="/course" element={<CourseSection />} />
            <Route exact path="/edit-profile" element={<EditSectionForm />} />
            <Route exact path="/enrolled-courses" element={<EnrolledCourses />} />
            <Route exact path="/user-nbee101-admin-view" element={<UsersTable />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
