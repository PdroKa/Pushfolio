import Image from "next/image";
import { Hero } from "./components/ladingPage/Hero";

export default function Home() {
  return (
    <h1 className="h-screen max-w-7xl mx-auto">
      <Hero />
      {/* <Header />
      <VideoExplanation />
      <Princing />
      <FAQ/> */}
    </h1>
  );
}
