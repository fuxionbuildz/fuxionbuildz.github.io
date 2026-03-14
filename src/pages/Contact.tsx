import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, MessageCircle, ExternalLink } from "lucide-react";
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

const discordProfileUrl = "https://discord.com/users/1055045218665238608";

const DiscordLogo = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.369a19.91 19.91 0 0 0-4.886-1.515.074.074 0 0 0-.078.037 13.85 13.85 0 0 0-.608 1.249 18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 6.006 3.037.077.077 0 0 0 .084-.027 14.13 14.13 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.13 13.13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.794 8.18 1.794 12.062 0a.073.073 0 0 1 .078.009c.12.1.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.224.648-1.873.892a.077.077 0 0 0-.04.107 15.99 15.99 0 0 0 1.225 1.993.076.076 0 0 0 .084.028 19.88 19.88 0 0 0 6.006-3.037.077.077 0 0 0 .032-.056c.5-5.177-.838-9.673-3.549-13.66a.062.062 0 0 0-.031-.03ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.212 0 2.167 1.095 2.157 2.419 0 1.333-.955 2.419-2.157 2.419Zm7.975 0c-1.184 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.166 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419Z" />
  </svg>
);

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
              The fastest way to reach me is through Discord. Use either button below.
            </p>

            <div className="flex flex-wrap gap-3">
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

              <a
                href={discordProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground border border-border font-medium rounded-lg text-sm transition-colors hover:bg-muted"
              >
                <DiscordLogo />
                Open Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
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
