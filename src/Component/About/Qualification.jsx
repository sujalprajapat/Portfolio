import arihant from '../../Asset/arihant.jpg'
import saurashtra from '../../Asset/saurashtra.jpg'
import arrow1 from '../../Asset/arrow1.png'
import ElectroBorder from '../../ExternalComponent/Electro-border'
import { InteractiveCard } from '../../ExternalComponent/Interactive-card'
function Qualification() {
    return (
        <div className='container  mb-10 mx-auto  relative md:p-16 xs:p-8 p-6'>
            <h1 className='xl:text-6xl md:text-5xl text-4xl font-bold uppercase text-center  text-brownLight sm:my-10 my-6'>Education journey</h1>
            <div>
                <img src={arrow1} alt='' className='h-[250px] aspect-video object-cover rotate-[-180deg] m-auto hidden md:block'/>
                <div >
                    <InteractiveCard
                        InteractiveColor=""
                        tailwindBgClass=""
                        className="text-white text-center p-4  flex items-center justify-center font-semibold text-lg cursor-pointer"
                    >
                        <ElectroBorder
                            borderColor="#A37A5F"
                            borderWidth={3}
                            distortion={1.8}
                            // animationSpeed={1.5}
                            // glowBlur={10}
                            // glow
                            // aura
                            className=" p-4  my-10   "
                        >
                            <div className='items-center gap-3 md:flex'>
                                <img src={saurashtra} alt="saurashtra university" className='m-auto mb-4 h-[200px] aspect-square rounded-lg'></img>
                                <div className='text-[#A37A5F]'>
                                    <b className='text-lg'>Bachelar of computer application (BCA)</b>
                                    <ul className='text-sm'>
                                        <li>Saurashtra university , Rajkot</li>
                                        <li>~ 2022-2025</li>
                                        <li>~ 7.6 cgpa</li>
                                    </ul>
                                </div>
                            </div>
                        </ElectroBorder>
                    </InteractiveCard>
                </div>


                <img src={arrow1} alt='' className='h-[250px] aspect-video object-cover [transform:rotateX(180deg)_rotateY(0deg)_rotate(-35deg)] hidden md:block'></img>
                <div className='flex justify-center'>
                    <InteractiveCard
                        InteractiveColor=""
                        tailwindBgClass=""
                        className="text-white text-center p-4  m-auto   flex items-center justify-center font-semibold text-lg cursor-pointer"
                    >
                        <ElectroBorder
                            borderColor="#A37A5F"
                            borderWidth={3}
                            distortion={1.8}
                            // animationSpeed={1.5}
                            // glowBlur={10}
                            // glow
                            // aura
                            className=" p-4  my-10   "
                        >
                            <div className='items-center gap-3 md:flex'>
                                <img src={arihant} alt="arihant academy" className='m-auto mb-4 h-[200px] aspect-square rounded-lg'></img>
                                <div className='text-[#A37A5F]'>
                                    <b className='text-lg'>Higher Secondary Certificate (HSC)</b>
                                    <ul className='text-sm'>
                                        <li>Arihant Academy , Surat</li>
                                        <li>~ 2021-2022</li>
                                        <li>~ 72 %</li>
                                    </ul>
                                </div>
                            </div>
                        </ElectroBorder>
                    </InteractiveCard>
                </div>


                <img src={arrow1} alt='' className='h-[250px] aspect-video object-cover [transform:rotateX(180deg)_rotateY(180deg)_rotate(-35deg)] ms-auto hidden md:block'></img>
                <div className='flex justify-center'>
                    <InteractiveCard
                        InteractiveColor=""
                        tailwindBgClass=""
                        className="text-white text-center p-4  m-auto   flex items-center justify-center font-semibold text-lg cursor-pointer"
                    >
                        <ElectroBorder
                            borderColor="#A37A5F"
                            borderWidth={3}
                            distortion={1.8}
                            // animationSpeed={1.5}
                            // glowBlur={10}
                            // glow
                            // aura
                            className=" p-4  my-10   "
                        >
                            <div className='items-center gap-3 md:flex'>
                                <img src={arihant} alt="arihant academy" className='m-auto mb-4 h-[200px] aspect-square rounded-lg'></img>
                                <div className='text-brownMedium'>
                                    <b className='text-lg'> Secondary School Certificate (SSC)</b>
                                    <ul className='text-sm'>
                                        <li>Arihant Academy , Surat</li>
                                        <li>~ 2019-2020</li>
                                        <li>~ 64 %</li>
                                    </ul>
                                </div>
                            </div>
                        </ElectroBorder>
                    </InteractiveCard>
                </div>


                <div className="text text-[180px]  2xl:right-28 right-10 absolute top-[20%] [writing-mode:vertical-rl] z-[-1] opacity-80 hidden md:block" >
                    Sujal
                    Prajapat
                </div>
            </div>
        </div>
    )
}
export default Qualification