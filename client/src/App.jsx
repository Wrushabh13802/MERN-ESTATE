import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute.jsx';
import CreateListing from './pages/CreateListing.jsx';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing.jsx';
import Search from './pages/Search.jsx';

export default function App() {
  return (

  <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/search" element={<Search/>} />
    <Route path="/listing/:listingId" element={<Listing />} />


    <Route  element  = {<PrivateRoute />} >
    <Route path="/profile" element={<Profile />} />
    <Route path="/create-listing" element={<CreateListing />} />
    <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
    </Route>
    </Routes>
  </BrowserRouter>
  )
}


