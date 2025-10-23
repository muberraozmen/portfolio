import { Cat, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Description } from "@radix-ui/react-toast";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: [
        { date: "2019 – 2023", institution: "McGill University", program: "Electrical and Computer Engineering (PhD)", href: "https://www.mcgill.ca/", 
          summary: `
          - Thesis: Graph-Based Strategies for Classification with Diverse Label Information
          - McGill Engineering Doctoral Award (MEDA)
          - Teaching Assistant: ECSE 316 – Signals and Networks; ECSE 416 – Telecommunication Networks` 
        },
        { date: "2016 – 2017", institution: "University College London", program: "School of Management (MRes)", href: "https://www.ucl.ac.uk/",
          summary: `
          - Graduation Project: Evolution of Collaboration Networks in the Competitive Environment of Crowdsourcing Platforms
          - Funded by UCL studentship for postgraduate work`
        },
        { date: "2014 – 2016", institution: "Middle East Technical University", program: "Industrial Engineering (MSc)", href: "https://www.metu.edu.tr/", 
          summary: `
          - Thesis: Interactive Evolutionary Approaches to Multi-Objective Feature Selection in Machine Learning Problems
          - CGPA: 3.43/4 – METU Dean’s Honor list
          - Teaching Assistant: IE4903 Introduction to Data Mining, IE4909 Analysis and Optimization Methods In Finance, IE361
          - Stochastic Models in Operati`
        },
        { date: "2010 – 2014", institution: "Middle East Technical University", program: "Industrial Engineering (BSc)", href: "https://www.metu.edu.tr/",
          summary: `
          - Graduation Project: System Design Project for Is Bank on Cash Management System
          - CGPA: 3.54/4 – METU Dean’s High Honor list
          - Internships: 1. Turkey Is Bank (Sep - Oct, 2013) 2. Bosch (Jul - Sep, 2013) 3. ETI Production (Jul - Aug, 2012)`
         }
      ]
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: [
        { date: "Feb 2024 – Oct 2025", company: "Block", role: "Machine Learning Engineer", href: "https://block.xyz/" ,
        summary: `
        - Contributed to the development of a FEM framework and led fine-tuning for risk-related applications.
        - Provided advise to teams on applying Graph Neural Networks (GNNs) to edge- and node-classification problems in risk, guiding model design and training pipelines.
        - Designed recurrent transaction prediction models to generate embeddings of customer banking interactions.
        - Built an anomaly detection framework using customer location signals to identify risk-related irregularities.
        - Developed a GNN-based merchant recommendation framework that matches users with merchants to extend GRL impact beyond risk use cases.`
      },
        { date: "May 2023 – Dec 2023", company: "Block", role: "Applied Deep Learning Intern", href: "https://block.xyz/",
        summary: `
        - Formulated the problem of real-time transaction-based chargeback detection as a temporal graph link classification task, enabling novel approaches to fraud detection.
        - Developed a deep learning architecture for this task, resulting in a peer-reviewed research publication.`
        },
        { date: "Jan 2018 – Aug 2018", company: "Segmentify", role: "Data Scientist", href: "https://segmentify.com/", 
        summary: `Developed a practical customer segmentation framework that translated academic research into real-world applications of customer purchasing behavior and lifetime value estimation to support e-commerce retailers in boosting conversion rates.`
        }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg text-left">
              I’m Muberra, originally from Turkey, now based in Montréal, married to Jai and mom to Kitkat. Here, I share my personal thoughts, research findings and past projects.
            </p>
          </div>
        </div>

  {/* Render each section and its entries as separate cards, matching Posts max width */}
  <div className="flex flex-col gap-8 mb-12 max-w-6xl mx-auto">
    {highlights.map((section, sIndex) => (
      <div key={sIndex} className="space-y-4">
        <div className="flex items-center gap-3">
          <section.icon className="w-8 h-8 text-primary" />
          <h3 className="text-xl font-semibold">{section.title}</h3>
        </div>

        <div className="flex flex-col gap-4">
          {section.description.map((entry: any, i: number) => (
            <Card
              key={i}
              className="border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(sIndex + i) * 0.05}s` }}
            >
              <CardContent className="pt-4">
                <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4 items-start">
                  <span className="text-foreground/70 tabular-nums">{entry.date}</span>
                  <div>
                    {(entry.institution || entry.company) && (
                      <>
                        <a
                          href={entry.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:underline inline"
                        >
                          {entry.institution || entry.company}
                        </a>
                        {(entry.program || entry.role) && (
                          <>
                            <span className="mx-2 text-foreground/60">—</span>
                            <span className="inline">{entry.program || entry.role}</span>
                          </>
                        )}
                      </>
                    )}

                    {entry.summary && (
                      <div className="text-foreground/80 mt-2 space-y-1">
                        {(Array.isArray(entry.summary) ? entry.summary : entry.summary.split(/\s*>\s*|\n/))
                          .filter(Boolean)
                          .map((line: string, idx: number) => (
                            <div key={idx}>{line.trim()}</div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    ))}
  </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-foreground/80 text-lg leading-relaxed">
              {/* TODO */}
              Combining a PhD from McGill with hands-on industry experience at Block, I bring deep expertise in Graph Representation Learning (GRL) and Foundational Event Modelling (FEM). On a personal level, I’m interested in understanding the latent behaviors of agentic AI. I value translating research culture into clean and impactful machine learning applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
