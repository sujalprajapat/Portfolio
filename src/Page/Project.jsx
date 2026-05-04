import React from 'react'
const slideData = [
    {
        title: "Kalathiya infotech",
        button: "Visit",
        link: "https://kalathiyainfotech.com/"
    },
    {
        title: "Vs infotech",
        button: "Visit",
        link: "https://vsinfotech.ca/"
    },
];
const Project = () => {
    return (
        <div>
            {slideData?.map((item) => {
                return (
                    <div data-aos="fade-up" className='w-full h-[100vh] p-10 relative duration-200 transfrom-all'>
                        <iframe
                            title='website preview'
                            className="w-full h-full  cursor-none   "
                            src={item.link}
                            loading="lazy"
                        // sandbox="allow-scripts allow-same-origin allow-popups"
                        // referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/50 transition-all duration-1000" />
                        <article
                            className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out opacity-100 visible z-10">
                            <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative text-brownMedium">
                                {item.title}
                            </h2>
                            <div className="flex justify-center">
                                <a
                                    href={item.link}
                                    className="mt-6  px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                                    {item.button}
                                </a>
                            </div>
                        </article>
                    </div>
                )
            })}
            <div>

            </div>
        </div>
    )
}

export default Project
