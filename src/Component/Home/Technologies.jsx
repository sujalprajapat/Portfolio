import html from '../../Asset/Technology/html.png';
import html5 from '../../Asset/Technology/html5.png';
import css from '../../Asset/Technology/css.png';
import css3 from '../../Asset/Technology/css3.png';
import bootstrap from '../../Asset/Technology/bootstrap.png';
import tailwind from '../../Asset/Technology/tailwind.png';
import javascript from '../../Asset/Technology/javascript.png';
import react from '../../Asset/Technology/react.png';
import redux from '../../Asset/Technology/redux.png';
import github from '../../Asset/Technology/github.png';
import mysql from '../../Asset/Technology/mysql.png';
import mongodb from '../../Asset/Technology/mongodb.png';
import clanguage from '../../Asset/Technology/c.png';
import cplus from '../../Asset/Technology/c++.png';
import node from '../../Asset/Technology/nodejs.png';
import express from '../../Asset/Technology/expressjs.png';
import api from '../../Asset/Technology/api.png';
import LetterGlitch from '../../ExternalComponent/LetterGlitch';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import RadialSeparators from '../../ExternalComponent/RadialSeparators';
const Technology = [
  { id: 1, title: "html", img: html, rate: 80 },
  { id: 2, title: "html5", img: html5, rate: 80 },
  { id: 3, title: "css", img: css, rate: 80 },
  { id: 4, title: "css3", img: css3, rate: 80 },
  { id: 5, title: "bootstrap", img: bootstrap, rate: 60 },
  { id: 6, title: "tailwind", img: tailwind, rate: 60 },
  { id: 7, title: "javascript", img: javascript, rate: 50 },
  { id: 8, title: "react js", img: react, rate: 60 },
  { id: 9, title: "redux", img: redux, rate: 40 },
  { id: 10, title: "github", img: github, rate: 40 },
  { id: 11, title: "mysql", img: mysql, rate: 40 },
  { id: 12, title: "mongodb", img: mongodb, rate: 60 },
  { id: 13, title: "c language", img: clanguage, rate: 20 },
  { id: 14, title: "c++", img: cplus, rate: 20 },
  { id: 15, title: "node", img: node, rate: 40 },
  { id: 16, title: "express", img: express, rate: 40 },
  { id: 17, title: "api", img: api, rate: 60 },
]
function Technologies() {
  const [selectedTech, setSelectedTech] = useState(1);
  const selected = (id) => {
    let tech = Technology.find((item) => item.id === id)
    setSelectedTech(tech);
  }
  useEffect(() => {
    selected(1)
  }, [])
  return (
    <div className='md:py-16 py-0'>
      <div className='md:py-16 py-8   mx-auto relative'>
        <h1 data-aos="fade-up" className=' duration-200 transfrom-all xl:text-6xl md:text-5xl text-4xl font-bold uppercase text-center  text-brownLight  relative z-10 pb-10 md:pb-0'>Things I Know</h1>
        {/* for dive greater than 768 */}
        <div data-aos="fade-up" className=' duration-200 transfrom-all  md:flex hidden justify-between overflow-hidden relative z-10'>
          <div className='flex flex-col'>
            <div className={` ${selectedTech?.id === 1 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(1) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>HTML</p></div>
            </div>
            <div className={` ${selectedTech?.id === 2 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(2) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>HTML 5</p></div>
            </div>
            <div className={` ${selectedTech?.id === 3 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(3) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>CSS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 4 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(4) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>CSS3</p></div>
            </div>
            <div className={` ${selectedTech?.id === 5 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(5) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>BOOTSTRAP</p></div>
            </div>
            <div className={` ${selectedTech?.id === 6 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(6) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>TAILWIND</p></div>
            </div>
            <div className={` ${selectedTech?.id === 7 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(7) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>JAVASCRIPT</p></div>
            </div>
            <div className={` ${selectedTech?.id === 8 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(8) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>REACT JS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 9 ? '!bg-light' : ''}  ribbon !text-xl hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(9) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>REDUX</p></div>
            </div>

          </div>
          {
            selectedTech && (
              <div className='flex items-center'>
                <div>
                  <CircularProgressbarWithChildren value={selectedTech?.rate} strokeWidth={5}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textColor: "white",
                      pathColor: "#A37A5F",
                      trailColor: "#0f0f0f"
                    })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <RadialSeparators
                      count={16}
                      style={{
                        background: "#000",
                        width: "5px",
                        // This needs to be equal to props.strokeWidth
                        height: `${5}%`
                      }}
                    />
                    <img className='aspect-square bg-light w-[60%] rounded-full object-fit-cover' src={selectedTech?.img} alt="doge" />

                  </CircularProgressbarWithChildren>
                  <div className='text-brownLight text-2xl  text-center uppercase pt-5'>
                    <strong>{selectedTech?.rate}%</strong> {selectedTech?.title}
                  </div>
                </div>
              </div>
            )
          }

          <div className=' flex flex-col'>
            <div className={` ${selectedTech?.id === 10 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(10) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>GITHUB</p></div>
            </div>
            <div className={` ${selectedTech?.id === 11 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(11) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>MYSQL</p></div>
            </div>
            <div className={` ${selectedTech?.id === 12 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(12) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>MONGODB</p></div>
            </div>
            <div className={` ${selectedTech?.id === 13 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(13) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>C LANGUAGE</p></div>
            </div>
            <div className={` ${selectedTech?.id === 14 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(14) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>C++</p></div>
            </div>
            <div className={` ${selectedTech?.id === 15 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(15) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>NODE JS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 16 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(16) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>EXPRESS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 17 ? '!bg-light' : ''} ribbon2 !text-xl  hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(17) }}>
              <div className="capitalize text-brownMedium pe-5 w-32 h-[50px] flex items-center " ><p>API</p></div>
            </div>
          </div>
        </div>
        
        {/* for bg effect */}
        <div className='absolute top-0 left-0 w-full h-[calc(100%+100px)] '>
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          >
          </LetterGlitch>
        </div>

        {/* for dive smaller than 768 */}
        <div data-aos="fade-up" className='md:hidden  duration-200 transfrom-all '>
          <div className='flex gap-3 p-3 overflow-auto '>
            <div className={` ${selectedTech?.id === 1 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(1) }} onClick={() => { selected(1) }}>
              <div className="capitalize text-brownMedium   " ><p>HTML</p></div>
            </div>
            <div className={` ${selectedTech?.id === 2 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(2) }} onClick={() => { selected(2) }}>
              <div className="capitalize text-brownMedium  " ><p>HTML 5</p></div>
            </div>
            <div className={` ${selectedTech?.id === 3 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(3) }} onClick={() => { selected(3) }}>
              <div className="capitalize text-brownMedium  " ><p>CSS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 4 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(4) }} onClick={() => { selected(4) }}>
              <div className="capitalize text-brownMedium  " ><p>CSS 3</p></div>
            </div>
            <div className={` ${selectedTech?.id === 5 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(5) }} onClick={() => { selected(5) }}>
              <div className="capitalize text-brownMedium  " ><p>BS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 6 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(6) }} onClick={() => { selected(6) }}>
              <div className="capitalize text-brownMedium  " ><p>TW</p></div>
            </div>
            <div className={` ${selectedTech?.id === 7 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(7) }} onClick={() => { selected(7) }}>
              <div className="capitalize text-brownMedium  " ><p>JS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 8 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(8) }} onClick={() => { selected(8) }}>
              <div className="capitalize text-brownMedium  " ><p>REACT</p></div>
            </div>
            <div className={` ${selectedTech?.id === 9 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(9) }} onClick={() => { selected(9) }}>
              <div className="capitalize text-brownMedium  " ><p>REDUX</p></div>
            </div>
            <div className={` ${selectedTech?.id === 10 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(10) }} onClick={() => { selected(10) }}>
              <div className="capitalize text-brownMedium  " ><p>GITHUB</p></div>
            </div>
            <div className={` ${selectedTech?.id === 11 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(11) }} onClick={() => { selected(11) }}>
              <div className="capitalize text-brownMedium  " ><p>MYSQL</p></div>
            </div>
            <div className={` ${selectedTech?.id === 12 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(12) }} onClick={() => { selected(12) }}>
              <div className="capitalize text-brownMedium  " ><p>M DB</p></div>
            </div>
            <div className={` ${selectedTech?.id === 13 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(13) }} onClick={() => { selected(13) }}>
              <div className="capitalize text-brownMedium  " ><p>C LANG</p></div>
            </div>
            <div className={` ${selectedTech?.id === 14 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(14) }} onClick={() => { selected(14) }}>
              <div className="capitalize text-brownMedium  " ><p>C++</p></div>
            </div>
            <div className={` ${selectedTech?.id === 15 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(15) }} onClick={() => { selected(15) }}>
              <div className="capitalize text-brownMedium  " ><p>NODE</p></div>
            </div>
            <div className={` ${selectedTech?.id === 16 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(16) }} onClick={() => { selected(16) }}>
              <div className="capitalize text-brownMedium  " ><p>EX JS</p></div>
            </div>
            <div className={` ${selectedTech?.id === 17 ? ' bg-light' : ''} ribbon3 !text-sm hover:bg-light hover:text-brownDark cursor-pointer`} onMouseEnter={() => { selected(17) }} onClick={() => { selected(17) }}>
              <div className="capitalize text-brownMedium  " ><p>API</p></div>
            </div>


          </div>
          {
            selectedTech && (
              <div className='w-[280px] mx-auto py-10 z-10 relative'>
                <div>
                  <CircularProgressbarWithChildren value={selectedTech?.rate} strokeWidth={5}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textColor: "white",
                      pathColor: "#A37A5F",
                      trailColor: "#0f0f0f"
                    })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <RadialSeparators
                      count={16}
                      style={{
                        background: "#000",
                        width: "5px",
                        // This needs to be equal to props.strokeWidth
                        height: `${5}%`
                      }}
                    />
                    <img className='aspect-square bg-light w-[60%] rounded-full object-fit-cover' src={selectedTech?.img} alt="doge" />

                  </CircularProgressbarWithChildren>
                  <div className='text-brownLight text-2xl  text-center uppercase pt-5'>
                    <strong>{selectedTech?.rate}%</strong> {selectedTech?.title}
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div >
    </div>
  )
}
export default Technologies;