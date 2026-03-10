import  {useState, useEffect, useRef} from "react";



import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Expertise from "./components/Expertise";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FadeIn from './components/FadeIn';
import './index.css';
import micTestAudio from './assets/audio/cv_audio_info.m4a';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (!isMuted) {
                audioRef.current.play().catch(() => {});
            } else {
                audioRef.current.pause();
            }
        }
    }, [isMuted]);

    const handleMuteToggle = () => {
        setIsMuted((val) => !val);
    }

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange} isMuted={isMuted} handleMuteToggle={handleMuteToggle}/>
        <FadeIn transitionDuration={700}>
            <Main isMuted={isMuted} handleMuteToggle={handleMuteToggle} />
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
        {/* Hidden audio element, controlled by explicit user action. */}
        <audio
          ref={audioRef}
          src={micTestAudio}
          loop
          style={{display: 'none'}}
        />
    </div>
    );
} 

export default App;