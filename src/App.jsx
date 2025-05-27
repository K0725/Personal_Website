import Navbar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import Travel from "./components/Travel";
import ContactInfo from "./components/ContactInfo";
import Strava from './components/Strava';
export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth font-sans">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <Home />
      </section>

      <section id="about" className="py-24 px-6 bg-black">
        <AboutMe />
      </section>

      <section id="timeline" className="py-24 px-6 bg-neutral-900">
        <Timeline />
      </section>

      <section id="travel" className="py-24 px-6 bg-black">
        <Travel />
      </section>
      <section id="strava" className="py-24 px-6 bg-black">
        <Strava />
      </section>

      <section id="contact" className="py-24 px-6 bg-neutral-900">
        <ContactInfo />
      </section>
    </div>
  );
}
