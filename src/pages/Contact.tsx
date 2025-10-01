import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const references = [
    {
      name: "Dr. Debarka Sengupta",
      role: "Assistant Professor, IIIT Delhi",
      specialty: "Computational Biology, Single-cell Genomics",
      email: "debarka@iiitd.ac.in",
    },
    {
      name: "Dr. Sumanta Ray",
      role: "Assistant Professor, Aliah University",
      specialty: "Machine Learning, Computational Biology",
      email: "sumanta.ray@aliah.ac.in",
    },
    {
      name: "Dr. Jaspreet Kaur Dhanjal",
      role: "Assistant Professor, IIIT Delhi",
      specialty: "Structural Bioinformatics, Drug Discovery",
      email: "jaspreet@iiitd.ac.in",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, PhD opportunities, or just want to discuss computational biology?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="PhD Opportunity / Collaboration / Research Discussion"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a
                      href="mailto:ritwik24222@iiitd.ac.in"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      ritwik24222@iiitd.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">+91-629-567-2578</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a
                    href="https://github.com/RitwikGanguly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a
                    href="https://www.linkedin.com/in/ritwik-ganguly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 21.6c-5.293 0-9.6-4.307-9.6-9.6S6.707 2.4 12 2.4s9.6 4.307 9.6 9.6-4.307 9.6-9.6 9.6z" />
                    </svg>
                    ORCiD
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent border-accent-foreground/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  <strong>Quick Response:</strong> I typically respond to emails within 24-48
                  hours. For urgent matters, please mention "URGENT" in the subject line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* References */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Academic References</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {references.map((ref, index) => (
              <Card
                key={ref.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-lg mb-1">{ref.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{ref.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{ref.specialty}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${ref.email}`}>
                      <Mail className="mr-2 h-3 w-3" />
                      Contact
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            References available upon request for PhD applications and collaborations
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
