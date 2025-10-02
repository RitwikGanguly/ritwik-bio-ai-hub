import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

const Code = () => {
  const repositories = [
    {
      name: "Ask-Your-PDF",
      description: "RAG-driven PDF Q&A system with Llama 3.1 and Ollama embeddings. Eliminates LLM hallucination by restricting outputs to source documents.",
      language: "Python",
      topics: ["RAG", "LLM", "ChromaDB", "LangChain", "NLP"],
      url: "https://github.com/RitwikGanguly",
      demo: true,
    },
    {
      name: "TNBC-Subtype-Classification",
      description: "Triple Negative Breast Cancer subtyping using Knowledge Graph-based GNN with multi-omics integration and BayesLIME explainability.",
      language: "Python",
      topics: ["GNN", "Multi-omics", "Cancer Genomics", "PyTorch", "Explainable AI"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "Graph-Attentive-GAN",
      description: "Synthetic scRNA-seq generation using graph attention mechanisms for rare-cell aware data generation. B.Tech thesis project.",
      language: "Python",
      topics: ["GAN", "GAT", "scRNA-seq", "Single-cell", "Deep Learning"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "Bulk-RNA-Deconvolution",
      description: "End-to-end pipeline for bulk RNA-seq deconvolution with BayesPrism and InstaPrism. Includes automated visualization tools.",
      language: "R",
      topics: ["RNA-seq", "Deconvolution", "BayesPrism", "Bioinformatics"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "Tox21_Toxicity_Prediction",
      description: "Deep learning models for compound toxicity prediction using ChemBERTa embeddings. BioAI Hackathon 2025 project.",
      language: "Python",
      topics: ["ChemBERTa", "GNN", "Drug Discovery", "Tox21"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "Movie-Recommendation-System",
      description: "Content-based movie recommender using collaborative filtering and similarity metrics.",
      language: "Python",
      topics: ["Recommendation System", "ML", "Content-based Filtering"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "Laptop-Price-Prediction",
      description: "Laptop price prediction using RandomForest and word2vec embeddings. Deployed with Streamlit.",
      language: "Python",
      topics: ["ML", "RandomForest", "word2vec", "Streamlit"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "Healthcare-Chatbot",
      description: "NLP-based healthcare chatbot for symptom analysis and medical information retrieval.",
      language: "Python",
      topics: ["NLP", "Chatbot", "Healthcare", "Deep Learning"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "scRNA-Factor-Analysis-KG",
      description: "Factor analysis of single-cell data using knowledge graph based unsupervised approach for identifying cellular programs and regulatory patterns.",
      language: "Python",
      topics: ["Knowledge Graph", "scRNA-seq", "Unsupervised Learning", "Factor Analysis", "Neo4j"],
      url: "https://github.com/RitwikGanguly",
    },
    {
      name: "OffTarget-Motif-Prediction",
      description: "Off-target prediction of sequence motif using GNN based generative approach for CRISPR guide RNA design and safety assessment.",
      language: "Python",
      topics: ["GNN", "Generative Models", "CRISPR", "Sequence Motif", "Drug Discovery"],
      url: "https://github.com/RitwikGanguly",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Projects & Repositories</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Open-source projects and reproducible research implementations
              </p>
            </div>
            <Button size="lg" asChild>
              <a
                href="https://github.com/RitwikGanguly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>

        {/* Reproducibility Statement */}
        <section className="mb-12">
          <Card className="bg-accent border-accent-foreground/20 animate-fade-in">
            <CardHeader>
              <CardTitle>Commitment to Reproducibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/90">
              <p>
                All projects include detailed documentation and reproducible workflows. Key features:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li>Clear README with setup instructions and dependencies</li>
                <li>Environment files (requirements.txt, environment.yml, Dockerfile)</li>
                <li>Sample datasets or data generation scripts</li>
                <li>Expected runtime and computational requirements</li>
                <li>Jupyter notebooks for interactive exploration where applicable</li>
                <li>Links to papers, preprints, or technical reports</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Repository Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Featured Repositories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <Card
                key={repo.name}
                className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        {repo.name}
                      </CardTitle>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {repo.language}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3" />
                          <span>Open Source</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">
                    {repo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    {repo.demo && (
                      <Button size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "R", "SQL", "Shell"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-lg">ML & DL Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "TensorFlow", "PyG", "scikit-learn", "Keras"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Genomics & Biology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["scanpy", "BayesPrism", "scGPT", "GSEA", "Bioconductor"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="text-lg">LLM & RAG</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["LangChain", "Hugging Face", "ChromaDB", "Ollama", "Groq"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Databases & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Neo4j", "PostgreSQL", "MongoDB", "Docker", "Git"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Cloud & Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["GCP", "AWS", "Streamlit", "Jupyter", "Colab"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Code;
