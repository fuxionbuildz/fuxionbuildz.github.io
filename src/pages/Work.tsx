import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import brainrotRun from "@/assets/brainrot-run.webp";
import brainrotStairs from "@/assets/brainrot-stairs.webp";
import scytheModel from "@/assets/scythe-model.png";
import gunModel from "@/assets/gun-model.png";

const filters = ["All", "Games", "3D Modeling"] as const;
type Filter = (typeof filters)[number];

const projects = [
  {
    title: "Brainrot Run",
    description: "A game on Roblox made nearly entirely by me. Currently being re-released.",
    image: brainrotRun,
    tags: ["Roblox Studio", "Lua", "Game Design"],
    year: "2025",
    category: "Games" as Filter,
    link: "https://www.roblox.com/games/139527994566752/Brainrot-Run",
  },
  {
    title: "Brainrot Stairs",
    description: "Worked as part of the team. Contributed to over 3 million visits.",
    image: brainrotStairs,
    tags: ["Roblox Studio", "Lua", "Team Project"],
    year: "2025",
    category: "Games" as Filter,
    link: "https://www.roblox.com/games/117262185010169/Brainrot-Stairs",
  },
  {
    title: "Scythe Model",
    description: "Realistic scythe 3D model with clean topology and PBR materials.",
    image: scytheModel,
    tags: ["Blender", "3D Modeling"],
    year: "2024",
    category: "3D Modeling" as Filter,
  },
  {
    title: "Cartoony Gun Model",
    description: "Stylized cartoony gun model for game assets.",
    image: gunModel,
    tags: ["Blender", "Game Asset"],
    year: "2024",
    category: "3D Modeling" as Filter,
  },
];

const Work = () => {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageTransition>
      <div className="min-h-screen pb-28">
        <section className="max-w-5xl mx-auto pt-28 md:pt-36 px-6">
          <SectionHeader
            label="Portfolio"
            title="Work & Projects"
            description="A collection of games and 3D models I've built and contributed to."
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex gap-2 mb-10 flex-wrap"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  active === filter
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} priority={i < 4} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Work;
