import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "C", "SQL"]
    },
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "SPA/SSR/ISR",
        "State Mgmt (Zustand)",
        "React Hook Form",
        "Tailwind CSS", "SCSS",
        "Accessibility (a11y)", "Responsive UI",
        "Data Visualization (Plotly)"
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        "Node.js", "Python",
        "Django REST Framework",
        "RESTful APIs", "Webhooks",
        "Microservices", "Background Jobs",
        "AuthN/AuthZ (JWT, RBAC)"
      ]
    },
    {
      title: "Data & Databases",
      skills: [
        "Pandas", "Data Cleaning/ETL",
        "PostgreSQL", "SQL Server", "MySQL", "MongoDB",
        "Query Optimization"
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker", "CI/CD Pipelines",
        "Azure (deploy & infra basics)",
        "AWS (exposure)", "GCP (exposure)",
        "Linux/Bash", "Git", "Containers",
        "Monitoring & Logs (basics)"
      ]
    },
    {
      title: "Security & Scalability",
      skills: [
        "Authentication & Authorization",
        "JWT / RBAC",
        "Rate Limiting (basics)",
        "Performance Tuning",
        "Caching (basics)",
        "High-level System Design"
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Cross-functional Collaboration",
    "Stakeholder Management",
    "Mentoring & Community",
    "Rapid Prototyping",
    "Communication",
    "Time Management",
    "Adaptability",
    "Project Ownership"
  ];

  const languages = [
    "English (Fluent)",
    "Portuguese — BR (Native)"
  ];

  const tooling = [
    "Git & GitHub",
    "VS Code",
    "Postman / Insomnia",
    "Figma / Miro",
    "Jupyter",
    "Azure DevOps / GitHub Actions (basics)"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical full-stack skills across frontend, backend, data, and cloud — focused on scalable, secure systems and clean UX.
          </p>
        </div>

        {/* Hard Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills / Languages / Tooling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {languages.map((language, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Tooling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {tooling.map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
