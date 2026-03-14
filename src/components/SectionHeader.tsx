import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    className="mb-12"
  >
    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3 block">
      {label}
    </span>
    <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] text-foreground text-balance mb-4">
      {title}
    </h1>
    {description && (
      <p className="text-lg text-muted-foreground leading-relaxed max-w-[55ch]">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
