'use client';
import React from 'react';
import { Building2, MapPin, Calendar, ShieldCheck, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DekkuwayeLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans scroll-smooth relative">
      
      {/* --- BOUTON FLOTTANT WHATSAPP --- */}
      <a 
        href="https://wa.me/221781913490?text=Bonjour%20GIS-GIS%20IMMOBILIER,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20le%20programme%20Dekkuwaye."
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-110 flex items-center justify-center group animate-bounce"
        style={{ animationDuration: '3s' }}
        title="Discuter sur WhatsApp"
      >
        {/* Icône SVG officielle de WhatsApp */}
        <svg 
          className="w-7 h-7 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.428 2.016 13.95 1.02 11.33 1.02c-5.436 0-9.86 4.37-9.864 9.8 0 1.656.433 3.274 1.255 4.694L1.75 21.03l5.65-1.476zM17.472 14.382c-.3-.149-1.778-.878-2.046-.975-.267-.097-.463-.149-.658.149-.195.298-.754.947-.925 1.142-.17.195-.34.218-.64.07-.3-.149-1.27-.469-2.42-1.494-.894-.797-1.498-1.782-1.674-2.081-.175-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.298.3-.497.1-.198.05-.374-.025-.523-.075-.149-.658-1.586-.901-2.173-.236-.57-.478-.492-.658-.502-.17-.008-.364-.01-.559-.01s-.514.073-.783.364c-.269.292-1.024 1.001-1.024 2.441s1.025 2.827 1.168 3.023c.142.195 2.016 3.08 4.885 4.315.682.294 1.214.47 1.629.601.685.218 1.31.187 1.805.114.552-.082 1.778-.727 2.028-1.429.25-.701.25-1.3.175-1.429-.076-.13-.277-.21-.578-.359z"/>
        </svg>
        
        {/* Info-bulle au survol */}
        <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Contactez-nous sur WhatsApp 👋
        </span>
      </a>

      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-[#0f2a4a]">DEKKUWAYE</span>
            <span className="text-xs bg-[#0f2a4a] text-white px-2 py-0.5 rounded font-medium">.COM</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#concept" className="hover:text-[#0f2a4a] transition-colors">Concept</a>
            <a href="#sites" className="hover:text-[#0f2a4a] transition-colors">Sites Disponibles</a>
            <a href="#propos" className="hover:text-[#0f2a4a] transition-colors">À Propos</a>
            <a href="#conditions" className="hover:text-[#0f2a4a] transition-colors">Conditions</a>
          </nav>
          <a href="#contact" className="bg-[#0f2a4a] hover:bg-[#163b66] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg">
            S'inscrire au programme
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0f2a4a] text-white py-20 lg:py-32 overflow-hidden">
        {/* On utilise l'image générée en arrière-plan comme sur votre capture */}
        <div 
          className="absolute inset-0 bg-[url('/hero-dekkuwaye.jpeg')] bg-cover bg-center opacity-100 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a4a]/80 via-[#0f2a4a]/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-emerald-400 font-medium text-sm px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              ✨ Devenez propriétaire à votre rythme
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
              Devenez propriétaire terrien en douceur à <span className="text-emerald-400">Dekkuwaye</span>.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              Acquérez votre terrain en toute sérénité, en plusieurs tranches adaptées à votre budget. Le projet de <strong>GIS-GIS IMMOBILIER</strong> pour la Diaspora et les Sénégalais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#sites" className="bg-emerald-500 hover:bg-emerald-600 text-[#0f2a4a] font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2">
                Découvrir les sites <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/221781913490" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-2">
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
          
          {/* BLOC SÉCURISATION BANQUE & APP */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-3xl border border-white/10 p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                  <Building2 className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="bg-emerald-500 text-[#0f2a4a] text-xs px-3 py-1 rounded-full font-bold">Fonds Sécurisés</span>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-3">
                <p className="text-sm text-emerald-400 font-bold uppercase tracking-wider">Garantie Bancaire</p>
                <p className="text-xl font-bold text-white">Vos versements sont stockés et sécurisés en banque.</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  🚀 **Bientôt disponible :** Suivez vos paiements et effectuez vos dépôts directement depuis notre future application mobile dédiée vers votre compte associé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION CONCEPT / AVANTAGES --- */}
      <section id="concept" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0f2a4a] sm:text-4xl">Comment fonctionne le programme ?</h2>
          <p className="mt-4 text-lg text-slate-600">Un parcours sécurisé et numérisé pour acquérir votre parcelle en toute sérénité.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <MapPin className="w-6 h-6 text-emerald-500" />, title: "1. Choisissez votre site", desc: "Explorez nos lotissements d'avenir disponibles et sélectionnez la parcelle idéale pour votre projet." },
            { icon: <Calendar className="w-6 h-6 text-emerald-500" />, title: "2. Versez en plusieurs fois", desc: "Payez votre apport initial. Les mensualités suivantes seront déposées directement sur le compte bancaire du projet." },
            { icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, title: "3. Suivi applicatif & Titre", desc: "Suivez l'évolution de vos versements sur notre future application mobile et recevez vos documents légaux à terme." }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f2a4a] mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION SITES DISPONIBLES --- */}
      <section id="sites" className="py-20 bg-slate-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0f2a4a] sm:text-4xl">Nos Sites Disponibles</h2>
              <p className="mt-2 text-slate-600">Des parcelles de choix rigoureusement sélectionnées.</p>
            </div>
            <span className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f2a4a] bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Opportunités à saisir
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((site) => (
              <div key={site} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-slate-200 relative bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Disponible
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f2a4a] mb-2">Zone Extension Prestige {site}</h3>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                      <MapPin className="w-4 h-4 text-slate-400" /> Dakar Région / Zone d'avenir
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                      <li className="flex items-center gap-2">🔹 Superficie : 150m² à 300m²</li>
                      <li className="flex items-center gap-2">🔹 Commodités : Électricité & Eau à proximité</li>
                      <li className="flex items-center gap-2">🔹 Accessibilité : Route principale à 5 min</li>
                    </ul>
                  </div>
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Financement</p>
                      <p className="text-lg font-extrabold text-[#0f2a4a]">Tranches Mensuelles</p>
                    </div>
                    <a href="#contact" className="bg-slate-50 group-hover:bg-[#0f2a4a] group-hover:text-white p-3 rounded-xl transition-all border border-slate-200/60">
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION À PROPOS --- */}
      <section id="propos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-1 bg-emerald-500 rounded-full" />
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Le Promoteur</span>
          </div>
          <h2 className="text-3xl font-bold text-[#0f2a4a] sm:text-4xl">GIS-GIS IMMOBILIER & DIASPORA COOPÉRATIVE</h2>
          <p className="text-slate-600 leading-relaxed">
            Piloté par Monsieur <strong>Madiodio Diagne</strong> (Directeur Général), GIS-GIS IMMOBILIER est un acteur de confiance enregistré au registre du commerce sous le numéro <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-[#0f2a4a]">RCSN-DKR-2011.A.9287</code>. 
          </p>
          <p className="text-slate-600 leading-relaxed">
            Notre mission à travers le projet <strong>Dekkuwaye</strong> est de briser les barrières d'accès à la propriété foncière en proposant des alternatives souples, transparentes et adaptées aux réalités locales ainsi qu'aux besoins de la Diaspora.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase">N.I.N.A.A</p>
              <p className="font-mono text-sm font-bold text-slate-700">004419512</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase">Garantie</p>
              <p className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Traçabilité des fonds
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#0f2a4a] p-8 sm:p-12 rounded-3xl text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold">Pourquoi nous faire confiance ?</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Sécurisation Bancaire :</strong> L'argent des bénéficiaires est stocké directement sur un compte bancaire dédié et sécurisé pour garantir la protection totale de vos fonds.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Innovation Mobile :</strong> Vous disposerez bientôt d'une application mobile pour effectuer vos dépôts directement sur votre compte associé et suivre votre historique en temps réel.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Gestion Rigoureuse :</strong> Un suivi transparent où chaque transaction bancaire est liée de manière unique à votre dossier d'acquisition foncière.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SECTION REGLES ET CONDITIONS --- */}
      <section id="conditions" className="py-20 bg-slate-100/50 border-t border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f2a4a]">Règles & Conditions du Programme</h2>
            <p className="mt-2 text-slate-600">Les piliers de notre engagement mutuel.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-[#0f2a4a] mb-1">📅 Éligibilité & Attribution</h4>
              <p className="text-sm text-slate-600">Le programme est ouvert à tous. L'ouverture de votre dossier associe vos versements à un compte bancaire sécurisé dédié au projet Dekkuwaye.</p>
            </div>
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-[#0f2a4a] mb-1">📱 Versements & Application Mobile</h4>
              <p className="text-sm text-slate-600">Les mensualités sont à verser selon l'échéancier convenu. Une application mobile sera mise à votre disposition pour vous permettre d'effectuer vos dépôts directement vers votre compte associé sans vous déplacer.</p>
            </div>
            <div>
              <h4 className="font-bold text-amber-600 mb-1">⚠️ Politique d'Annulation et Retrait</h4>
              <p className="text-sm text-slate-600">Le bénéficiaire peut décider de se retirer du programme à tout moment. Cependant, toute demande d'annulation et de remboursement entraînera l'application de <strong>pénalités financières</strong> (frais de dossier et de rupture contractuelle) conformément aux clauses stipulées dans le contrat de réservation initial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION CONTACT & FORMULAIRE --- */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-[#0f2a4a] sm:text-4xl">Prêt à lancer votre projet ?</h2>
          <p className="text-slate-600">
            Remplissez ce formulaire en quelques secondes. Un conseiller commercial de <strong>GIS-GIS IMMOBILIER</strong> prendra contact avec vous pour étudier votre dossier.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Phone className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-xs text-slate-400 font-semibold">Téléphone / WhatsApp</p>
                <p className="text-sm font-bold text-slate-700">+221 78 191 34 90 / +221 77 778 02 00</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Mail className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-xs text-slate-400 font-semibold">Courriel officiel</p>
                <p className="text-sm font-bold text-slate-700">gis.gisimmobilier@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Formulaire */}
        <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Prénom & Nom</label>
                <input type="text" placeholder="Ex: Amadou Diop" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] transition-all" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Téléphone (WhatsApp)</label>
                <input type="tel" placeholder="Ex: +221 77..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] transition-all" required />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Adresse Email</label>
              <input type="email" placeholder="Ex: amadou@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] transition-all" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Votre situation géographique</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] transition-all">
                <option>Résident au Sénégal</option>
                <option>Diaspora (Afrique)</option>
                <option>Diaspora (Europe)</option>
                <option>Diaspora (Amérique du Nord)</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message ou questions spécifiques</label>
              <textarea rows={4} placeholder="Bonjour, je souhaite intégrer le programme Dekkuwaye..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#0f2a4a] hover:bg-[#163b66] text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm uppercase tracking-wider">
              Envoyer ma demande d'adhésion
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0f2a4a] text-slate-400 text-xs py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="font-bold text-white text-sm">DEKKUWAYE.COM — Par GIS-GIS IMMOBILIER</p>
            <p>Directeur Général : Madiodio Diagne | RCSN-DKR-2011.A.9287 | N.I.N.A.A: 004419512</p>
          </div>
          <p className="text-slate-500">&copy; {new Date().getFullYear()} Dekkuwaye. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}