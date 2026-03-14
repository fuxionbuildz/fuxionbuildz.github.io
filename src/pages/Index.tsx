import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import brainrotRun from "@/assets/brainrot-run.webp";
import brainrotStairs from "@/assets/brainrot-stairs.webp";

const featuredProjects = [
  {
    title: "Brainrot Run",
    description: "A game on Roblox made nearly entirely by me. Currently being re-released.",
    image: "https://tr.rbxcdn.com/180DAY-4df67b97774c03e639d3784624bd2809/768/432/Image/Webp/noFilter",
    tags: ["Roblox Studio", "Lua", "Game Design"],
    year: "2025",
    link: "https://www.roblox.com/games/139527994566752/Brainrot-Run",
  },
  {
    title: "Brainrot Stairs",
    description: "Worked as part of the team. Contributed to over 3 million visits.",
    image: "https://tr.rbxcdn.com/180DAY-707ca29695d1961775353b02c06d8f1b/768/432/Image/Webp/noFilter",
    tags: ["Roblox Studio", "Lua", "Team Project"],
    year: "2025",
    link: "https://www.roblox.com/games/117262185010169/Brainrot-Stairs",
  },
  {
    title: "Scythe Model",
    description: "Realistic scythe 3D model built in Blender with clean topology.",
    image: "https://rodevs.com/media/86af48652b0a-Scythe_render_2_edited_improve.png",
    tags: ["Blender", "3D Modeling"],
    year: "2024",
  },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pb-28">
        {/* Hero */}
        <section className="max-w-5xl mx-auto pt-28 md:pt-40 pb-20 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl font-medium tracking-[-0.04em] text-foreground text-balance mb-8"
          >
            Developer & 3D Artist
            <br />
            <span className="text-muted-foreground">crafting digital worlds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[50ch] text-lg text-muted-foreground leading-relaxed mb-10"
          >
            Experienced game developer and 3D artist specializing in Roblox games,
            3D modeling, and UI design. One message away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex gap-4"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg text-sm transition-transform active:scale-[0.97] hover:opacity-90"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg text-sm transition-colors hover:bg-secondary"
            >
              Get in Touch
            </Link>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2 block">
                Recent shipments
              </span>
              <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
