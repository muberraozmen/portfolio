import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative bg-gray-100 py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <img
          src={profilePhoto}
          alt="Profile photo"
          className="mx-auto mb-6 h-40 w-40 md:h-52 md:w-52 rounded-full object-cover ring-4 ring-primary/60 shadow-xl"
          loading="eager"
          decoding="async"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Muberra</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Machine Learning Researcher
        </p>
        <div className="flex gap-4 justify-center">       
          <Button 
            size="lg" 
            onClick={() => scrollToSection('posts')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          >
            View my work
          </Button>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          >
            Get in touch
          </Button>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
