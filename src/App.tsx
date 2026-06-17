import  {useState, useEffect, useRef} from "react";
import { Analytics } from '@vercel/analytics/react';
import ModernHero from "./components/ModernHero";
import Timeline from "./components/Timeline";
import Expertise from "./components/Expertise";
import { ModernProjects } from "./components/projects";
import Contact from "./components/Contact";
import ModernNavigation from "./components/ModernNavigation";
import ModernFooter from "./components/ModernFooter";
import ModernLayout from "./components/layout/ModernLayout";
import { projects } from "./data/projects";
import FadeIn from './components/FadeIn';
import './index.css';
import './styles/animations.css';
import micTestAudio from './assets/audio/cv_audio_info.m4a';

function App() {
    const [mode, setMode] = useState<string>('light');
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
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'} transition-colors duration-300`}>
        <ModernNavigation mode={mode} modeChange={handleModeChange} isMuted={isMuted} handleMuteToggle={handleMuteToggle}/>
        <ModernHero mode={mode} isMuted={isMuted} handleMuteToggle={handleMuteToggle} />
        <ModernLayout>
            <FadeIn transitionDuration={700}>
                <Expertise />
                <Timeline/>
                <ModernProjects projects={projects} mode={mode} />
                <Contact/>
            </FadeIn>
        </ModernLayout>
        <ModernFooter mode={mode} />
        {/* Hidden audio element, controlled by explicit user action. */}
        <audio
          ref={audioRef}
          src={micTestAudio}
          loop
          style={{display: 'none'}}
        />
        <Analytics />
    </div>
    );
} 

export default App;