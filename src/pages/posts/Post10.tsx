import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeholderImage from "@/assets/hero-bg.jpg";

const Post10 = () => {
  return (
    <div className="min-h-screen">
      
      <article className="container mx-auto px-6 py-20 max-w-4xl">
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reflections on Superintelligence and the State of AI
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Notes after reviewing “Scientist AI: Towards a Systematic Understanding of Agentic Artificial Intelligence” (arXiv:2502.15657)
          </p>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <a href="https://arxiv.org/abs/2502.15657" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Paper
              </a>
            </Button>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <img 
              src={placeholderImage} 
              alt="Reflections on Superintelligence" 
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
            />
            <p className="text-muted-foreground mb-4">
              After reviewing the *Scientist AI* paper, I reflected on how current frontier models compare to the theoretical idea of Artificial Superintelligence (ASI), and what ingredients might still be missing to reach it. The discussion also touches on the potential risks and readiness of society in managing the evolution of AI capabilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Defining Superintelligence</h2>
            <p className="text-muted-foreground mb-4">
              Artificial Superintelligence (ASI) represents AI systems whose reasoning and problem-solving capabilities exceed those of humans across all domains. Unlike Artificial General Intelligence (AGI), which would perform human-level reasoning across diverse tasks, ASI would surpass humans by scaling these capabilities indefinitely. 
            </p>
            <p className="text-muted-foreground mb-4">
              Given AI’s advantages — continuous operation, lower dependence on natural resources, absence of lifespan, and strict rationality — the gap between AGI and ASI may be far shorter than often projected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Current Frontier Models</h2>
            <p className="text-muted-foreground mb-4">
              The evolution of AI models has been astonishing. From the mysterious power of early deep learning to the emergence of transformers and graph neural networks, the pace of innovation has been rapid. 
              Large language models, originally trained for next-token prediction, now communicate with humans across a wide range of contexts — proving the unexpected power of scale and data abundance.
            </p>
            <p className="text-muted-foreground mb-4">
              Yet, the focus on expanding capabilities continues to outpace investments in safety, interpretability, and alignment. The speed of progress is impressive, but it raises the question: are we developing faster than we can govern?
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Missing Ingredients</h2>
            <p className="text-muted-foreground mb-4">
              Current AI models excel at recognizing patterns but fall short on causal reasoning and knowledge transfer across domains. They imitate rather than discover. They don’t form hypotheses or exhibit intrinsic motivation to understand the world.
            </p>
            <p className="text-muted-foreground mb-4">
              These limitations are rooted in how we train models — through fixed reward functions that optimize imitation or next-token prediction. The emergence of causal understanding and autonomous curiosity remains an unsolved challenge, though rapid progress suggests we may not be far from partial breakthroughs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Potential Harms</h2>
            <p className="text-muted-foreground mb-4">
              The accessibility of AI tools has changed how people learn and work. Overreliance on generative models risks weakening critical thinking and creativity, especially in education. Meanwhile, widespread AI-assisted coding raises concerns about transparency — engineers may soon deploy systems they no longer fully understand.
            </p>
            <p className="text-muted-foreground mb-4">
              On a broader scale, the paper highlights that low-probability but high-severity events — such as autonomous self-preserving behavior — deserve serious consideration. The same rational efficiency that makes AI powerful could, under misaligned objectives, lead to harmful outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Alignment and Readiness</h2>
            <p className="text-muted-foreground mb-4">
              Today’s alignment strategies, such as reinforcement learning from human feedback, are important but incomplete. They rely on imperfect human demonstrations and may encourage deception if “pleasing the user” becomes the main objective. Goal misspecification and reward hacking remain unresolved risks — and these will only amplify with more capable systems.
            </p>
            <p className="text-muted-foreground mb-4">
              A shift toward interpretability, causal understanding, and cross-disciplinary oversight will be necessary. Without these, future models could develop objectives misaligned with human values, even if unintentionally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-muted-foreground">
              It’s tempting to view AI risk discussions as speculative, but when the potential severity is existential, even small probabilities matter. I believe progress should continue — but paired with deliberate efforts to measure, constrain, and understand. 
              Humanity has repeatedly shown the ability to correct its course when aware of its limits. The same awareness will determine how safely we navigate the road to superintelligence.
            </p>
          </section>
        </div>
      </article>

    </div>
  );
};

export default Post10;
