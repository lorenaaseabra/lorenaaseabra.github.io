import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ExternalLink,
  Github,
  Globe,
  ListTodo,
  Layers,
  Users,
  Gamepad2,
  Map,
} from "lucide-react";

export function Projects() {
  const projects = [
    // === FEATURED ===
    {
      title: "Backpacker",
      description:
        "A travel-oriented web application for organizing trips and managing itineraries. Implements Dijkstra’s algorithm to calculate optimal travel routes, combining graph theory with practical web development.",
      icon: <Globe className="h-8 w-8" />,
      technologies: [
        "React",
        "TypeScript",
        "Algorithms",
        "Graph Theory",
        "Dijkstra",
      ],
      githubUrl: "https://github.com/lorenaaseabra/backpacker",
      liveUrl: null,
      featured: true,
      category: "Web Development / Algorithms",
    },
    {
      title: "To-Do List",
      description:
        "A simple and effective task management application. Users can add, remove, and mark tasks as complete, demonstrating CRUD operations and interactive frontend logic.",
      icon: <ListTodo className="h-8 w-8" />,
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/lorenaaseabra/to-do-list",
      liveUrl: null,
      featured: true,
      category: "Frontend",
    },
    {
      title: "SphereTech",
      description:
        "Hackathon project developed to create tech-driven solutions for real-world challenges. Built collaboratively with a cross-functional team, focusing on rapid prototyping, innovation, and scalable design.",
      icon: <Layers className="h-8 w-8" />,
      technologies: [
        "Hackathon",
        "Prototype",
        "Innovation",
        "Collaboration",
      ],
      githubUrl: "https://github.com/lorenaaseabra/SphereTech",
      liveUrl: null,
      featured: true,
      category: "Hackathon",
    },

    // === OTHER PROJECTS ===
    {
      title: "Student Registration",
      description:
        "A basic student registration system handling form inputs, validation, and data persistence. Demonstrates backend logic combined with frontend UI for managing student data.",
      icon: <Users className="h-8 w-8" />,
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl:
        "https://github.com/lorenaaseabra/student-registration",
      liveUrl: null,
      featured: false,
      category: "Web Development",
    },
    {
      title: "Adedonha",
      description:
        "Digital version of the Brazilian word game Adedonha (Stop). Built with JavaScript and DOM manipulation for fun and interactive gameplay.",
      icon: <Gamepad2 className="h-8 w-8" />,
      technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
      githubUrl: "https://github.com/lorenaaseabra/Adedonha",
      liveUrl: null,
      featured: false,
      category: "Game",
    },
    {
      title: "Adventure of My Lifetime",
      description:
        "A personal interactive storytelling project, blending narrative with simple web-based interactions. Focused on creativity, design, and engagement.",
      icon: <Map className="h-8 w-8" />,
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl:
        "https://github.com/lorenaaseabra/adventure-of-my-lifetime",
      liveUrl: null,
      featured: false,
      category: "Creative / Web",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selected projects that highlight my skills in
            frontend development, algorithms, and applied
            software engineering.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="aspect-video lg:aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-primary">
                      {project.icon}
                    </div>
                  </div>
                </div>
                <div
                  className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-primary">
                        {project.icon}
                      </div>
                      <Badge variant="outline">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(
                        (tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-primary">
                    {project.icon}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                      (tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}