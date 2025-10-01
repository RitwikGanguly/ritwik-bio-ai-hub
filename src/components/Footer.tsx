import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Ritwik Ganguly</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computational Biologist specializing in single-cell genomics,
              graph neural networks, and ML for cancer research.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/research" className="text-muted-foreground hover:text-primary transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="/publications" className="text-muted-foreground hover:text-primary transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                ritwik24222@iiitd.ac.in
              </p>
              <p className="text-sm text-muted-foreground">
                Kolkata, West Bengal, India
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/RitwikGanguly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:ritwik24222@iiitd.ac.in">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Ritwik Ganguly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
