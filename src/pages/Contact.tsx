import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, MessageCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";

const terms = [
  {
    title: "Payment",
    content: "50% upfront via PayPal (Robux and other payments also accepted). Full refund of the deposit if I cannot finish the project.",
  },
  {
    title: "Updates & Usage",
    content: "Progress updates on major parts finished or on request. I'm allowed to post my work on my portfolio unless you ask me not to.",
  },
  {
    title: "Cancellation & Refunds",
    content: "The 50% upfront deposit is not refundable if you cancel. Unfinished work will still be sent to you.",
  },
  {
    title: "Bug Fixes",
    content: "Free bug fixes for the original code I made. Provide clear details — I'll get it fixed as soon as I can.",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("Fuxion2828");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pb-28">
        <section className="max-w-5xl mx-auto pt-28 md:pt-36 px-6">
          <SectionHeader
            label="Contact"
            title="Let's work together"
            description="Available for commissions, game development, 3D modeling, and UI design work."
          />

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-lg border border-border bg-card p-6 md:p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-medium text-foreground">Reach out on Discord</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The fastest way to reach me is through Discord. Click below to copy my username.
            </p>
            <button
              onClick={handleCopyDiscord}
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-medium rounded-lg text-sm transition-all active:scale-[0.97] hover:opacity-90"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Fuxion2828
                </>
              )}
            </button>
          </motion.div>

          {/* Terms */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 block">
              Terms & Conditions
            </span>
            <p className="text-xs text-muted-foreground mb-6">
              These terms can be adjusted in specific cases.*
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {terms.map((term, i) => (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="text-sm font-medium text-foreground mb-2">{term.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{term.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Be Nice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-8 rounded-lg border border-border bg-card p-5"
          >
            <h3 className="text-sm font-medium text-foreground mb-2">Be Nice & Respectful</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Being rude, discriminatory, or swearing may lead to immediate cancellation. 
              Let's keep things professional and productive.
            </p>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
