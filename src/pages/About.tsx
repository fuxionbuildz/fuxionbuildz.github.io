import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import fxLogo from "@/assets/fx-logo.png";

const skillGroups = [
  {
    label: "Development",
    skills: ["Lua", "Python", "Java", "C#", "HTML & CSS", "Web Development"],
  },
  {
    label: "3D & Design",
    skills: ["Blender", "Modeling", "Texturing", "Animating", "Graphic Design", "UI/UX"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Roblox Studio", "Unity", "Android Studio", "Arduino IDE"],
  },
  {
    label: "Soft Skills",
    skills: ["Project Management", "Game Design", "Team Collaboration"],
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pb-28">
        <section className="max-w-5xl mx-auto pt-28 md:pt-36 px-6">
          <SectionHeader
            label="About"
            title="Game developer and 3D artist"
            description="I've designed and implemented systems for many projects. My modeling workflow centers on creating optimized 3D assets with clean meshes. I make my code clean by keeping it readable and maintainable."
          />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-lg border border-border bg-card p-6 md:p-8 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <img src={fxLogo} alt="FX" className="w-12 h-12 rounded-full object-cover shrink-0" />
              <div>
                <h2 className="text-xl font-medium text-foreground mb-1">FX</h2>
                <p className="text-sm text-muted-foreground font-mono">Developer & 3D Artist</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-prose">
              I specialize in building Roblox games, creating 3D models in Blender, and designing
              game UI. I've contributed to projects with millions of visits and have experience across
              the full game development pipeline — from concept to deployment. I care about clean code,
              optimized meshes, and delivering work that exceeds expectations.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 block">
              Skillset
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + gi * 0.08, duration: 0.4 }}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="text-sm font-medium text-foreground mb-4">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-secondary rounded-md border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
