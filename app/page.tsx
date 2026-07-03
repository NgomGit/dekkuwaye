'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Layers, 
  TrendingUp, 
  Check,
  MessageSquare,
  Sparkles
} from 'lucide-react';

// Base de données mise à jour avec les vrais chemins d'images et les tarifs spécifiques demandés
const SITES_DATA = [
  {
    id: 'deni-birame-ndao',
    name: 'Déni Birame Ndao - Prestige',
    location: 'Déni Birame Ndao, Dakar, Sénégal',
    region: 'Région de Dakar (proche Lac Rose)',
    coordinates: '14.7915° N, 17.1852° W',
    shortDesc: 'Une zone d\'avenir stratégique en pleine expansion à proximité immédiate du Lac Rose et de Bambilor.',
    fullDesc: 'Le site de Déni Birame Ndao représente l\'une des opportunités foncières les plus prometteuses de la presqu\'île de Dakar. Situé dans la zone d\'influence du Lac Rose, à l\'intersection des grands projets d\'infrastructure du pays (proche du prolongement de la VDN et de la bretelle de l\'autoroute à péage), ce lotissement vous offre un cadre de vie calme, sain et verdoyant. Idéal pour construire la maison de vos rêves ou réaliser un investissement patrimonial hautement rentable.',
    images: [
      '/images/deeni_birame_ndao/main.jpeg',
      '/images/deeni_birame_ndao/dn_17.54.14.jpeg',
      '/images/deeni_birame_ndao/dn_17.54.15.jpeg',
      '/images/deeni_birame_ndao/dn_17.54.16.jpeg',
      '/images/deeni_birame_ndao/dn_17.54.17.jpeg',
      '/images/deeni_birame_ndao/dn_17.54.21.jpeg',
      '/images/deeni_birame_ndao/dn_17.54.22.jpeg',
      '/images/deeni_birame_ndao/dn_17.54.26.jpeg'
    ],
    surface: '150 m² à 300 m²',
    basePrice: 2500000, // Prix de base : 2.500.000 FCFA
    defaultMonths: 24,
    // Configuration des types de terrain avec les prix exacts (2.5M, 3.5M et 4M)
    propertyTypes: [
      { id: 'standard', label: 'Terrain Standard', modifier: 0, desc: 'Position résidentielle classique (2 500 000 FCFA)' },
      { id: 'angle', label: 'Terrain d\'Angle', modifier: 1000000, desc: 'Double façade, excellente luminosité (3 500 000 FCFA)' },
      { id: 'premier-plan', label: 'Premier Plan / Bord de route', modifier: 1500000, desc: 'Emplacement premium de haute valeur commerciale (4 000 000 FCFA)' }
    ],
    amenities: [
      'Pistes de 10 mètres de large damées et carrossables',
      'Raccordement réseau Eau SDE planifié à proximité',
      'Électricité Senelec en cours d\'extension',
      'Zone totalement hors d\'eau (sécurisée contre les inondations)',
      'Délimitation par bornage professionnel de géomètre agréé'
    ],
    highlights: [
      { label: 'Lac Rose', distance: '10 min' },
      { label: 'Autoroute à péage (Sortie Bambilor)', distance: '12 min' },
      { label: 'Pôle urbain de Diamniadio', distance: '20 min' },
      { label: 'Aéroport Blaise Diagne (AIBD)', distance: '35 min' }
    ]
  },
  {
    id: 'gorom',
    name: 'Gorom - Les Résidences Vertes',
    location: 'Gorom I, Bambilor, Rufisque, Sénégal',
    region: 'Zone horticole et résidentielle de Bambilor',
    coordinates: '14.7831° N, 17.2045° W',
    shortDesc: 'Des parcelles fertiles et faciles d\'accès, situées dans un véritable poumon vert résidentiel hautement coté.',
    fullDesc: 'Le site de Gorom est implanté dans une zone agricole et résidentielle privilégiée du département de Rufisque, réputée pour son microclimat agréable et sa nappe d\'eau douce. Bénéficiant d\'une accessibilité immédiame depuis l\'axe routier Bambilor-Sangalkam, ce projet d\'acquisition douce vous installe dans un environnement paisible, propice aux vergers résidentiels comme aux maisons familiales traditionnelles. Une opportunité rare d\'allier nature et modernité urbaine.',
    images: [
      '/images/gorom_1/main.jpeg',
      '/images/gorom_1/gm_18.11.54.jpeg',
      '/images/gorom_1/gm_18.11.55.jpeg',
      '/images/gorom_1/gm_18.11.56.jpeg',
      '/images/gorom_1/gm_18.11.58.jpeg',
      '/images/gorom_1/gm_18.23.19.jpeg',
      '/images/gorom_1/gm_18.23.20.jpeg'
    ],
    surface: '200 m² à 400 m²',
    basePrice: 2500000, // Prix de base : 2.500.000 FCFA
    defaultMonths: 36,
    // Configuration des types de terrain avec les prix exacts (2.5M, 3.5M et 4M)
    propertyTypes: [
      { id: 'standard', label: 'Terrain Standard', modifier: 0, desc: 'Parcelle résidentielle calme (2 500 000 FCFA)' },
      { id: 'angle', label: 'Terrain d\'Angle', modifier: 1000000, desc: 'Emplacement stratégique double façade (3 500 000 FCFA)' },
      { id: 'premier-plan', label: 'Premier Plan / Proche Axe', modifier: 1500000, desc: 'Idéal pour commerce ou résidence principale prestigieuse (4 000 000 FCFA)' }
    ],
    amenities: [
      'Excellente qualité de sol pour fondations solides',
      'Raccordements électriques haute et moyenne tension sur l\'axe principal',
      'Accès facile aux transports en commun locaux',
      'Écoles primaires, collèges et centres de santé à moins de 5 minutes',
      'Compte bancaire dédié avec suivi de versement individuel'
    ],
    highlights: [
      { label: 'Route Nationale Sangalkam', distance: '5 min' },
      { label: 'Marché central de Bambilor', distance: '8 min' },
      { label: 'Pôle Diamniadio', distance: '25 min' },
      { label: 'Dakar Centre (via péage)', distance: '45 min' }
    ]
  }
];

export default function DekkuwayeLanding() {
  const [selectedSite, setSelectedSite] = useState<typeof SITES_DATA[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // États du simulateur dynamique
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('standard');
  const [simulationDeposit, setSimulationDeposit] = useState(0); // Commencer par défaut à 0 FCFA (pas d'apport obligatoire)
  const [simulationMonths, setSimulationMonths] = useState(24);

  // Synchroniser le simulateur lorsque l'utilisateur change de site
  useEffect(() => {
    if (selectedSite) {
      setSelectedPropertyType('standard');
      setSimulationDeposit(0); // L'apport de départ est de 0 FCFA pour laisser le choix total à l'utilisateur
      setSimulationMonths(selectedSite.defaultMonths);
      setActiveImageIndex(0);
    }
  }, [selectedSite]);

  // Trouver le type de propriété actuellement sélectionné
  const currentPropertyOption = selectedSite?.propertyTypes.find(p => p.id === selectedPropertyType) || selectedSite?.propertyTypes[0];
  
  // Prix total recalculé selon le type de terrain choisi
  const calculatedPrice = selectedSite && currentPropertyOption 
    ? selectedSite.basePrice + currentPropertyOption.modifier 
    : 0;

  // Calcul du montant restant et de la mensualité échelonnée
  const remainingAmount = Math.max(0, calculatedPrice - simulationDeposit);
  const simulatedMonthlyTranche = simulationMonths > 0 ? Math.round(remainingAmount / simulationMonths) : 0;

  // Fonctions de navigation pour le carrousel d'images
  const handlePrevImage = () => {
    if (!selectedSite) return;
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedSite.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedSite) return;
    setActiveImageIndex((prevIndex) => 
      prevIndex === selectedSite.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Génération dynamique du lien WhatsApp pré-rempli avec les détails de la simulation
  const getWhatsAppMessageLink = () => {
    if (!selectedSite || !currentPropertyOption) return '';
    
    const message = `Bonjour GIS-GIS IMMOBILIER, je souhaite avoir plus d'informations sur le programme Dekkuwaye.\n\n` +
      `Voici ma simulation personnalisée :\n` +
      `📍 Site : ${selectedSite.name}\n` +
      `📐 Type de terrain : ${currentPropertyOption.label}\n` +
      `💰 Prix total : ${calculatedPrice.toLocaleString()} FCFA\n` +
      `💵 Apport initial proposé : ${simulationDeposit === 0 ? 'Aucun (0 FCFA)' : `${simulationDeposit.toLocaleString()} FCFA`}\n` +
      `⏱️ Durée du paiement : ${simulationMonths} mois\n` +
      `💶 Mensualité estimée : ${simulatedMonthlyTranche.toLocaleString()} FCFA/mois\n\n` +
      `Pouvez-vous me recontacter pour finaliser mon option de réservation ?`;

    return `https://wa.me/221781913490?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans scroll-smooth relative">
      
      {/* --- BOUTON FLOTTANT WHATSAPP (TOUJOURS ACCESSIBLE) --- */}
      <a 
        href="https://wa.me/221781913490?text=Bonjour%20GIS-GIS%20IMMOBILIER,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20le%20programme%20Dekkuwaye."
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-110 flex items-center justify-center group animate-bounce"
        style={{ animationDuration: '3s' }}
        title="Discuter sur WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.428 2.016 13.95 1.02 11.33 1.02c-5.436 0-9.86 4.37-9.864 9.8 0 1.656.433 3.274 1.255 4.694L1.75 21.03l5.65-1.476zM17.472 14.382c-.3-.149-1.778-.878-2.046-.975-.267-.097-.463-.149-.658.149-.195.298-.754.947-.925 1.142-.17.195-.34.218-.64.07-.3-.149-1.27-.469-2.42-1.494-.894-.797-1.498-1.782-1.674-2.081-.175-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.298.3-.497.1-.198.05-.374-.025-.523-.075-.149-.658-1.586-.901-2.173-.236-.57-.478-.492-.658-.502-.17-.008-.364-.01-.559-.01s-.514.073-.783.364c-.269.292-1.024 1.001-1.024 2.441s1.025 2.827 1.168 3.023c.142.195 2.016 3.08 4.885 4.315.682.294 1.214.47 1.629.601.685.218 1.31.187 1.805.114.552-.082 1.778-.727 2.028-1.429.25-.701.25-1.3.175-1.429-.076-.13-.277-.21-.578-.359z"/>
        </svg>
        <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Des questions ? WhatsApp direct 👋
        </span>
      </a>

      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedSite(null)}>
            <span className="text-2xl font-black tracking-wider text-[#0f2a4a]">DEKKUWAYE</span>
            <span className="text-xs bg-[#0f2a4a] text-white px-2 py-0.5 rounded font-medium">.COM</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button onClick={() => { setSelectedSite(null); setTimeout(() => { const el = document.getElementById('concept'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-[#0f2a4a] transition-colors">Concept</button>
            <button onClick={() => { setSelectedSite(null); setTimeout(() => { const el = document.getElementById('sites'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-[#0f2a4a] transition-colors">Sites Disponibles</button>
            <button onClick={() => { setSelectedSite(null); setTimeout(() => { const el = document.getElementById('propos'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-[#0f2a4a] transition-colors">À Propos</button>
            <button onClick={() => { setSelectedSite(null); setTimeout(() => { const el = document.getElementById('conditions'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-[#0f2a4a] transition-colors">Conditions</button>
          </nav>
          <a href="#contact" className="bg-[#0f2a4a] hover:bg-[#163b66] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg">
            S'inscrire au programme
          </a>
        </div>
      </header>

      {/* --- VIEW: SITE DETAILS WITH IMAGES SLIDESHOW & ADVANCED SIMULATION --- */}
      {selectedSite ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn">
          {/* Bouton de retour */}
          <button 
            onClick={() => setSelectedSite(null)}
            className="mb-8 flex items-center gap-2 text-sm font-bold text-[#0f2a4a] hover:text-[#163b66] bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 transition-all hover:scale-95"
          >
            <ChevronLeft className="w-5 h-5" /> Retour à la liste des sites
          </button>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Colonne de Gauche : Diaporama Photo et Caractéristiques du Site */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* DIAPORAMA PHOTO INTERACTIF */}
              <div className="relative h-[300px] sm:h-[480px] bg-slate-950 rounded-3xl overflow-hidden shadow-lg group border border-slate-100">
                <img 
                  src={selectedSite.images[activeImageIndex]} 
                  alt={`${selectedSite.name} - Diapo ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Flèche gauche */}
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                {/* Flèche droite */}
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Bulle d'information GPS */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold border border-white/10">
                  <Compass className="w-4 h-4 text-emerald-400" /> Coordonnées GPS : {selectedSite.coordinates}
                </div>

                {/* Titre superposé */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                    Sénégal Foncier Sécurisé
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold mt-2 drop-shadow-md">{selectedSite.name}</h1>
                  <p className="text-sm text-slate-200 mt-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" /> {selectedSite.location}
                  </p>
                </div>
              </div>

              {/* Indicateurs (dots) du diaporama */}
              <div className="flex justify-center gap-2">
                {selectedSite.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeImageIndex === idx ? 'w-8 bg-[#0f2a4a]' : 'w-2.5 bg-slate-300'
                    }`}
                    aria-label={`Aller à l'image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* DESCRIPTION COMPLÈTE */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0f2a4a] mb-3">À propos de ce lotissement</h2>
                  <p className="text-slate-600 leading-relaxed text-base">{selectedSite.fullDesc}</p>
                </div>

                {/* Spécifications géographiques */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Localisation & Accès</p>
                      <p className="text-sm font-bold text-[#0f2a4a]">{selectedSite.region}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-start gap-3">
                    <Layers className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Superficies Disponibles</p>
                      <p className="text-sm font-bold text-[#0f2a4a]">{selectedSite.surface}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMMODITÉS DU SITE */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60">
                <h3 className="text-lg font-bold text-[#0f2a4a] mb-4">Équipements & Viabilités incluses</h3>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {selectedSite.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 leading-snug">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACCESSIBILITÉ / PROXIMITÉ (LANDMARKS) */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60">
                <h3 className="text-lg font-bold text-[#0f2a4a] mb-4">Distances et Temps de trajet clés</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {selectedSite.highlights.map((landmark, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                      <p className="text-xs text-slate-400 font-semibold mb-1">{landmark.label}</p>
                      <p className="text-lg font-black text-[#0f2a4a]">{landmark.distance}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Column de Droite : Simulateur Financier Dynamique et Actions Directes */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              
              {/* SIMULATEUR DE TRANCHE COMPLET & SÉLECTION DE PROPRIÉTÉ */}
              <div className="bg-[#0f2a4a] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Simulateur d'achat doux</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold">Personnalisez votre plan</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Sélectionnez un type de parcelle, puis ajustez la durée et votre apport (facultatif).
                    </p>
                  </div>

                  {/* 1. SÉLECTION DU TYPE DE PROPRIÉTÉ */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase text-slate-300 tracking-wider">
                      Étape 1 : Choisir l'emplacement & Tarif
                    </label>
                    <div className="grid gap-2.5">
                      {selectedSite.propertyTypes.map((prop) => (
                        <button
                          key={prop.id}
                          onClick={() => {
                            setSelectedPropertyType(prop.id);
                            setSimulationDeposit(0); // L'utilisateur peut décider d'un apport à 0 FCFA par défaut
                          }}
                          className={`w-full p-4 rounded-2xl text-left border transition-all flex justify-between items-center ${
                            selectedPropertyType === prop.id
                              ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-md'
                              : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                          }`}
                        >
                          <div className="space-y-0.5">
                            <p className="font-bold text-sm">{prop.label}</p>
                            <p className="text-[11px] text-slate-300 leading-none">{prop.desc}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-emerald-400 font-semibold uppercase">Prix total</p>
                            <p className="text-sm font-black">{(selectedSite.basePrice + prop.modifier).toLocaleString()} FCFA</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. CONFIGURATION DE L'APPORT INITIAL (ENTIÈREMENT FLEXIBLE - AVEC PAS DE 25.000) */}
                  <div className="space-y-3 pt-2 border-t border-white/10">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Étape 2 : Apport Initial</span>
                      <span className="font-black text-emerald-400 text-base">
                        {simulationDeposit === 0 ? "Sans apport (0 FCFA)" : `${simulationDeposit.toLocaleString()} FCFA`}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-none mb-2">
                      L'apport est optionnel. Faites glisser le curseur à gauche si vous ne souhaitez verser aucun apport.
                    </p>
                    <input 
                      type="range" 
                      min={0} 
                      max={calculatedPrice - 250000} 
                      step={25000} // Pas de réglage ultra-fin de 25 000 FCFA
                      value={simulationDeposit}
                      onChange={(e) => setSimulationDeposit(Number(e.target.value))}
                      className="w-full accent-emerald-400 bg-slate-700 h-1.5 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>0 FCFA (Sans apport)</span>
                      <span>{(calculatedPrice - 250000).toLocaleString()} FCFA (Max)</span>
                    </div>
                  </div>

                  {/* 3. CHOIX DE LA DURÉE */}
                  <div className="space-y-3 pt-2 border-t border-white/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Étape 3 : Durée du paiement</span>
                      <span className="font-bold text-emerald-400">{simulationMonths} mois</span>
                    </div>
                    <input 
                      type="range" 
                      min={12} 
                      max={48} 
                      step={6}
                      value={simulationMonths}
                      onChange={(e) => setSimulationMonths(Number(e.target.value))}
                      className="w-full accent-emerald-400 bg-slate-700 h-1.5 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>12 mois</span>
                      <span>48 mois (Facilités)</span>
                    </div>
                  </div>

                  {/* RÉSULTAT DE LA TRANCHE MENSUELLE */}
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl text-center space-y-1">
                    <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wide">Mensualité Estimée</p>
                    <p className="text-3xl font-black text-emerald-400">
                      {simulatedMonthlyTranche.toLocaleString()} <span className="text-sm font-bold text-white">FCFA / mois</span>
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Sans intérêt ni intermédiaire bancaire. Fonds sécurisés sur compte bancaire officiel.
                    </p>
                  </div>
                </div>
              </div>

              {/* ACTION IMMÉDIATE : WHATSAPP OU APPEL DIRECT */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#0f2a4a]">Discuter de ce plan de paiement</h3>
                  <p className="text-xs text-slate-500">
                    Cliquez sur l'un des boutons ci-dessous pour joindre nos conseillers. Votre simulation sera envoyée pour analyse.
                  </p>
                </div>

                {/* BOUTON WHATSAPP DYNAMIQUE */}
                <a 
                  href={getWhatsAppMessageLink()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.01] shadow-md shadow-emerald-100"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span className="text-sm uppercase tracking-wider">Envoyer ma simulation sur WhatsApp</span>
                </a>

                {/* BOUTONS D'APPELS DIRECTS */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <a 
                    href="tel:+221781913490"
                    className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 py-3 rounded-2xl text-sm font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-500" />
                    Appeler (Directeur)
                  </a>
                  <a 
                    href="tel:+221777780200"
                    className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 py-3 rounded-2xl text-sm font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#0f2a4a]" />
                    Appeler (Commercial)
                  </a>
                </div>
              </div>

            </div>

          </div>
        </main>
      ) : (
        <main>
          
          {/* --- HERO SECTION WITH MAIN LOGO AND TEXTURE --- */}
          <section className="relative bg-[#0f2a4a] text-white py-20 lg:py-32 overflow-hidden">
            <div 
              className="absolute inset-0 bg-[url('/hero-dekkuwaye.png')] bg-cover bg-center opacity-25 mix-blend-overlay animate-pulse"
              style={{ animationDuration: '6s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a4a] via-[#0f2a4a]/85 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-emerald-400 font-medium text-sm px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-emerald-400" /> Devenez propriétaire à votre rythme
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
              
              {/* BLOC CONFIANCE ET GARANTIE BANCAIRE */}
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
                { icon: <MapPin className="w-6 h-6 text-emerald-500" />, title: "1. Choisissez votre site", desc: "Explorez nos lotissements d'avenir de Déni Birame Ndao et Gorom, et sélectionnez la parcelle idéale." },
                { icon: <Calendar className="w-6 h-6 text-emerald-500" />, title: "2. Versez en plusieurs fois", desc: "Payez votre apport initial (optionnel). Les mensualités suivantes sont déposées directement sur le compte bancaire du projet." },
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

          {/* --- SECTION SITES DISPONIBLES (DÉNI & GOROM) --- */}
          <section id="sites" className="py-20 bg-slate-100/70 border-t border-b border-slate-200/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#0f2a4a] sm:text-4xl">Nos Sites Disponibles</h2>
                  <p className="mt-2 text-slate-600">Explorez nos parcelles de choix à Déni Birame Ndao et Gorom.</p>
                </div>
                <span className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f2a4a] bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Opportunités exclusives
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {SITES_DATA.map((site) => (
                  <div key={site.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                    {/* Image principale du site */}
                    <div className="h-56 bg-slate-200 relative overflow-hidden">
                      <img 
                        src={site.images[0]} 
                        alt={site.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Disponible
                      </span>
                      <span className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg font-mono">
                        {site.coordinates}
                      </span>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0f2a4a] mb-2">{site.name}</h3>
                        <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                          <MapPin className="w-4.5 h-4.5 text-emerald-500" /> {site.location}
                        </div>
                        <p className="text-sm text-slate-600 mb-5 line-clamp-2">
                          {site.shortDesc}
                        </p>
                        <div className="bg-slate-50 p-4 rounded-2xl space-y-2 mb-6 border border-slate-100">
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tarifs & Options d'acquisition</p>
                          <ul className="text-xs text-slate-600 space-y-1.5">
                            <li>📐 Superficie : <span className="font-semibold text-[#0f2a4a]">{site.surface}</span></li>
                            <li>💰 Emplacement Standard : <span className="font-bold text-emerald-600">2 500 000 FCFA</span></li>
                            <li>💰 Emplacement d'Angle : <span className="font-bold text-[#0f2a4a]">3 500 000 FCFA</span></li>
                            <li>💰 Premier Plan / Route : <span className="font-bold text-[#0f2a4a]">4 000 000 FCFA</span></li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-semibold">Option d'achat</p>
                          <p className="text-lg font-extrabold text-[#0f2a4a]">Tranches Échelonnées</p>
                        </div>
                        <button 
                          onClick={() => setSelectedSite(site)}
                          className="bg-emerald-500 hover:bg-emerald-600 text-[#0f2a4a] font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 text-sm shadow-sm"
                        >
                          Simuler & Voir Diapo <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECTION PROMOTIONS ET CONTACTS DIRECTS --- */}
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
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
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

          {/* --- SECTION CONTACT & ASSISTANCE DIRECTE --- */}
          <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fadeIn">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#0f2a4a] sm:text-4xl">Prêt à lancer votre projet ?</h2>
              <p className="text-slate-600">
                Vous n'avez pas besoin de remplir un long formulaire. Contactez directement l'équipe de <strong>GIS-GIS IMMOBILIER</strong> par WhatsApp ou par téléphone pour démarrer l'étude de votre dossier.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href="https://wa.me/221781913490?text=Bonjour%20GIS-GIS%20IMMOBILIER,%20je%20souhaite%20intégrer%20le%20programme%20Dekkuwaye."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-[#0f2a4a] p-8 rounded-3xl shadow-md font-bold flex flex-col items-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#0f2a4a]/15 rounded-full flex items-center justify-center text-[#0f2a4a]">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <p className="text-lg">WhatsApp Direct</p>
                <p className="text-xs font-normal text-[#0f2a4a]/80">+221 78 191 34 90</p>
              </a>

              <a 
                href="tel:+221781913490"
                className="bg-white hover:bg-slate-50 text-[#0f2a4a] p-8 rounded-3xl shadow-sm border border-slate-200 font-bold flex flex-col items-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <p className="text-lg">Appeler le Directeur</p>
                <p className="text-xs font-normal text-slate-500">+221 78 191 34 90</p>
              </a>

              <a 
                href="tel:+221777780200"
                className="bg-white hover:bg-slate-50 text-[#0f2a4a] p-8 rounded-3xl shadow-sm border border-slate-200 font-bold flex flex-col items-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#0f2a4a]" />
                </div>
                <p className="text-lg">Service Commercial</p>
                <p className="text-xs font-normal text-slate-500">+221 77 778 02 00</p>
              </a>
            </div>
          </section>

        </main>
      )}

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