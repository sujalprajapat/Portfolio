import kalathiya from '../../Asset/kalathiya.png'
import MagicBento from '../../ExternalComponent/MagicBento'

function Experience() {
    const cardData = [
        {
            img: kalathiya,
            duration: "JUL - 2024 to Present",
            title: "Kalathita infotech",
            designation: "jr. React js developer",
            color: '#A37A5F',
            description: `
                        As a Junior React.js Developer, I contributed to the
                        development of multiple full-stack web applications
                        in a collaborative team environment. I was actively
                        involved in both frontend and backend development
                        depending on the project needs, primarily focusing
                        on React.js while also contributing to Node.js,
                        MongoDB, and PHP-based backends`,
            linkedin: "https://www.linkedin.com/company/kalathiyainfotech/posts/?feedView=all",
            web: "https://kalathiyainfotech.com/",
            phone: "+91 93288 81036",
            mail: "info@kalathiyainfotech.com"
        },
    ];
    return (
        <div className='container  mb-10 mx-auto  relative md:p-16 xs:p-8 p-6'>
            <h1 data-aos="fade-up" className='  duration-200 transfrom-all xl:text-6xl md:text-5xl text-4xl font-bold uppercase text-center  text-brownLight sm:my-10 my-6'>Experience</h1>
            <MagicBento
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect
                spotlightRadius={400}
                particleCount={12}
                glowColor="163, 122, 95"
                disableAnimations={false}
                cardData={cardData}
            />
        </div>
    )
}
export default Experience;