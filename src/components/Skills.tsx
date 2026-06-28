"use client";

import { Skill } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

interface SkillsProps {
  skills: Skill[];
}

const iconMap: Record<string, React.ElementType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
};

function Skills({ skills }: SkillsProps) {
  return (
    <section className="md:p-8 p-4 py-20 relative" id="skills">
      <SectionHeading className="md:pl-12">
        <SlideIn className="text-white/40">Technical</SlideIn>
        <br />
        <SlideIn>Skills</SlideIn>
      </SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pt-10">
        {skills
          .filter((s) => s.enabled)
          .map((skill, index) => {
            const Icon = iconMap[skill.name];
            return (
              <Transition
                key={skill._id}
                transition={{ delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="group relative rounded-xl md:rounded-2xl overflow-hidden bg-secondary/30 border border-white/10 p-4 md:p-6 flex flex-col items-center gap-3 hover:bg-white/5 transition-colors duration-300">
                  {Icon ? (
                    <Icon className="text-4xl md:text-5xl text-white/80 group-hover:text-white transition-colors duration-300" />
                  ) : (
                    <span className="text-3xl md:text-4xl text-white/80 group-hover:text-white transition-colors duration-300">
                      {skill.name[0]}
                    </span>
                  )}
                  <span className="text-sm md:text-base font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300 text-center">
                    {skill.name}
                  </span>
                </div>
              </Transition>
            );
          })}
      </div>
    </section>
  );
}

export default Skills;
