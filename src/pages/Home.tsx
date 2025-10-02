import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const Home = () => {
  const featuredProjects = [{
    title: "TNBC Subtype Classification",
    description: "Multi-omics integration using Knowledge Graph-based GNN for Triple Negative Breast Cancer subtyping. Implemented dual-view GNN with conditional VAE and BayesLIME explainability.",
    tags: ["GNN", "Multi-omics", "Cancer Genomics", "PyTorch", "VAE"],
    githubUrl: "https://github.com/RitwikGanguly"
  }, {
    title: "Graph-Attentive GAN for scRNA-seq",
    description: "Synthetic single-cell RNA-seq generation with graph attention mechanisms for rare-cell aware data generation. Achieved high ARI, NMI, and macro-F1 scores.",
    tags: ["GAN", "GAT", "scRNA-seq", "Single-cell", "Deep Learning"],
    githubUrl: "https://github.com/RitwikGanguly"
  }, {
    title: "Ask Your PDF",
    description: "RAG-driven PDF Q&A system using open-source Llama 3.1 models and Ollama embeddings. Restricts model outputs to source documents, eliminating hallucination.",
    tags: ["RAG", "LLM", "LangChain", "ChromaDB", "NLP"],
    githubUrl: "https://github.com/RitwikGanguly",
    demoUrl: "#"
  }];
  return <div>
      <Hero />

      {/* Featured Research Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Research</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Selected projects in computational biology, graph neural networks, and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => <div key={project.title} className="animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <ProjectCard {...project} />
              </div>)}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="/research">
                View All Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <h3 className="font-semibold mb-2">Research Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Spanning single-cell genomics, GNNs, and AI for biology
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <h3 className="font-semibold mb-2">Publications</h3>
                <p className="text-sm text-muted-foreground">
                  First author papers in computational biology and ML
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">9.18</div>
                <h3 className="font-semibold mb-2">Academic Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  GPA in B.Tech Computer Science & Engineering
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Seeking PhD Opportunities
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Looking for PhD positions in computational genomics, AI for biology, and multi-omics integration.
            Open to collaborations in graph-based learning and generative models.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;