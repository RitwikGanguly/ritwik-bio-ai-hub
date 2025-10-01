import ProjectCard from "@/components/ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Research = () => {
  const researchProjects = [
    {
      title: "TNBC Subtype Classification using KG + GNN",
      description:
        "Multi-omics integration (microarray, RNA-seq, methylation, CNV) for Triple Negative Breast Cancer subtyping using Knowledge Graph-based dual-view GNN. Implemented conditional VAE and BayesLIME explainability for interpretable predictions.",
      tags: ["GNN", "Multi-omics", "Cancer Genomics", "Knowledge Graph", "PyTorch", "VAE", "Explainable AI"],
      githubUrl: "https://github.com/RitwikGanguly",
    },
    {
      title: "Graph-Attentive GAN for scRNA-seq Generation",
      description:
        "Novel architecture combining Graph Attention Networks (GAT) with GAN for rare-cell aware single-cell RNA-seq data generation. Achieved high evaluation metrics (ARI, NMI, macro-F1) on benchmark datasets. First author preprint (2025).",
      tags: ["GAN", "GAT", "scRNA-seq", "Single-cell", "Deep Learning", "Rare Cell"],
      githubUrl: "https://github.com/RitwikGanguly",
    },
    {
      title: "Bayesian Explainability for Anomaly Detection",
      description:
        "LSTM autoencoder with BayesLIME for explainable anomaly detection in medical time series. Achieved 98% anomaly detection accuracy on MIMIC-III validation dataset.",
      tags: ["LSTM", "BayesLIME", "Anomaly Detection", "MIMIC-III", "Healthcare"],
      githubUrl: "https://github.com/RitwikGanguly",
    },
    {
      title: "Ask Your PDF - RAG System",
      description:
        "Retrieval Augmented Generation system using open-source Llama 3.1 and Ollama embeddings for PDF question answering. Eliminates LLM hallucination by restricting outputs to source documents. Deployed with ChromaDB vector database.",
      tags: ["RAG", "LLM", "LangChain", "ChromaDB", "Llama", "NLP"],
      githubUrl: "https://github.com/RitwikGanguly",
      demoUrl: "#",
    },
    {
      title: "Bulk RNA Deconvolution Pipeline",
      description:
        "End-to-end pipeline for bulk RNA-seq deconvolution using single-cell reference matrices. Implemented BayesPrism and InstaPrism methods with automated visualization (cluster maps, heatmaps) for cell-type specific analysis.",
      tags: ["RNA-seq", "Deconvolution", "BayesPrism", "Single-cell", "R", "Bioinformatics"],
      githubUrl: "https://github.com/RitwikGanguly",
    },
    {
      title: "Compound Toxicity Prediction with ChemBERTa",
      description:
        "Deep learning approach for predicting compound toxicity using pre-trained ChemBERTa molecular embeddings. Built MLP and GNN models with hyperparameter optimization. Unified diverse Tox21 assay results with curve-fitting for toxicity classification. BioAI Hackathon 2025 - BioHackrXiv preprint.",
      tags: ["ChemBERTa", "GNN", "Tox21", "Drug Discovery", "Deep Learning"],
      githubUrl: "https://github.com/RitwikGanguly",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Research & Publications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Exploring computational biology through graph neural networks, generative models, and interpretable AI
          </p>
        </div>

        {/* PhD Goals */}
        <section className="mb-16">
          <Card className="bg-accent border-accent-foreground/20 animate-fade-in">
            <CardHeader>
              <CardTitle>Seeking PhD Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/90">
              <p>
                I am actively seeking PhD positions in computational genomics and AI for biology. My research interests include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Multi-omics integration for cancer subtyping and mechanistic inference</li>
                <li>Knowledge Graph + GNN models for biological knowledge discovery</li>
                <li>Generative models for single-cell and spatial transcriptomics data</li>
                <li>RAG + LLM systems for structured biomedical knowledge retrieval</li>
                <li>Interpretable and explainable AI methods for biological systems</li>
              </ul>
              <div className="pt-4">
                <Button asChild>
                  <a href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact for Collaboration
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Featured Research Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Publications & Preprints</h2>
          <Card className="animate-fade-in">
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  A Graph-Attentive GAN for Rare-Cell–Aware single-cell RNA-seq Data Generation
                </h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Ritwik Ganguly</strong>, Sumanta Ray, Sk. Md. Mosaddek Hossain
                </p>
                <p className="text-sm text-muted-foreground">First author • 2025 • Preprint</p>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      bioRxiv / Preprint
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/RitwikGanguly" target="_blank" rel="noopener noreferrer">
                      Code & Data
                    </a>
                  </Button>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <h3 className="font-semibold text-lg">
                  Predicting Compound Toxicity using Deep Learning with Pre-trained Molecular Embeddings
                </h3>
                <p className="text-sm text-muted-foreground">
                  University of Warsaw BioAI Hackathon 2025
                </p>
                <p className="text-sm text-muted-foreground">Co-author • 2025 • BioHackrXiv</p>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      BioHackrXiv Link
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reproducibility Note */}
        <section className="mt-12">
          <Card className="bg-muted animate-fade-in">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-3">Code & Reproducibility</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                All projects include detailed documentation, clean code, and reproducible pipelines.
                For reproduction instructions, datasets, and requirements, please visit the GitHub
                repositories or contact me directly. I'm committed to making research accessible and
                reproducible for the broader scientific community.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Research;
