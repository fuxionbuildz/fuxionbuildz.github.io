import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, year, index }: ProjectCardProps) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/project/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ scale: 1.01 }}
        className="group relative rounded-lg border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_4px_8px_rgba(0,0,0,0.08),0_16px_32px_rgba(0,0,0,0.12)] cursor-pointer"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-foreground font-medium text-lg">{title}</h3>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{year}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-md border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
