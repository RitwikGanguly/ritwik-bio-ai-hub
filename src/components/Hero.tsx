import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/ritwik-profile.jpg";

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

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ritwik Ganguly
            </h1>

            <p className="text-xl text-muted-foreground">
              Single-cell & Cancer Genomics, Graph Neural Networks, Knowledge Graph, Generative Models, LLMs, ML & DL Enthusiastic
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Highly energetic researcher with deep foundations in Computer Science and Computational Biology. 
              Experienced in single-cell genomics, graph attention-based GANs, and RAG-enabled LLMs. 
              Currently advancing cancer genomics through heterogeneous GNN architectures, 
              translating cutting-edge research into computational solutions for biological problems.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kolkata, India</span>
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
                <a href="#" download>
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View CV (PDF)
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
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/ritwik-ganguly"
                  target="_blank"
                  rel="noopener noreferrer"
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
