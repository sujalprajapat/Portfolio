import RotatingText from "../ExternalComponent/RotatingText"

function WelcomeSection() {
    
    return (

        <div className="w-[100vw] h-[100vh]  2xl:text-[180px] lg:text-[120px] md:text-[80px] text-[60px] text-center">
            <RotatingText
                texts={['Hello !', 'Namaste !! ','Bonjour ..', 'Hola !']}
                mainClassName=" w-full px-2 sm:px-2 md:px-3 text-brownMedium overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center items-center h-full uppercase"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={1500}
            />
        </div>
    )
}
export default WelcomeSection