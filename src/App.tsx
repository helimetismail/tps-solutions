/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Rocket, 
  Cpu, 
  Palette, 
  Zap, 
  Github, 
  ArrowRight,
  Code2,
  Box
} from 'lucide-react';

const Feature = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-400 hover:shadow-sm transition-all"
    id={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-5 h-5 text-zinc-600" />
    </div>
    <h3 className="font-semibold text-zinc-900 mb-1">{title}</h3>
    <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white" id="root-container">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50" id="main-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Box className="w-6 h-6 text-zinc-900" />
              <span className="font-semibold tracking-tight">AI Studio Starter</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2"
                id="github-link"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <button 
                className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
                id="get-started-btn"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden" id="hero-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
                </span>
                New Release v1.0.0
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Build smarter apps <br />
                <span className="text-zinc-400 font-serif italic">in record time.</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-8 leading-relaxed max-w-2xl">
                The ultimate foundation for modern web applications. 
                Pre-configured with Gemini AI, React 19, and Tailwind CSS 4.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group" id="primary-cta">
                  Clone Repository
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-zinc-200 rounded-full font-medium hover:border-zinc-400 transition-all flex items-center justify-center gap-2" id="secondary-cta">
                  <Code2 className="w-4 h-4" />
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>

          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-50 -z-10" />
        </section>

        {/* Features Grid */}
        <section className="pb-24 sm:pb-32" id="features-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Feature 
                icon={Rocket} 
                title="Vite Core" 
                description="Instant HMR and optimized build pipeline out of the box."
                delay={0.1}
              />
              <Feature 
                icon={Cpu} 
                title="Gemini AI" 
                description="Seamless SDK integration for intelligent feature development."
                delay={0.2}
              />
              <Feature 
                icon={Palette} 
                title="Modern UI" 
                description="Tailwind CSS 4 utility-first approach for rapid styling."
                delay={0.3}
              />
              <Feature 
                icon={Zap} 
                title="Motion" 
                description="Cinematic animations using Framer Motion 12."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Console Demo Section */}
        <section className="pb-24 sm:pb-32" id="code-preview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-900 rounded-3xl p-2 shadow-2xl overflow-hidden border border-zinc-800">
              <div className="bg-zinc-800/50 px-4 py-3 border-b border-zinc-700/50 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="p-8 font-mono text-sm sm:text-base overflow-x-auto">
                <div className="flex gap-4 mb-2">
                  <span className="text-zinc-500 font-medium">01</span>
                  <span className="text-zinc-300">npm install @google/genai</span>
                </div>
                <div className="flex gap-4 mb-2">
                  <span className="text-zinc-500 font-medium">02</span>
                  <span className="text-indigo-400">const</span>
                  <span className="text-zinc-100">{' { GoogleGenAI } = await import("@google/genai");'}</span>
                </div>
                <div className="flex gap-4 mb-2">
                  <span className="text-zinc-500 font-medium">03</span>
                  <span className="text-indigo-400">const</span>
                  <span className="text-zinc-100">{' ai = new GoogleGenAI(process.env.GEMINI_API_KEY);'}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-500 font-medium">04</span>
                  <span className="text-zinc-500">_</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12" id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
            <Box className="w-4 h-4" />
            © 2026 AI Studio Web Starter. MIT License.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-900 transition-colors">Documentation</a>
            <a href="#" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-900 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
