import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { slug } = useParams();

  return (
    <PageTransition>
      <div className="min-h-screen pb-28">
        <section className="max-w-3xl mx-auto pt-28 md:pt-36 px-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-medium tracking-[-0.04em] text-foreground mb-4">
              {slug?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
            </h1>
            <div className="rounded-lg border border-border bg-card p-8 mt-8">
              <p className="text-muted-foreground text-lg">Example</p>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
