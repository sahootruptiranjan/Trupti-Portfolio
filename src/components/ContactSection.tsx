import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end interactive handler. Can be wired to Formspree, EmailJS, or serverless API.
    // For standard static hosting, we open the user's email client with pre-filled details.
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Hi Trupti,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Discuss Data & Analytics Opportunities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Currently targeting Data Analytics and Data Science internships. Have a question or prospective opportunity? Let's connect directly.
          </p>
          <div className="w-12 h-1 bg-accent-cyan rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md shadow-slate-900/5 dark:shadow-black/20 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-accent-cyan transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Quick response guaranteed</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-accent-cyan hover:border-accent-cyan transition-all text-slate-400"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md shadow-slate-900/5 dark:shadow-black/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Direct Phone</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-accent-cyan transition-colors"
                >
                  {personalInfo.phone}
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Available for phone & video calls</p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md shadow-slate-900/5 dark:shadow-black/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">LinkedIn Profile</span>
                  <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.linkedin}
                  </span>
                </div>
              </div>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-accent-cyan hover:border-accent-cyan transition-all text-slate-400"
                aria-label="Open LinkedIn Profile"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md shadow-slate-900/5 dark:shadow-black/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">GitHub Repositories</span>
                  <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.github}
                  </span>
                </div>
              </div>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-accent-cyan hover:border-accent-cyan transition-all text-slate-400"
                aria-label="Open GitHub Profile"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/5 dark:shadow-black/30">
              
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Fill out the details below to trigger a pre-formatted email message directly to my inbox.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center py-10 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your email client will open with your pre-formatted note to <span className="font-mono font-semibold">{personalInfo.email}</span>. Thank you for reaching out!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 text-slate-900 dark:text-white text-sm focus:border-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 text-slate-900 dark:text-white text-sm focus:border-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Data Analytics Internship Opportunity"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 text-slate-900 dark:text-white text-sm focus:border-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Trupti, we reviewed your Zomato data analysis project and would love to speak regarding an internship role..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 text-slate-900 dark:text-white text-sm focus:border-accent-cyan focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent-cyan text-slate-950 font-semibold hover:bg-teal-300 hover:shadow-glow-cyan transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-cyan active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>

                  <p className="text-[11px] font-mono text-slate-400 pt-2">
                    Note: To connect directly with an API backend (Formspree or EmailJS), replace the mailto dispatch in <code>ContactSection.tsx</code>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
