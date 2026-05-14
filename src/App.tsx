/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MessageCircle, MapPin, ArrowRight, Instagram, Facebook, Gem, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const GEMSTONES = [
  {
    name: "Rough Tsavorites",
    description: "Vibrant green garnet found exclusively in East Africa, prized for its intensity and brilliance.",
    image: "https://www.gia.edu/dam/jcr:040d7271-b7c5-4fdd-915a-1e0b5b26db31/SP19-GNI-Fig1LR-241749left_636px.jpg",
    color: "bg-emerald"
  },
  {
    name: "Rough Rhodolites",
    description: "Elegant purplish-red garnets with exceptional clarity and a timeless allure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnIigbUAfAs4at6k1weQgkuV1gV0lt-p7UHg&s",
    color: "bg-ruby"
  },
  {
    name: "Rough Color Change Garnets",
    description: "Rare specimens that shift hues dramatically from teal to raspberry under different lights.",
    image: "https://dukaloco.fra1.cdn.digitaloceanspaces.com/public/dukaloco-rough-color-change-g-rvsgv.jpg-SZbg9-thumb.webp",
    color: "bg-neutral-800"
  },
  {
    name: "Rough Yellow Tourmaline",
    description: "Sunshine in crystalline form. Highly sought after for its canary-yellow brilliance.",
    image: "https://3.imimg.com/data3/GP/MN/MY-13526716/yellow-tourmaline-1000x1000.jpg",
    color: "bg-yellow-600"
  },
  {
    name: "Rough Chrome Tourmaline",
    description: "Exotic deep forest green varieties colored by chromium, rare and majestic.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_Roqo0L5BX8PKiFy_FvNvaSEO7L3LYoaPQ&s",
    color: "bg-emerald-900"
  },
  {
    name: "Rough Citrine Crystals",
    description: "Golden honey crystals representing warmth and clarity, ethically sourced from Kenyan mines.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cUB_41CGTZw3qEcdha-srJgTIqXs9IqDiw&s",
    color: "bg-orange-400"
  }
];

const WHATSAPP_NUMBER = "+254720646916";
const EMAIL = "prestige.gems@yahoo.com";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gold/30 selection:text-gold">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950"
          >
            <Gem className="mb-4 h-12 w-12 animate-pulse text-gold" />
            <div className="flex items-center gap-2 text-gold">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="font-mono text-[10px] tracking-widest uppercase">Initializing Prestige...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8 }}
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
              <div className="flex items-center gap-2">
                <Gem className="h-8 w-8 text-gold" />
                <span className="font-serif text-2xl font-bold tracking-tight text-white uppercase">Prestige Gems</span>
              </div>
              
              <div className="hidden items-center gap-8 md:flex">
                <a href="#collection" className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">Collection</a>
                <a href="#contact" className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">Contact</a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-neutral-950"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: {WHATSAPP_NUMBER}</span>
                  <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </div>

              <button className="md:hidden">
                <MessageCircle className="h-6 w-6 text-gold" />
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1598283642340-e7a96a92543c?auto=format&fit=crop&q=80&w=1920" 
                alt="Rough gemstones hero"
                className="h-full w-full object-cover opacity-20 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-radial-[at_center_bottom] from-gold/5 to-transparent opacity-50" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="mb-4 inline-block font-mono text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  Ethically Sourced in Kenya
                </span>
                <h1 className="mb-6 font-serif text-5xl font-light leading-[1.1] text-white sm:text-7xl lg:text-8xl">
                  Authentic Rough <br />
                  <span className="italic text-gold">Gemstones</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-neutral-400 md:text-xl">
                  Connecting the world to Kenya's finest subterranean treasures. Direct from source to collector, with a commitment to quality and transparency.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a 
                    href="#collection"
                    className="flex h-14 items-center justify-center rounded-sm bg-gold px-8 text-sm font-bold tracking-widest text-neutral-950 uppercase transition-transform active:scale-95 sm:w-auto"
                  >
                    View Collection
                  </a>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 items-center justify-center rounded-sm border border-neutral-700 px-8 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-neutral-900 active:scale-95 sm:w-auto"
                  >
                    Inquire Now
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="h-12 w-[1px] bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
          </section>

          {/* Stats/Badge Section */}
          <section className="border-y border-neutral-800 bg-neutral-900/50">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
              {[
                { label: "Origin", value: "Kenya" },
                { label: "Quality", value: "Exquisite" },
                { label: "Service", value: "Direct" },
                { label: "Delivery", value: "Global" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">{stat.label}</p>
                  <p className="font-serif text-xl font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Collection Grid */}
          <section id="collection" className="bg-neutral-950 py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-20 flex flex-col items-end justify-between gap-6 md:flex-row">
                <div className="max-w-xl">
                  <h2 className="mb-4 font-serif text-4xl font-light text-white sm:text-5xl">Our Premier Vault</h2>
                  <p className="text-neutral-400">Discover a curated selection of rough gemstones from the heart of East Africa. Each stone tells a geologic story millions of years in the making.</p>
                </div>
                <p className="font-mono text-sm text-gold">SCROLL TO DISCOVER</p>
              </div>

              <div className="grid gap-px bg-neutral-800 md:grid-cols-2 lg:grid-cols-3">
                {GEMSTONES.map((gem, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ backgroundColor: "rgb(23, 23, 23)" }}
                    className="group relative bg-neutral-950 p-8 transition-colors"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900">
                      <img 
                        src={gem.image} 
                        alt={gem.name}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute bottom-4 left-4 h-12 w-12 rounded-full border border-white/20 backdrop-blur-lg ${gem.color} opacity-20 transition-opacity group-hover:opacity-100`} />
                    </div>
                    <h3 className="mb-3 font-serif text-2xl font-medium text-white">{gem.name}</h3>
                    <p className="text-sm font-light leading-relaxed text-neutral-500 transition-colors group-hover:text-neutral-300">
                      {gem.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900/30 backdrop-blur-xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-12 lg:p-20">
                    <h2 className="mb-8 font-serif text-4xl font-light text-white lg:text-5xl">Connect With Our <br />Gem Specialists</h2>
                    <div className="space-y-8">
                      <div className="flex items-start gap-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">WhatsApp</h4>
                          <p className="mb-2 text-neutral-400">Inquire about stone availability and pricing</p>
                          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                            {WHATSAPP_NUMBER}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Email</h4>
                          <p className="mb-2 text-neutral-400">For formal inquiries and business partnerships</p>
                          <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
                            {EMAIL}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Location</h4>
                          <p className="text-neutral-400">Headquartered in Kenya, East Africa</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[400px] border-l border-neutral-800 p-12 lg:p-20">
                    <div className="relative z-10 flex h-full flex-col justify-end">
                      <div className="mb-8">
                        <Gem className="mb-4 h-12 w-12 text-gold" />
                        <p className="text-2xl font-light italic text-white">"Bringing the raw beauty of Kenya’s gem belts to the global stage."</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Instagram className="h-5 w-5 cursor-pointer text-neutral-500 hover:text-white" />
                        <Facebook className="h-5 w-5 cursor-pointer text-neutral-500 hover:text-white" />
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1590481230198-d7b370603f90?auto=format&fit=crop&q=80&w=800" 
                      alt="Kenya mining landscape"
                      className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
              <div className="flex items-center gap-2">
                <Gem className="h-5 w-5 text-gold" />
                <span className="font-serif text-lg font-bold tracking-tight text-white uppercase">Prestige Gems</span>
              </div>
              <p className="text-xs text-neutral-600">
                &copy; {new Date().getFullYear()} Prestige Gems. All Rights Reserved. | Gem Dealers in Kenya – WhatsApp: {WHATSAPP_NUMBER}
              </p>
              <div className="flex gap-6 text-xs text-neutral-500 uppercase tracking-widest">
                <span className="cursor-pointer hover:text-white">Privacy</span>
                <span className="cursor-pointer hover:text-white">Terms</span>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
