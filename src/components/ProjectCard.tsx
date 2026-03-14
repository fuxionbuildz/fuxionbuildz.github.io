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
  priority?: boolean;
}

const ProjectCard = ({ title, description, image, tags, year, index, priority = false }: ProjectCardProps) => {
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
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
          />
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium text-foreground">{title}</h3>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{year}</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-mono text-muted-foreground"
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
