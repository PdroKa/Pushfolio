import Image from "next/image";
import { Hero } from "./components/ladingPage/Hero";
import { Header } from "./components/ladingPage/header";
import { VideoExplanation } from "./components/ladingPage/video-explanation";
import { Princing } from "./components/ladingPage/princing";
import { FAQ } from "./components/ladingPage/faq";

export default function Home() {
  return (
    <div className="h-screen max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-8">
      <Header />
      <Hero />
      <VideoExplanation />
      <Princing />
      <FAQ/> 
      {/* 
      
      */}
    </div>
  );
}
