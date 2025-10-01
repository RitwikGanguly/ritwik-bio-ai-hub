import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Computational biologist bridging computer science and modern biology to make biological problems more tractable
          </p>
        </div>

        {/* Bio */}
        <section className="mb-16 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Academic Bio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                I am a computational biologist (M.Tech, IIIT-Delhi) working at the intersection of machine learning and genomics.
                My research focuses on developing graph-based neural network architectures and generative models to understand
                complex biological systems, particularly in cancer genomics and single-cell analysis.
              </p>
              <p>
                My work includes building graph-attentive GANs for synthetic scRNA-seq data generation, developing
                Knowledge Graph-based GNN models for cancer subtyping, and creating RAG-enabled LLM systems to extract
                and reason over biomedical knowledge. I am passionate about making computational tools reproducible and
                accessible to the broader research community.
              </p>
              <p>
                With a strong foundation in both computer science fundamentals and modern biology, I thrive on
                translating cutting-edge research in single-cell, spatial, and cancer genomics into computational
                technology that makes biological problems more tractable.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            <Card className="animate-slide-up">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">M.Tech in Computational Biology</h3>
                    <p className="text-muted-foreground">
                      Indraprastha Institute of Information Technology (IIIT Delhi)
                    </p>
                  </div>
                  <Badge variant="secondary">2024 - 2026</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">GPA: 8.75/10 (Pursuing)</p>
                <p className="text-sm">
                  <strong>Research Focus:</strong> Cancer Genomics, Knowledge Graph-based GNNs, Multi-omics Integration
                </p>
                <p className="text-sm mt-2">
                  <strong>Advisor:</strong> Dr. Debarka Sengupta (The Sengupta Lab)
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">B.Tech in Computer Science & Engineering</h3>
                    <p className="text-muted-foreground">Aliah University</p>
                  </div>
                  <Badge variant="secondary">2020 - 2024</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">GPA: 9.18/10</p>
                <p className="text-sm">
                  <strong>B.Tech Thesis:</strong> Graph-Attentive GAN for single-cell RNA-seq synthetic data generation
                </p>
                <p className="text-sm mt-2">
                  <strong>Advisors:</strong> Dr. Sumanta Ray, Dr. Sk. Md. Mosaddek Hossain
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Research Experience</h2>
          </div>

          <div className="space-y-6">
            <Card className="animate-slide-up">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Graduate Researcher</h3>
                    <p className="text-muted-foreground">The Sengupta Lab, IIIT Delhi</p>
                  </div>
                  <Badge>July 2024 - Present</Badge>
                </div>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• Working on Triple Negative Breast Cancer (TNBC) subtype identification using multi-omics data and KG-based GNN approaches</li>
                  <li>• Developed RAG-enabled LLM systems for biomedical knowledge extraction from large Knowledge Graphs (PrimeKG, EnrichR KG)</li>
                  <li>• Built "Ask Your PDF" - PDF summarizer with LLM, ChromaDB, and RAG system</li>
                  <li>• Working with heterogeneous graphs, particularly KG-oriented Steiner tree with GNN architecture in cancer genomics</li>
                  <li>• Experience with scRNA-seq preprocessing (scanpy), batch correction, and cell type annotation (scGPT, scANVI)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Undergraduate Researcher</h3>
                    <p className="text-muted-foreground">CSE Department, Aliah University</p>
                  </div>
                  <Badge variant="secondary">Aug 2023 - May 2024</Badge>
                </div>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• Developed novel Graph-Attentive GAN for synthetic scRNA-seq single-cell generation</li>
                  <li>• Worked on various GAN architectures including f-GAN, w-GAN, and VAE</li>
                  <li>• Gained foundational experience in single-cell genomics and computational biology</li>
                  <li>• Learned how computational techniques detect heterogeneity in biological data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Data Science Intern</h3>
                    <p className="text-muted-foreground">Innomatics Research Lab</p>
                  </div>
                  <Badge variant="secondary">Feb 2023 - May 2023</Badge>
                </div>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• Worked on large-scale data analysis, EDA techniques, and statistical modeling</li>
                  <li>• Built Laptop Price Recommender using RandomForest and word2vec, deployed with Streamlit</li>
                  <li>• Developed NLP projects: Fake News Detection and Spam Email Detection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Philosophy */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Research Philosophy</h2>
          </div>

          <Card className="animate-fade-in">
            <CardContent className="pt-6 space-y-4 text-foreground/90 leading-relaxed">
              <p>
                My research philosophy centers on the interdisciplinary fusion of computer science and biology.
                I believe that the most impactful computational biology research comes from deep understanding
                of both domains - not just applying ML techniques to biological data, but truly understanding
                the biological questions and designing computational approaches that respect the unique challenges
                of biological systems.
              </p>
              <p>
                I am committed to reproducibility and open science. All my projects include detailed documentation,
                clean code, and when possible, publicly available datasets. I believe that making research
                reproducible is not just good practice - it's essential for advancing the field and enabling
                others to build upon our work.
              </p>
              <p>
                Looking forward, I aim to contribute to the development of interpretable AI methods for biology,
                particularly in cancer genomics and multi-omics integration, where understanding the "why" behind
                predictions is as important as the predictions themselves.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
