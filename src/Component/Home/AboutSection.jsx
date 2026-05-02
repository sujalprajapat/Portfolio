import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import img6 from '../../Asset/person5.jpg'
function AboutSection() {
  const navigate = useNavigate()
  return (
    <div className='container sp_about mb-10 mx-auto'>
      <h1 data-aos="fade-up" className='xl:text-6xl md:text-5xl text-4xl font-bold uppercase text-center duration-200 transfrom-all  text-brownLight sm:my-10 my-6'>my self</h1>
      <div data-aos="fade-up" className='w-full m-auto md:px-12 px-4  duration-200 transfrom-all '>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation]}
          className='bg-dark1 mySwiper shadow-2xl shadow-dark1 h-[650px] md:h-auto sm:h-auto'
        >
          <SwiperSlide className='h-[100%]    bg-dark1 '>
            <div className="flex md:flex-row flex-col justify-center md:p-10 p-5  items-center h-[100%]" >
              <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center font-bold mb-6 text-brownLight  md:hidden order-1">Introduction</h1>
              <div className="w-full order-3 md:order-2 md:ps-3">
                <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center font-bold mb-6 text-brownLight   md:block hidden">Introduction</h1>
                <p className='text-brownMedium md:text-base text-sm'>
                  My name is Sujal Prajapat, and I am a Full-Stack Web Developer
                  specializing in React.js and Node.js. I have experience in
                  designing and developing scalable, user-centric applications
                  with a focus on clean code and performance. I am passionate
                  about continuous learning, problem-solving, and contributing to
                  innovative projects. My goal is to leverage my skills to deliver
                  high-quality solutions that create real impact.
                </p>
              </div>
              <div className="w-full relative group order-2 md:order-3">
                <img
                  src={img6}
                  alt="Decorated"
                  className="md:w-80 md:h-80 w-72 h-72 object-cover  md:ms-auto md:mx-0 mx-auto border-4  border-brownDark transition-all duration-500 blob shadow-inner"
                />
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide className='h-[100%] bg-dark1'>
            <div className="flex md:flex-row flex-col justify-center md:p-10 p-5  items-center h-[100%]   ">
              <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center  font-bold mb-6 text-brownLight  md:hidden order-1">Qualification</h1>
              <div className="w-full order-3 md:order-2 md:ps-3">
                <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center  font-bold mb-6 text-brownLight  md:block hidden">Qualification</h1>
                <div className='text-brownMedium'>
                  <b>Bachelar of computer application (BCA)</b>
                  <ul className='text-sm'>
                    <li>Saurashtra university , Rajkot</li>
                    <li>~ 2022-2025</li>
                    <li>~ 7.4 cgpa</li>
                  </ul>
                </div>
                <button className='border border-brownDark px-4 py-1 rounded-sm my-4  text-brownMedium hover:text-light sp_btn' onClick={() => navigate('about')}>
                  Know More ...
                </button>
              </div>
              <div className="w-full relative group order-2 md:order-3">
                <img
                  src={img6}
                  alt="Decorated"
                  className="md:w-80 md:h-80 w-72 h-72 object-cover  md:ms-auto md:mx-0 mx-auto border-4  border-brownDark transition-all duration-500 blob shadow-inner"

                />
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide className='h-[100%]   bg-dark1'>
            <div className="flex md:flex-row flex-col justify-center md:p-10 p-5  items-center h-[100%]    ">
              <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center font-bold mb-6 text-brownLight  md:hidden order-1">Experience</h1>
              <div className="w-full order-3 md:order-2 md:ps-3">
                <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center font-bold mb-6 text-brownLight  md:block hidden">Experience</h1>
                <div className='text-brownMedium'>
                  <b>Full Stack Developer </b>
                  <ul className='text-sm'>
                    <li>kalathiya infotech</li>
                    <li>jun 2024 - present</li>
                    <li>Created multiple full-stack apps using MERN stack</li>
                  </ul>
                </div>
                <button className='border border-brownDark px-4 py-1 rounded-sm my-4 text-brownMedium hover:text-light sp_btn' onClick={() => navigate('about')}>
                  Know More ...
                </button>
              </div>
              <div className="w-full relative group order-2 md:order-3 ">
                <img
                  src={img6}
                  alt="Decorated"
                  className="md:w-80 md:h-80 w-72 h-72 object-cover  md:ms-auto md:mx-0 mx-auto border-4  border-brownDark transition-all duration-500 blob shadow-inner"
                />
              </div>
            </div>

          </SwiperSlide>

          
          <SwiperSlide className='h-[100%]   bg-dark1'>
            <div className="flex md:flex-row flex-col justify-center md:p-10 p-5  items-center h-[100%]   ">
              <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center  font-bold mb-6 text-brownLight  md:hidden order-1">More info</h1>
              <div className="w-full order-3 md:order-2 md:ps-3">
                <h1 className="xl:text-4xl md:text-3xl text-2xl md:text-start text-center  font-bold mb-6 text-brownLight   md:block hidden">More info</h1>
                <p className='text-brownMedium mb-3 '>
                  Full Stack Web Developer — React.js | Node.js | Express | MongoDB | SQL
                </p>
                <p className='text-brownMedium text-sm mb-3 '>~ Full Stack Developer with experience building responsive web applications using React on the frontend and Node/Express on the backend. Strong fundamentals in REST APIs, authentication, state management, and deployment. Passionate about clean UI, performance, and developer experience</p>
                <p className='text-brownMedium text-sm mb-4'>Download resume from here ...</p>

                <a href="/Sujal_Prajapat_Resume.pdf"
                  download className='border border-brownDark px-4 py-1 rounded-sm my-4 text-brwonMedium text-brownMedium hover:text-light sp_btn'>
                  Download ...
                </a>
              </div>
              <div className="w-full relative group order-2 md:order-3">
                <img
                  src={img6}
                  alt="Decorated"
                  className="md:w-80 md:h-80 w-72 h-72 object-cover  md:ms-auto md:mx-0 mx-auto border-4  border-brownDark transition-all duration-500 blob shadow-inner"
                />
              </div>

            </div>

          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default AboutSection
