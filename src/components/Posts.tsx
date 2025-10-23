import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    // {
    //   title: "I am worried about ASI.",
    //   description: "My reflections reading Scientist AI paper.",
    //   tag: ["Literature Review", "Large Language Models", "AI Safety"],
    //   link: "/posts/Post10"
    // },
    {
      title: "Understanding the Design Principles of Link Prediction in Directed Settings",
      description: "",
      tag: ["Graph Representation Learning", "Financial Networks"],
      link: "https://dl.acm.org/doi/abs/10.1145/3701716.3717803"
    },
    {
      title: "Benchmarking Edge Regression on Temporal Networks",
      description: "",
      tag: ["Temporal Graph Learning", "Financial Networks"],
      link: "https://ai.cash.app/temporal-edge-regression"
    },
    {
      title: "Recent Link Classification on Temporal Graphs Using Graph Profiler",
      description: "",
      tag: ["Temporal Graph Learning", "Financial Networks"],
      link: "https://ai.cash.app/recent-link-classification"
    },
    {
      title: "Substituting Data Annotation with Balanced Neighbourhoods and Collective Loss in Multi-label Text Classification",
      description: "",
      tag: ["Multi-label Classification", "Applied Graph Learning", "Natural Language Inference", "Zero-Shot Learning"],
      link: "https://networks.lab.mcgill.ca/docs/projects/current_projects/project003"
    },
    // {
    //   title: "Extreme Multi-label Text Classification",
    //   description: "",
    //   tag: ["Literature Review", "Multi-label Classification", "Graph Theory"],
    //   link: ""
    // },
    {
      title: "Multi-relation Message Passing (MrMP), for the Multi-label Classification Problem",
      description: "",
      tag: ["Multi-label Classification", "Applied Graph Learning"],
      link: "https://networks.lab.mcgill.ca/docs/projects/current_projects/project002"
    },
    {
      title: "Data Analysis Methods for Hardware Debugging",
      description: "",
      tag: ["Statistical Analysis", "Breast Cancer Detection"],
      link: "https://ieeexplore.ieee.org/document/9385019"
    },
    // {
    //   title: "Formation and Repetition of Collaboration Ties in Crowdsourcing - The Role of Competition",
    //   description: "",
    //   tag: ["Statistical Analysis", "Social Network Theory"],
    //   link: ""
    // },    
    {
      title: "Interactive Evolutionary Approaches to Multi-objective Feature Selection",
      description: "",
      tag: ["Traditional Machine Learning", "Optimization Theory"],
      link: "https://www.academia.edu/download/71487430/itor.pdf"
    },
  ];

  return (
    <section id="posts" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Posts</span> 
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tag.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  size="sm" 
                  className="w-32"
                  asChild
                >
                  <Link to={post.link}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
