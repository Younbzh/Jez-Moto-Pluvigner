import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Wrench, CheckCircle, Award, Zap, AlertCircle, Settings } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-orange-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Wrench className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{siteConfig.companyName}</h1>
                <p className="text-sm text-orange-400">{siteConfig.city}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-orange-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-orange-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('motos')} className="text-gray-300 hover:text-orange-400 transition-colors">Motos</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg shadow-orange-500/30">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-xl py-4 border-t border-orange-500/20">
              {['accueil', 'services', 'motos', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-orange-400 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full mb-6 shadow-md border border-orange-500/30">
              <Settings className="text-orange-500" size={20} />
              <span className="text-sm font-medium text-gray-300">Garage moto indépendant</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">
              {siteConfig.companyName}
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-400 mb-4 font-semibold">
              {siteConfig.hero.subtitle}
            </p>
            
            <p className="text-lg text-blue-400 mb-6 font-medium">
              🔧 Gérant : {siteConfig.owner}
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2">
                <Phone size={20} />
                Appelez-nous
              </a>
              <button onClick={() => scrollToSection('services')} className="bg-gray-800 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all shadow-lg border border-blue-500/30">
                Nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-gray-800/30 border-y border-orange-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/20 transition-all border border-gray-700">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-gray-300">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Votre garage moto de confiance</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-orange-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Notre garage</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.about.story}</p>
              <p className="text-gray-300 leading-relaxed">{siteConfig.about.mission}</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Notre expertise</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.about.expertise}</p>
              <p className="text-gray-300 leading-relaxed">{siteConfig.about.values}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{siteConfig.services.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all border border-gray-700">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-orange-400 mb-6 font-medium">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
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
            <h2 className="text-4xl font-bold text-white mb-6">{siteConfig.advantages.title}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {siteConfig.advantages.items.map((advantage, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:-translate-y-1 border border-gray-700 text-center">
                <div className="text-4xl mb-3">{advantage.icon}</div>
                <h3 className="font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de motos */}
      <section id="motos" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{siteConfig.motorcycles.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.motorcycles.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {siteConfig.motorcycles.types.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all text-center border border-gray-700">
                <div className="text-5xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-white mb-2">{type.name}</h3>
                <p className="text-sm text-gray-400">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Marques acceptées</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.motorcycles.brands.map((brand, index) => (
                <span key={index} className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-300 shadow-md border border-gray-600">
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
            <h2 className="text-4xl font-bold text-white mb-6">{siteConfig.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-gray-700 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg shadow-blue-500/30">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-orange-500/50" size={24} />
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
            <h2 className="text-4xl font-bold text-white mb-4">{siteConfig.zone.title}</h2>
            <p className="text-lg text-gray-400">{siteConfig.zone.center}</p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-orange-500/20">
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.zone.mainCities.map((city, index) => (
                <span key={index} className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-300 shadow-md border border-gray-600">
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
            <h2 className="text-4xl font-bold text-white mb-6">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  <span className="text-blue-400 font-bold">R:</span> {item.answer}
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
            <h2 className="text-4xl font-bold text-white mb-6">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Adresse</h3>
                    <p className="text-gray-300">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-300">{siteConfig.contact.address.city}</p>
                    <p className="text-gray-400 text-sm mt-2">{siteConfig.contact.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 shadow-lg shadow-orange-500/30 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Téléphone</h3>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-2xl font-bold hover:text-orange-100 transition-colors block mb-2">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-sm text-orange-100">N'hésitez pas à nous appeler</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl shadow-blue-500/30 text-white mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="flex-shrink-0" size={32} />
                  <h3 className="text-2xl font-bold">Informations importantes</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold mb-2">📍 Localisation affichée :</p>
                    <p className="text-blue-100">Pluvigner (56330)</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold mb-2">🏠 Atelier physique :</p>
                    <p className="text-blue-100">56330 Pluvigner</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold mb-2">👨‍🔧 Gérant :</p>
                    <p className="text-blue-100">{siteConfig.owner}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  {siteConfig.highlights.slice(0, 6).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-12 px-4 border-t border-orange-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">{siteConfig.companyName}</h3>
              <p className="text-gray-400 mb-4">Garage moto indépendant</p>
              <p className="text-gray-400 mb-2">Gérant : {siteConfig.owner}</p>
              <p className="text-gray-500">{siteConfig.contact.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Navigation</h3>
              <div className="space-y-2">
                {['accueil', 'services', 'motos', 'contact'].map(section => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-400 hover:text-orange-400 transition-colors capitalize">
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="font-bold text-lg text-white">{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">Localisé à : {siteConfig.city}</p>
                <p className="text-sm">Atelier : 16 rue Pasteur, 56410 Etel</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 {siteConfig.companyName} - Tous droits réservés - Gérant : {siteConfig.owner}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}