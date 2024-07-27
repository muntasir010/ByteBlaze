import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'
const Home = () => {
    return (
        <div className="flex flex-col relative items-center justify-center min-h-[calc(100vh-116px)]">
           <Hero/>
           <img className="absolute w-full bottom-0" src={wave} alt="" />
        </div>
    );
};

export default Home;

// 103.109.56.115