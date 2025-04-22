import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import PixelCard from './components/PixelCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <PixelCard variant="blue">
        <div className='absolute cursor-pointer'>
      <About />
        </div>
      </PixelCard>
      {/* <About /> */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App