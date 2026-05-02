import React from 'react'
const slideData = [
    {
        title: "Mystic Mountains",
        button: "Explore Component",
        src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://kalathiyainfotech.com/"
    },
    {
        title: "Urban Dreams",
        button: "Explore Component",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://getstan.app/"
    },
    {
        title: "Neon Nights",
        button: "Explore Component",
        src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://yoyoai.ca/"
    },
    {
        title: "Desert Whispers",
        button: "Explore Component",
        src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://kalathiyainfotech.com/"
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
