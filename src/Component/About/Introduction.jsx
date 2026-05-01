import img3 from '../../Asset/person3.jpg'
import img5 from '../../Asset/person5.jpg'
function Introduction() {
    return (
        <div className='container   mx-auto overflow-hidden'>
            <h1 className='xl:text-6xl md:text-5xl text-4xl font-bold uppercase text-center  text-brownLight sm:my-10 my-6'>My self</h1>
            <div className='flex w-[80%] mx-auto overflow-hidden'>
                <div className="flex group flex-col sm:flex-row">
                    <img
                        className="object-cover h-[500px] w-[500px] relative z-10"
                        src={img5}
                        alt=""
                    />
                    <div>
                        <div className="bg-dark1  text-brownMedium p-4 my-3 lg:w-[60%] shadow-xl transform transition-transform duration-500 -translate-y-full group-hover:translate-y-0 sm:translate-y-0 sm:-translate-x-full sm:group-hover:translate-x-0">
                            I’m someone who enjoys building things on the web and turning ideas into real projects. I like learning new technologies, exploring different approaches, and improving my skills step by step.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-[80%] mx-auto overflow-hidden py-4'>
                <div className="flex group flex-col-reverse sm:flex-row">
                    <div className=''>
                        <div className="bg-dark1 ms-auto text-brownMedium p-4 my-3 lg:w-[60%] shadow-xl transform transition-transform duration-500 -translate-y-full group-hover:translate-y-0 sm:translate-y-0 sm:translate-x-full sm:group-hover:translate-x-0  ">
                            I also like working on projects that challenge me and help me think differently. For me, development is not just about code, but about creating something useful and meaningful.
                        </div>
                    </div>
                    <img
                        className="object-cover h-[500px] w-[500px] relative z-10"
                        src={img3}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
export default Introduction;