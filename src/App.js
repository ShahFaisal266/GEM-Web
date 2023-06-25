import { Route, Routes ,Outlet } from 'react-router-dom';
 
import NewsPage from './components/Pages/NewsPage';
import NewsDetailsPage from './components/Pages/NewsDetailsPage';
 
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
 
import EventDetailsPage from './components/Pages/EventDetailsPage';
import EventPage from './components/Pages/EventPage';
import TeamPage from './components/Pages/TeamPage';
import TalentBoardPage from './components/Pages/TalentBoardPage';
import TeamDetails from './components/Pages/TeamDetails';
 
import Layout from './components/Layout';
import AboutCompetition from './components/Pages/AboutCompetition';
import FaqPage from './components/Pages/FaqPage';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import TalentPage from './components/Pages/TalentPage';
import Jury_Mentor from './components/Pages/JuryPage';
import PrizePage from './components/Pages/PrizePage';
import RulesPage from './components/Pages/RulesPage';
import FindTalent from './components/Pages/FindTalentPage';
import TalentProfile from './components/Talent';
import TalentMain from './Talent-profile/TalentMain';
import AboutMe from './Talent-profile/About-Me/AboutMe';
import Achievements from  './Talent-profile/Achivements/Achivements'
import Skills from './Talent-profile/Skills/Skills'
import Experinces from './Talent-profile/Experinces/Experinces';
import Projects from './Talent-profile/Projects/Projects';
import Images from './Talent-profile/Images/Images';
import Videos from './Talent-profile/Videos/Videos';
import FindTalentUserData from './components/Pages/Fint-talent-allUser-data/FindTalentUserData';
import Footer from './components/Footer';
import Postdetails from './components/Pages/Fint-talent-allUser-data/Post-Details/PostDetails';
 

function App() {
  return (
    <>
{/* 
    <FindTalentUserData/> */}
     <Layout />
       <Routes>
        <Route path='talenprofile/' element={<TalentMain/>}>
        <Route index  path='dashboard' element={<FindTalent/>}/>
        <Route  path='aboutme' element={<AboutMe/>}/>
        <Route path='achivements' element={<Achievements/>}/> 
        <Route path='skills' element={<Skills/>}/>
        <Route path='experinces' element={<Experinces/>}/> 
        <Route path='projects' element={<Projects/>} />
        <Route  path='images' element={<Images/>}/>
        <Route path='videos' element={<Videos/>}/>
       
        </Route>

        <Route path='/postdetails' element={<Postdetails/>}   />
       </Routes>



      <Routes>
         
          <Route index element={<Home />} />
         
        
     
        
          <Route path="events" element={<EventPage />} />
          
          <Route
            path="/events-Details/:id"
            element={<EventDetailsPage />}
          />
          <Route path="talent-board" element={<TalentBoardPage />} />
          
          <Route path="news" element={<NewsPage />} />
          <Route path="/news-details/:id" element={<NewsDetailsPage />} />
         
         
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route
            path="/about-competition"
            element={<AboutCompetition/>}
          />
          <Route path="talent" element={<TalentPage />} />
          <Route path="jury-mentor" element={<Jury_Mentor />} />
          <Route path="prizes-winners" element={<PrizePage/>} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="find-talent" element={<FindTalentUserData/>} />
          
        
      
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
          
        </Route>
       
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
