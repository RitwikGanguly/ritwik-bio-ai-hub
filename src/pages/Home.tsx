import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const Home = () => {
  const featuredProjects = [{
    title: "GARAGE: A Graph-Attentive RAre-cell aware single-cell RNA-seq Data GEneration",
    description: "First author publication combining Graph Attention Networks with GANs to generate synthetic single-cell RNA-seq data with special attention to rare cell populations.",
    tags: ["GAN", "GAT", "scRNA-seq", "Single-cell", "Deep Learning"],
    githubUrl: "https://github.com/RitwikGanguly"
  }, {
    title: "QNAKG: Question-Answering of Bio-Medicle Knowledge Graph using RAG-enabled Large Language Model",
    description: "RAG-driven biomedical knowledge graph Q&A system leveraging large language models for accurate medical information retrieval.",
    tags: ["RAG", "LLM", "Knowledge Graph", "BioMedicine", "NLP"],
    githubUrl: "https://github.com/RitwikGanguly"
  }, {
    title: "BayesX-MED: Bayesian Explainability for Real-Time Anomaly Detection in Medical Diagnostics",
    description: "LSTM autoencoder with BayesLIME for interpretable anomaly detection in MIMIC-III time series medical data.",
    tags: ["LSTM", "Bayesian", "Explainable AI", "Medical", "Anomaly Detection"],
    githubUrl: "https://github.com/RitwikGanguly"
  }, {
    title: "Triple-negative Breast Cancer (TNBC) SubType Classification using KG-based Duel-view GNN Approach",
    description: "Multi-omics integration using Knowledge Graph-based GNN for Triple Negative Breast Cancer subtyping with dual-view architecture.",
    tags: ["GNN", "Multi-omics", "Cancer Genomics", "Knowledge Graph", "PyTorch"],
    githubUrl: "https://github.com/RitwikGanguly"
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

          <div className="grid md:grid-cols-2 gap-6 mb-8">
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

      {/* Publications Highlights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Publications & Achievements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Research contributions in computational biology and machine learning
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <h3 className="font-semibold mb-2">Publications</h3>
                <p className="text-sm text-muted-foreground">
                  First author papers in computational biology and ML
                </p>
              </CardContent>
            </Card>

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
                <div className="text-4xl font-bold text-primary mb-2">9.18</div>
                <h3 className="font-semibold mb-2">Academic Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  GPA in B.Tech Computer Science & Engineering
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Featured Publications */}
          <div className="space-y-4">
            <Card className="hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      A Graph-Attentive GAN for Rare-Cell–Aware single-cell RNA-seq Data Generation
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">First author</span> • Pre-print available on bioRxiv
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Mechanism-aware inference of response to targeted cancer therapies
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Co-author</span> • Pre-print available on bioRxiv
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      All for Computational Biology: Highlights from the first BioAI Hackathon at University of Warsaw
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Co-author</span> • Selected at BioAI Hackathon 2025 • bioHackrXiv
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <a href="/publications">
                View All Publications
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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