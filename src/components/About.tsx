import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Trophy } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m a Full-Stack Software Engineer based in Dublin,
            recently graduated in Computer Science, with
            experience designing and delivering scalable
            systems, building modern and accessible front-end
            interfaces with React/Next.js and TypeScript, and
            developing robust APIs and cloud-native solutions
            with Python/Django and Node.js.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have 2+ years of hands-on experience delivering
              measurable impact: real-time logistics features,
              interactive sustainability dashboards, secure
              access control, and automation that reduced manual
              workflows from hours to minutes for 100+ users. I
              enjoy turning complex requirements into clear,
              reliable software with a clean UX.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Internationally, I led a cross-national project in
              Berlin (StartIt) that won 1st place out of 10
              teams, and completed an exchange programme in
              Portugal (ISPGAYA). I’ve also published research
              at ACM AIware ’24 on generative AI and software
              engineering productivity, and presented work at
              SBC/WIT 2025.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond engineering, I’m active in women-in-tech
              communities (PyLadies Dublin, Pon.ti, Women in
              Technology) as a volunteer and mentor, and I love
              collaborating across product, design and data to
              ship meaningful outcomes.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                React &amp; Next.js
              </Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">
                Python &amp; Django REST
              </Badge>
              <Badge variant="secondary">
                Node.js &amp; APIs
              </Badge>
              <Badge variant="secondary">
                Data Visualization (Plotly)
              </Badge>
              <Badge variant="secondary">
                Docker &amp; CI/CD (Azure)
              </Badge>
              <Badge variant="secondary">
                RBAC &amp; Auth (JWT)
              </Badge>
              <Badge variant="secondary">
                SQL &amp; Postgres
              </Badge>
              <Badge variant="secondary">
                Community &amp; Mentoring
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      Computer Science
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">
                      BSc in Computer Science
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CESAR School — Recife, Brazil
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2021 – 2025
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      Exchange Programme (Computing)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ISPGAYA — Porto, Portugal
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2023
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      Professional & Community
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PyLadies Dublin — Community Manager
                      (Volunteer)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Women in Technology — Assistant Editor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Highlights & Achievements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Impact, Awards & Publications
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    • 1st place — StartIt Project (HTW Berlin),
                    cross-national team project.
                  </p>
                  <p>
                    •{" "}
                    <a
                      href="https://dl.acm.org/doi/10.1145/3664646.3664773"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      ACM AIware ’24
                    </a>{" "}
                    — Published paper on generative AI &
                    software engineering productivity.
                  </p>
                  <p>
                    •{" "}
                    <a
                      href="https://sol.sbc.org.br/index.php/wit/article/view/35974"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      SBC/WIT 2025
                    </a>{" "}
                    — Presented research on inclusive
                    productivity metrics in software
                    engineering.
                  </p>
                  <p>
                    • Active mentor/volunteer — NASA Space Apps,
                    PyLadies, Pon.ti (Women in Tech).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}