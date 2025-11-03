import MistyBackground from './components/MistyBackground';
import HeroTitle from './components/HeroTitle';
import CallToAction from './components/CallToAction';
import SocialStrip from './components/SocialStrip';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <MistyBackground />

      {/* Content layer */}
      <main className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="flex flex-col items-center md:items-start">
            <HeroTitle />
            <CallToAction />
            <SocialStrip />
          </div>
        </div>
      </main>

      {/* Soft top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />
    </div>
  );
}

export default App;
