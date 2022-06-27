import Home from './Components/Home';
import Announcement from './Components/Announcements';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Kitchen from './Components/Kitchen';
import Footer from './Components/Footer';
import Hero from './Components/Hero'

function App() {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Home/>
      <Card/>
      <Kitchen/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
