import { Cat, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: [
        { date: "2019 – 2023", institution: "McGill University", program: "Electrical and Computer Engineering (PhD)", href: "https://www.mcgill.ca/" },
        { date: "2016 – 2017", institution: "University College London", program: "School of Management (MRes)", href: "https://www.ucl.ac.uk/" },
        { date: "2014 – 2016", institution: "Middle East Technical University", program: "Industrial Engineering (MSc)", href: "https://www.metu.edu.tr/" },
        { date: "2010 – 2014", institution: "Middle East Technical University", program: "Industrial Engineering (BSc)", href: "https://www.metu.edu.tr/" }
      ]
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: [
        { date: "Feb 2024 – Oct 2025", company: "Block", role: "Machine Learning Engineer", href: "https://block.xyz/" },
        { date: "May 2023 – Dec 2023", company: "Block", role: "Applied Deep Learning Intern", href: "https://block.xyz/" },
        { date: "Jan 2018 – Aug 2018", company: "Segmentify", role: "Data Scientist", href: "https://segmentify.com/" }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I’m Muberra, originally from Turkey, now based in Montréal, married to Jai and mom to Kitkat. Here, I share my personal thoughts, research findings and past projects.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {Array.isArray(item.description) ? (
                  <div className="text-muted-foreground space-y-2">
                    {item.description.map((entry: any, i: number) => (
                      <div key={i} className="grid grid-cols-[180px_1fr] gap-4 items-start">
                        <span className="text-foreground/70 tabular-nums">{entry.date}</span>
                        <div>
                          {entry.institution && (
                            <a
                              href={entry.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:underline"
                            >
                              {entry.institution}
                            </a>
                          )}
                          {entry.company && (
                            <a
                              href={entry.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:underline"
                            >
                              {entry.company}
                            </a>
                          )}
                          {entry.program && (
                            <div className="text-foreground/80">{entry.program}</div>
                          )}
                          {entry.role && (
                            <div className="text-foreground/80">{entry.role}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">{item.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-foreground/80 text-lg leading-relaxed">
            {/* TODO */}
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
