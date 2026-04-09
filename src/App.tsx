import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import LabChallenges from './components/LabChallenges';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text">
      <Navbar />
      <Hero />
      <Resume />
      <Projects />
      <LabChallenges />
      <Contact />
      <Footer />
    </div>
  );
}
