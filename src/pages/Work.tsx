import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import brainrotRun from "@/assets/brainrot-run.webp";
import brainrotStairs from "@/assets/brainrot-stairs.webp";

const filters = ["All", "Games", "3D Modeling", "UI Design"] as const;
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
    image: "https://rodevs.com/media/86af48652b0a-Scythe_render_2_edited_improve.png",
    tags: ["Blender", "3D Modeling"],
    year: "2024",
    category: "3D Modeling" as Filter,
  },
  {
    title: "G Pro X Superlight",
    description: "High-fidelity product render of the Logitech G Pro X Superlight mouse.",
    image: "https://cdn.discordapp.com/attachments/1471534612948717642/1471534665528512643/image.png?ex=698f48f4&is=698df774&hm=f4fdd1895c7c425d267cad6e16dffa862d061736227890804d216832355c4339&",
    tags: ["Blender", "Product Render"],
    year: "2024",
    category: "3D Modeling" as Filter,
  },
  {
    title: "Cartoony Gun Model",
    description: "Stylized cartoony gun model for game assets.",
    image: "https://rodevs.com/media/7bb1e4650415-ar_cartoony2.png",
    tags: ["Blender", "Game Asset"],
    year: "2024",
    category: "3D Modeling" as Filter,
  },
  {
    title: "Inventory Frame",
    description: "Anime style UI inventory frame design for RPG games.",
    image: "https://cdn.discordapp.com/attachments/1471534612948717642/1471534831862284379/image.png?ex=698f491b&is=698df79b&hm=79c03b3b00c7df5b85f669b5cf5f5b77795b0207daf1734144e3bdba572f80e1&",
    tags: ["UI Design", "Game UI"],
    year: "2024",
    category: "UI Design" as Filter,
  },
  {
    title: "HUD Design",
    description: "Heads-up display commissioned for a game project.",
    image: "https://cdn.discordapp.com/attachments/1471534612948717642/1471534961591976140/image.png?ex=698f493a&is=698df7ba&hm=2de0d4846784b128f5721754ee791d730e1439fa27e51a597bb070a2f7893896&",
    tags: ["UI Design", "Commission"],
    year: "2024",
    category: "UI Design" as Filter,
  },
  {
    title: "Leave Reward Frame",
    description: "UI frame designed for in-game reward systems.",
    image: "https://cdn.discordapp.com/attachments/1055444680009064524/1471540089250250912/image.png?ex=698f4e01&is=698dfc81&hm=d00d6b55e8f20220727a70dc36e922197718799aea4d2ed20b6f5518328c3cee&",
    tags: ["UI Design", "Game UI"],
    year: "2024",
    category: "UI Design" as Filter,
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
            description="A collection of games, 3D models, and UI designs I've built and contributed to."
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Work;
