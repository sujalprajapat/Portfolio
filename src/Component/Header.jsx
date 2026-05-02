import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import Wave from "react-wavify"
import * as Tone from "tone";
function Header() {
  const strings = ["E3", "A3", "D4", "G4", "B4", "E5"];
  const synthRef = useRef(null);

  if (!synthRef.current) {
    const synth = new Tone.PluckSynth({
      attackNoise: 1,
      dampening: 4000,
      resonance: 0.9,
    });

    const reverb = new Tone.Reverb(1).toDestination();

    synth.connect(reverb);

    synthRef.current = synth;
  }

  const activeStrings = useRef(new Set());

  const lastTime = useRef(0);

  const playString = async (note, index) => {
    await Tone.start();

    if (activeStrings.current.has(index)) return;
    activeStrings.current.add(index);

    const now = Tone.now();

    if (now <= lastTime.current) {
      lastTime.current += 0.01;
    } else {
      lastTime.current = now;
    }

    synthRef.current.triggerAttackRelease(note, "8n", lastTime.current);

    setTimeout(() => {
      activeStrings.current.delete(index);
    }, 120);
  };

  const navigate = useNavigate()
  return (
    <div className=" shadow-xl relative md:sticky  flex  justify-between  bg-dark1  top-0 left-0 z-[99]">
      <div className="ribbon cursor-pointer" onClick={() => navigate('')}>
        <div className=" capitalize text-brownMedium pe-5 xl:text-2xl md:text-xl text-sm flex items-center h-full"><p> Full Stack web developer</p></div>
      </div>
      <div className="pe-3">
        <div
          className="flex justify-center items-center gap-4"
          onMouseLeave={() => activeStrings.current.clear()}
        >
          {strings.map((note, index) => (
            <div
              key={index}
              onClick={() => playString(note, index)}
              onMouseEnter={() => playString(note, index)}
              className="h-[80px] w-[3px] bg-gray-300 hover:bg-brownDark 
                     transition-all duration-100 hover:scale-y-110 
                     cursor-pointer  hover:shadow-lg"
            />
          ))}
        </div>
      </div>
      <div className="ribbon1 lg:me-40 me-[120px] bg-brownMedium " onClick={() => navigate('project')}>
        <span className="content text-light">project</span>
      </div>
      <div className="ribbon1 lg:me-20  me-[60px] bg-brownMedium" onClick={() => navigate('about')}>
        <span className="content text-light ">about</span>
      </div>
      <div className="ribbon1 lg:me-0 me-[00px] bg-brownMedium" onClick={() => navigate('contact')}>
        <span className="content text-light">contact</span>
      </div>
      <Wave
        fill="#000"
        paused={false}
        className="absoulte top-0 left-0 h-[20px]"
        style={{ display: "flex", transform: "rotate(180deg)", position: 'absolute', top: "100%", zIndex: "0" }}
        options={{
          amplitude: 20,
          speed: 0.15,
          points: 5,
        }}
      />
    </div>
  )
}
export default Header