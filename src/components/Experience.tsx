import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Users, Trophy, Target } from "lucide-react";
import * as React from "react";

/* ---------- Types ---------- */
type Experience = {
  type:
    | "engineering"
    | "internship"
    | "research"
    | "editing"
    | "community"
    | "leadership"
    | "mentoring"
    | "international";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
};

type AchievementItem = string | { label: string; link?: string };

type AchievementGroup = {
  category:
    | "Publications & Research"
    | "Awards & Impact"
    | "Community & Leadership"
    | string;
  items: AchievementItem[];
};

/* ---------- Component ---------- */
export function Experience(): React.JSX.Element {
  const experiences: Experience[] = [
    {
      type: "engineering",
      title: "Junior Software Engineer",
      company: "CESAR",
      location: "Recife, Brazil · Dublin, Ireland (remote)",
      period: "Feb 2024 – Present",
      description:
        "Full-stack development for a real-time port logistics platform: vessel tracking, sustainability KPI dashboards, role-based access control, and automation of reporting workflows. Integrated third-party weather/maritime APIs, optimized SQL queries for accurate emissions reporting, and standardized environments with Docker + CI/CD in Azure.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Django REST",
        "Pandas",
        "Plotly",
        "PostgreSQL",
        "SQL Server",
        "Docker",
        "Azure",
        "RBAC",
        "APIs",
        "CI/CD",
        "Microservices",
      ],
    },
    {
      type: "internship",
      title: "Software Development – Summer Internship",
      company: "Synopsys (Solutions Group)",
      location: "—",
      period: "Summer (Date as per CV)",
      description:
        "Developed and optimized Python/CShell scripting for ASIC flows, improving manufacturing efficiency (+20%) and reducing production costs (−15%).",
      technologies: ["Python", "CShell", "Shell", "Bash", "Unix"],
    },
    {
      type: "research",
      title: "Undergraduate Researcher",
      company: "CESAR School",
      location: "Recife, Brazil",
      period: "Sep 2023 – Dec 2023",
      description:
        "Research on generative AI integration in software development. Led a pilot case study with practitioners, documented measurable productivity improvements and trade-offs, and co-authored a peer-reviewed paper (presented at ACM AIware ’24).",
      technologies: [
        "Research Methods",
        "Data Analysis",
        "Software Engineering",
        "Generative AI",
        "Productivity Studies",
      ],
    },
    {
      type: "editing",
      title: "Assistant Editor (Volunteer)",
      company: "Women in Technology",
      location: "Boston, USA (remote)",
      period: "Oct 2024 – Present",
      description:
        "Editorial work highlighting achievements of women in tech: content planning, story development, and quality review to amplify diverse voices in technology.",
      technologies: ["Editorial Process", "Content Strategy", "Community"],
    },
    {
      type: "community",
      title: "Community Manager (Volunteer)",
      company: "PyLadies Dublin",
      location: "Dublin, Ireland",
      period: "2025 – Present",
      description:
        "Responsible for website updates, promoting and supporting community events, and developing partnerships to strengthen the local women-in-tech network.",
      technologies: ["Community", "Events", "Partnerships", "Web Content"],
    },
    {
      type: "leadership",
      title: "Co-founder / Organizer",
      company: "Pon.ti (Women in Tech)",
      location: "Recife, Brazil",
      period: "—",
      description:
        "Led initiatives, workshops, and meetups to support and connect women in technology, fostering mentorship and career development.",
      technologies: ["Community Leadership", "Event Management", "Mentoring"],
    },
    {
      type: "mentoring",
      title: "Mentor",
      company: "NASA Space Apps · NEXT Program",
      location: "—",
      period: "—",
      description:
        "Provided technical guidance and rapid-execution coaching to teams in hackathons and early-career programs, focusing on scope, MVPs, and clear pitching.",
      technologies: ["Mentoring", "MVP", "Pitch Coaching"],
    },
    {
      type: "international",
      title: "International Project – StartIt (1st place)",
      company: "HTW Berlin",
      location: "Berlin, Germany",
      period: "—",
      description:
        "Co-led a cross-national team to build a mobile solution supporting female & LGBT immigrants via a buddy-pairing system for bureaucratic assistance. Awarded 1st place among 10 teams.",
      technologies: [
        "Product Thinking",
        "Prototyping",
        "Cross-cultural teamwork",
      ],
    },
  ];

  const achievements: AchievementGroup[] = [
    {
      category: "Publications & Research",
      items: [
        {
          label:
            "ACM AIware ’24 — The Role of Generative AI in Software Development Productivity",
          link: "https://dl.acm.org/doi/10.1145/3664646.3664773",
        },
        {
          label:
            "SBC/WIT 2025 — Bridging the Gap: Inclusive Productivity Metrics in Software Engineering",
          link: "https://sol.sbc.org.br/index.php/wit/article/view/35974",
        },
      ],
    },
    {
      category: "Awards & Impact",
      items: [
        "1st place — StartIt Project (HTW Berlin), cross-national team project",
        "Real-time logistics platform: vessel tracking, automation (3h → 5 min), significant operational improvements",
      ],
    },
    {
      category: "Community & Leadership",
      items: [
        "Community Manager — PyLadies Dublin (website, events, partnerships)",
        "Assistant Editor — Women in Technology (editorial & storytelling)",
        "Co-founder — Pon.ti (Women in Tech, Recife)",
        "Mentor — NASA Space Apps, NEXT and others hackathons and courses",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineering, research, and community work across products,
            platforms, and women-in-tech initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative">
                  <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full" />
                  <CardHeader className="pl-8">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          {exp.title}
                        </CardTitle>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline">
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-8 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1 space-y-6">
            {achievements.map((group: AchievementGroup, groupIndex) => (
              <Card key={groupIndex} className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {group.category === "Publications & Research" && (
                      <Target className="h-5 w-5 text-primary" />
                    )}
                    {group.category === "Awards & Impact" && (
                      <Trophy className="h-5 w-5 text-primary" />
                    )}
                    {group.category === "Community & Leadership" && (
                      <Users className="h-5 w-5 text-primary" />
                    )}
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {group.items.map((item: AchievementItem, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {typeof item === "string" ? (
                          <span className="text-muted-foreground text-sm">
                            {item}
                          </span>
                        ) : item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            {item.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
