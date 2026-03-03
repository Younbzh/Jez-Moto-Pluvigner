import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Wrench, CheckCircle, Award, AlertCircle, Star, ArrowRight } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const phoneHref = 'tel:' + siteConfig.contact.phone.replace(/\s/g, '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-red-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-xl shadow-red-500/30 bg-black">
                <img src="/logo-jezmoto.jpg" alt="JEZ MOTO Logo" className="w-full h-full object-contain p-2" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white tracking-tight">{siteConfig.companyName}</h1>
                <p className="text-sm text-red-400 font-semibold">{siteConfig.city}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold">Services</button>
              <button onClick={() => scrollToSection('realisations')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold">Réalisations</button>
              <button onClick={() => scrollToSection('motos')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold">Motos</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg shadow-red-500/30 font-bold">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-2xl py-4 border-t border-red-500/20">
              {['accueil', 'services', 'realisations', 'motos', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-red-400 capitalize font-semibold">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero epure */}
      <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/salon-jezmoto.jpg" alt="JEZ MOTO au salon moto" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-lg">
              <Award className="text-white" size={16} />
              <span className="text-white font-bold text-sm tracking-wider">MECANICIEN PASSIONNE — PLUVIGNER</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-white drop-shadow-2xl">Votre moto</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                entre de bonnes mains
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed max-w-xl">
              Entretien, réparation, restauration. Toutes marques, tous modèles.
              Travail soigné, tarifs transparents.
            </p>

            <p className="text-base text-orange-400 font-bold mb-10">
              🔧 Thibault Danguin — 10+ ans d'expérience
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={phoneHref}
                className="group px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-black text-lg text-white shadow-2xl shadow-red-500/40 hover:shadow-red-500/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="group-hover:rotate-12 transition-transform" size={22} />
                <span>06 13 33 99 31</span>
              </a>

              <button
                onClick={() => scrollToSection('realisations')}
                className="px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full font-bold text-lg text-white border border-white/30 hover:border-white/60 transition-all flex items-center justify-center gap-3"
              >
                <span>Voir les réalisations</span>
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-white/60 rotate-90" size={28} />
        </div>
      </section>

      {/* Bandeau valeurs */}
      <section className="py-10 px-4 bg-gray-800/30 border-y border-red-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 px-5 py-2 rounded-full shadow-lg flex items-center gap-2 border border-gray-700 hover:border-red-500/50 transition-all">
                <span className="text-xl">{value.icon}</span>
                <span className="font-bold text-gray-300 text-sm">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A propos avec stats integrees */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">{siteConfig.about.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-3xl overflow-hidden shadow-2xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <img src="/atelier-travail.jpg" alt="Thibault Danguin au travail" className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
                  <Wrench className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Notre atelier</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.about.story}</p>
                <p className="text-gray-300 leading-relaxed">{siteConfig.about.mission}</p>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-3xl p-8 shadow-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Notre expertise</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{siteConfig.about.expertise}</p>
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.hero.stats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-2xl p-4 border border-cyan-500/20 text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">{siteConfig.services.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl hover:shadow-red-500/20 transition-all border border-gray-700 hover:border-red-500/50 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{service.icon}</div>
                  {service.badge && (
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{service.badge}</span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">{service.title}</h3>
                <p className="text-orange-400 mb-6 font-semibold">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{siteConfig.advantages.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteConfig.advantages.items.map((advantage, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all hover:-translate-y-2 border border-gray-700 hover:border-red-500/50 text-center">
                <div className="text-5xl mb-3">{advantage.icon}</div>
                <h3 className="font-black text-white mb-2 text-lg">{advantage.title}</h3>
                <p className="text-sm text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANT / APRES */}
      <section id="realisations" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Avant / Après</h2>
            <p className="text-xl text-gray-400">La preuve par l'image du travail de Thibault</p>
          </div>

          <div className="space-y-8">

            {/* Suzuki 500 GSE */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="grid md:grid-cols-2">
                <div className="relative bg-gray-950 flex items-center justify-center p-4">
                  <img src="/avant-apres-suzuki.jpg" alt="Suzuki 500 GSE 1996 restauration" className="w-full object-contain max-h-[520px]" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">AVANT</span>
                    <ArrowRight className="text-orange-400" size={18} />
                    <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">APRES</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-red-400 font-bold text-sm mb-2 uppercase tracking-wider">Restauration complète</span>
                  <h3 className="text-3xl font-black text-white mb-3">Suzuki 500 GSE</h3>
                  <p className="text-orange-400 font-bold mb-4">1996 — Cafe Racer custom</p>
                  <p className="text-gray-300 leading-relaxed">
                    Transformation complète : dépose de la carénage, modification du cadre, nouvelle sellerie,
                    reprise moteur. Un vrai travail de passionné pour donner une seconde vie à cette belle Suzuki.
                  </p>
                </div>
              </div>
            </div>

            {/* Honda CG 125 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                  <span className="text-orange-400 font-bold text-sm mb-2 uppercase tracking-wider">Restauration vintage</span>
                  <h3 className="text-3xl font-black text-white mb-3">Honda CG 125</h3>
                  <p className="text-orange-400 font-bold mb-4">1976 — Remise en état d'origine</p>
                  <p className="text-gray-300 leading-relaxed">
                    Restauration fidèle à l'original : remise en état complète de la mécanique,
                    peinture refaite dans les couleurs d'époque. Une Honda 1976 qui brille comme au premier jour.
                  </p>
                </div>
                <div className="relative bg-gray-950 flex items-center justify-center p-4 order-1 md:order-2">
                  <img src="/avant-apres-honda.jpg" alt="Honda CG 125 1976 restauration" className="w-full object-contain max-h-[520px]" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">AVANT</span>
                    <ArrowRight className="text-orange-400" size={18} />
                    <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">APRES</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo salon */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img src="/salon-jezmoto.jpg" alt="JEZ MOTO au salon moto" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-cyan-400 font-bold text-sm mb-2 uppercase tracking-wider">Présence salon</span>
                  <h3 className="text-3xl font-black text-white mb-3">JEZ MOTO en salon</h3>
                  <p className="text-cyan-300 font-bold mb-4">Thibault et ses Honda classiques</p>
                  <p className="text-gray-300 leading-relaxed">
                    Jez Moto présent aux salons moto de Bretagne avec de belles restaurations.
                    L'occasion de rencontrer Thibault et de découvrir son travail en direct.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Temoignages */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ils nous font confiance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 rounded-3xl p-8 shadow-2xl border border-gray-700 hover:border-red-500/50 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-orange-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-red-400">{testimonial.bike}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motos */}
      <section id="motos" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{siteConfig.motorcycles.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.motorcycles.description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {siteConfig.motorcycles.types.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl hover:shadow-red-500/20 transition-all text-center border border-gray-700 hover:border-red-500/50 group">
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="font-black text-white mb-2 text-lg">{type.name}</h3>
                <p className="text-sm text-gray-400">{type.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-800/50 rounded-3xl p-8 border border-red-500/20">
            <h3 className="text-2xl font-black text-white mb-6 text-center">Marques acceptées</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.motorcycles.brands.map((brand, index) => (
                <span key={index} className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold text-gray-300 shadow-md border border-gray-600 hover:border-red-500/50 transition-all">
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-6 italic">Et bien d'autres marques...</p>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{siteConfig.process.title}</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all border border-gray-700 hover:border-orange-500/50 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-2xl shadow-lg shadow-orange-500/30">
                    {step.number}
                  </div>
                  <h3 className="font-black text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-red-500/50" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{siteConfig.zone.title}</h2>
            <p className="text-lg text-gray-400">{siteConfig.zone.center}</p>
          </div>
          <div className="bg-gray-800/50 rounded-3xl p-8 shadow-2xl border border-red-500/20">
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.zone.mainCities.map((city, index) => (
                <span key={index} className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold text-gray-300 shadow-md border border-gray-600 hover:border-red-500/50 transition-all">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Questions fréquentes</h2>
          </div>
          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-3xl p-6 shadow-xl border border-gray-700 hover:border-red-500/50 transition-all">
                <h3 className="text-lg font-black text-white mb-3 flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  <span className="text-orange-400 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{siteConfig.contact.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-3xl p-8 shadow-2xl border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-2 text-lg">Adresse</h3>
                    <p className="text-gray-300 font-bold text-lg">Pluvigner (56330)</p>
                    <p className="text-gray-400 text-sm mt-2">{siteConfig.contact.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 shadow-2xl shadow-red-500/30 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-black mb-2 text-lg">Téléphone</h3>
                    <a href={phoneHref} className="text-3xl font-black hover:text-orange-100 transition-colors block mb-2">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-sm text-orange-100">N'hésitez pas à nous appeler</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-3xl p-8 shadow-2xl border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-2 text-lg">Email</h3>
                    <p className="text-gray-300 break-all">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-red-500/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.5!2d-3.0114!3d47.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ2JzM2LjgiTiAzwrAwMCc0MS4wIlc!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation JEZ MOTO Pluvigner"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 shadow-2xl shadow-orange-500/30 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="flex-shrink-0" size={32} />
                  <h3 className="text-2xl font-black">Informations</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="font-bold mb-2">📍 Localisation :</p>
                    <p className="text-orange-100">Pluvigner (56330)</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="font-bold mb-2">👨‍🔧 Gérant :</p>
                    <p className="text-orange-100">{siteConfig.owner}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="font-bold mb-2">📞 Sur rendez-vous uniquement</p>
                    <p className="text-orange-100">Appelez pour fixer un créneau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/33613339931"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300"
        title="Contacter sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-12 px-4 border-t border-red-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black mb-4 text-red-400">{siteConfig.companyName}</h3>
              <p className="text-gray-400 mb-4">{siteConfig.tagline}</p>
              <p className="text-gray-400 mb-2">Gérant : <span className="font-bold">{siteConfig.owner}</span></p>
              <p className="text-gray-500">Pluvigner (56330)</p>
            </div>
            <div>
              <h3 className="text-xl font-black mb-4 text-red-400">Navigation</h3>
              <div className="space-y-2">
                {['accueil', 'services', 'realisations', 'motos', 'contact'].map(section => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-400 hover:text-red-400 transition-colors capitalize font-semibold">
                    {section}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black mb-4 text-red-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="font-black text-xl text-white">{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">Pluvigner (56330)</p>
                <p className="text-sm">Atelier : 16 rue Pasteur, 56410 Étel</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 {siteConfig.companyName} - Tous droits réservés - Gérant : {siteConfig.owner}
            </p>
            <p className="text-gray-600 text-sm">
              Site créé par{' '}
              <a
                href="https://avalon-stratege.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors font-semibold"
              >
                Avalon Stratège
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}