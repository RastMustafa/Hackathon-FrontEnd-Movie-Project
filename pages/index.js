import Navbar from "../components/navbar/Navbar";
import TopMovieSection from "../components/homeHeroSection/TopMovieSection";
export default function Home() {
  return (
    <div className="flex justify-between  flex-col  bg-background w-full max-h-screen">
      <div className="">
        <TopMovieSection />
      </div>
      <div className="bg-background   ">
        <Navbar />
      </div>
    </div>
  );
}
