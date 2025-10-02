import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/ritwik-profile.jpg";
import ResumePDF from "@/assets/Ritwik_Research_Resume_new.pdf";


const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium">
              Computational Biologist
            </div>

            <div className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium">
              Computational Genomics
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ritwik Ganguly
            </h1>

            <p className="text-xl text-muted-foreground">
              Single-cell & Cancer Genomics • Graph Neural Networks • Knowledge Graph • Generative Models • LLMs • ML & DL Enthusiastic
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a highly motivated and adaptable computational biologist, passionate about continuous learning and scientific discovery. I bring a strong foundation in computer science and quantitative methods, complemented by deep expertise in single-cell genomics, machine learning, and cancer bioinformatics. My research experience ranges from developing graph attention-based GANs for realistic synthetic single-cell RNA-seq generation, addressing rare-cell detection and batch effects—to transformer fine-tuning and retrieval-augmented generation (RAG) LLMs for knowledge extraction from biomedical knowledge graphs.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mt-4">
              Currently, I am trying to advance the frontiers of cancer and multi-omics data analysis by deploying heterogeneous graph neural networks (HGT, GAT, GCN) and conditional VAEs, with an emphasis on method transparency and interpretability (BayesLIME, GSEA). By integrating these advanced computational tools with modern biological questions in cancer evolution, single-cell and spatial omics, and biomarker discovery, I aim to make complex biological data more tractable and actionable. This interdisciplinary knowledge of CS fundamentals and Modern Biology foundation makes me a promising candidate for the AI centric Biology research and novel exploration.
            </p>
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New Delhi, Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>M.Tech @ IIIT-Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Sengupta Lab</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="shadow-elegant">
                <a href="mailto:ritwik24222@iiitd.ac.in">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact for PhD
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
              <a
                href="https://drive.google.com/file/d/1aBxJbYcob3tlt2PDlD9gIcEOvuRS86Xn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Resume (PDF)
              </a>
            </Button>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/RitwikGanguly"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/ritwikganguly003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://orcid.org/0009-0000-4626-3760"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ORCID"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 7.15c.467 0 .847.38.847.846 0 .467-.38.846-.847.846-.466 0-.846-.38-.846-.846 0-.466.38-.846.846-.846zm-.846 3.385h1.692v7.615H6.523v-7.615zm3.692 0h1.692v.923h.023c.236-.446.813-.923 1.692-.923 1.812 0 2.146 1.192 2.146 2.741v3.874h-1.692v-3.385c0-.631-.012-1.442-.879-1.442-.88 0-1.014.687-1.014 1.397v3.43h-1.692v-7.615h.024z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://medium.com/@ritwikganguly"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img 
                  src={profileImg} 
                  alt="Ritwik Ganguly - Computational Biologist" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
