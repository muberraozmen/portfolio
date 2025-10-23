import Hero from "@/components/Hero";
import About from "@/components/About";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Posts />
      <Contact />
    </div>
  );
};

export default Index;
