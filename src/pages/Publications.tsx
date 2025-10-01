import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "A Graph-Attentive GAN for Rare-Cell–Aware single-cell RNA-seq Data Generation",
      authors: "Ritwik Ganguly, Sumanta Ray, Sk. Md. Mosaddek Hossain",
      venue: "Preprint",
      year: "2025",
      type: "First Author",
      status: "Available on bioRxiv",
      abstract:
        "We present a novel generative model that combines Graph Attention Networks with GANs to generate synthetic single-cell RNA-seq data with special attention to rare cell populations. Our approach achieves high evaluation metrics (ARI, NMI, macro-F1) on benchmark datasets.",
      links: {
        paper: "#",
        code: "https://github.com/RitwikGanguly",
        data: "https://github.com/RitwikGanguly",
      },
    },
    {
      title: "Predicting Compound Toxicity using Deep Learning with Pre-trained Molecular Embeddings",
      authors: "University of Warsaw BioAI Hackathon Team (including Ritwik Ganguly)",
      venue: "BioHackrXiv",
      year: "2025",
      type: "Co-Author",
      status: "BioAI Hackathon 2025",
      abstract:
        "Leveraged ChemBERTa pre-trained embeddings to predict compound toxicity across multiple Tox21 assays. Built MLP and GNN models with hyperparameter optimization, achieving robust performance in toxicity classification through curve-fitting approaches.",
      links: {
        paper: "#",
      },
    },
  ];

  const manuscripts = [
    {
      title: "Knowledge Graph-based GNN for Triple Negative Breast Cancer Subtype Classification",
      status: "In Preparation",
      description:
        "Multi-omics integration approach using heterogeneous graph neural networks with BayesLIME explainability for TNBC subtyping.",
    },
    {
      title: "Bayesian Explainability Framework for Medical Anomaly Detection",
      status: "In Preparation",
      description:
        "LSTM autoencoder with BayesLIME for interpretable anomaly detection in MIMIC-III time series data.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Publications & Preprints</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Research contributions in computational biology, graph neural networks, and machine learning
          </p>
        </div>

        {/* Publication Stats */}
        <section className="mb-12 grid md:grid-cols-4 gap-4">
          <Card className="animate-fade-in">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Total Publications</div>
            </CardContent>
          </Card>
          <Card className="animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-sm text-muted-foreground">First Author</div>
            </CardContent>
          </Card>
          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-sm text-muted-foreground">In Preparation</div>
            </CardContent>
          </Card>
          <Card className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Open Projects</div>
            </CardContent>
          </Card>
        </section>

        {/* Published Papers */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Published & Preprints</h2>
            <Button variant="outline" asChild>
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Export BibTeX
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={pub.title}
                className="animate-slide-up hover:shadow-elegant transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{pub.type}</Badge>
                        <Badge variant="outline">{pub.year}</Badge>
                        <Badge variant="secondary">{pub.status}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                      <p className="text-sm font-medium text-foreground/80">{pub.venue}</p>
                    </div>
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.links.paper && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Read Paper
                        </a>
                      </Button>
                    )}
                    {pub.links.code && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.links.code} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {pub.links.data && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.links.data} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          Dataset
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Manuscripts in Preparation */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Manuscripts in Preparation</h2>
          <div className="space-y-4">
            {manuscripts.map((manuscript, index) => (
              <Card
                key={manuscript.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{manuscript.status}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{manuscript.title}</h3>
                      <p className="text-sm text-muted-foreground">{manuscript.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Citation Info */}
        <section className="mt-12">
          <Card className="bg-muted animate-fade-in">
            <CardHeader>
              <CardTitle>Citation Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/90">
              <p>
                For citations and BibTeX entries, please refer to the individual paper links or contact me directly.
                I maintain an up-to-date{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ORCiD profile
                </a>{" "}
                with all publication metadata.
              </p>
              <p className="pt-2">
                <strong>ORCiD:</strong>{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Profile
                </a>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Publications;
