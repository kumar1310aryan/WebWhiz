import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <NavBar />
      <LandingPage />
      <Marquee />
    </div>
  );
}

export default App;
