import './App.css'
import HeroSection from './components/HeroSection'


function App() {
  const handleWatchDemo = () => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection onWatchDemo={handleWatchDemo} />

      <section id="demo" className="h-[600px] bg-gray-100 mt-10">
        <p className="mt-4 text-slate-600 text-center px-6 py-12 md:py-20 md:px-16">
          This is a demo target for the "Watch Demo" button to scroll to.</p>
      </section>
    </>
  );
}
export default App
