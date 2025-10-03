import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Phone,
} from "lucide-react";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="text-primary">
                Lorena Seabra
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Full-Stack Software Engineer with experience in
              React/Next.js, TypeScript, Python/Django and
              cloud-native solutions. Passionate about building
              scalable systems and contributing to meaningful,
              impactful projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/lorenaaseabra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/seabralorena/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:lorenamseabra@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:+3530873678144">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile image from GitHub */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="https://github.com/lorenaaseabra.png"
                  alt="Lorena Seabra - Software Engineer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("#about")}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}