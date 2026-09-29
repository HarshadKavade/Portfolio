import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check, Linkedin, Github, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ showToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast({ message: "Email copied to clipboard!", type: "success" });
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a brief message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast({ message: "Please resolve form validation errors.", type: "error" });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast({ message: "Thank you! Your message has been prepared.", type: "success" });
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            I'm always interested in discussing software engineering, full-stack development, AI projects and new opportunities.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0d121f]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Feel free to reach out directly via email or connect on professional platforms.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-indigo-500/15 text-indigo-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-slate-200 truncate font-mono">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/15 text-indigo-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email Directly</span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0d121f]/90 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-indigo-400" />
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  Quick Response Guaranteed
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Ready!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. You can also email me directly at{" "}
                    <span className="font-mono text-indigo-300">{personalInfo.email}</span>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border ${
                        errors.name ? 'border-rose-500' : 'border-white/10 focus:border-indigo-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-indigo-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, project, or opportunity..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border ${
                        errors.message ? 'border-rose-500' : 'border-white/10 focus:border-indigo-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 transition-all duration-200 disabled:opacity-50"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span>{isSubmitting ? 'Preparing Transmission...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
