export const siteContent = {
  phone: '+91 86557 79429',
  phoneRaw: '918655779429',
  email: 'support@manojgasfix.in',
  address: 'Thane, Mumbai',
  addressFull: 'Thane, Mumbai',
  workingHours: 'Mon – Sun, 8:00 AM – 9:00 PM',
  serviceCity: 'Thane',

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ],

  stats: [
    { value: '2–4 hrs', label: 'Same Day Service', sub: 'Book before 5 PM' },
    { value: '5,000+', label: 'Happy Customers', sub: `Across ${'Thane'}` },
    { value: '4.9★', label: 'Average Rating', sub: 'All platforms' },
  ],

  aboutStats: [
    { value: '5,000+', label: 'Homes Serviced' },
    { value: '10+', label: 'Years in Business' },
    { value: '4.9★', label: 'Avg Rating' },
    { value: '30-Day', label: 'Warranty' },
  ],

  whyChooseUs: [
    { title: 'Safety First, Always', desc: 'Every repair ends with a complete safety inspection and zero-leakage test.' },
    { title: '2–4 Hour Doorstep Arrival', desc: 'Certified technicians reach you the same day — not tomorrow, not next week.' },
    { title: '10+ Years Experience', desc: 'Thousands of repairs done right since 2014 across every corner of Thane & Mumbai.' },
    { title: '5,000+ Happy Homes', desc: 'Our ratings and repeat customers are the real proof of our work.' },
    { title: 'ID-Verified Technicians', desc: 'Every technician is background-checked, trained, and certified.' },
    { title: '30-Day Service Warranty', desc: 'If the same issue returns within 30 days, we fix it absolutely free.' },
  ],

  services: [
    {
      title: 'Gas Stove Repair',
      tagline: 'All brands, all problems — fixed the same day.',
      range: '₹299 – ₹999',
      time: '2–4 hrs',
      image: `${import.meta.env.BASE_URL}images/service-stove-repair.png`,
      badge: 'Most Popular',
      badgeColor: 'bg-primary',
      features: ['Prestige, Pigeon, Glen, Sunflame & more', 'Burner & nozzle replacement', 'Valve repair & knob fixing', 'Ignition & spark repair', '30-day workmanship warranty'],
    },
    {
      title: 'Deep Burner Cleaning',
      tagline: 'Blue flame restored. Cooking efficiency back.',
      range: '₹199 – ₹499',
      time: '1–2 hrs',
      image: null,
      badge: 'Best Value',
      badgeColor: 'bg-sapphire',
      features: ['Complete burner dismantling', 'Chemical degreasing & descaling', 'Jet & nozzle unclogging', 'Blue flame optimisation', 'Gas efficiency check'],
    },
    {
      title: 'Pipeline Installation',
      tagline: 'Safe, sealed, and professionally installed.',
      range: '₹599 – ₹1,999',
      time: '2–6 hrs',
      image: null,
      badge: null,
      badgeColor: null,
      features: ['ISI-certified pipes & fittings', 'Domestic & commercial setups', 'Pressure leak testing', 'Safety compliance checks', 'Post-install inspection'],
    },
    {
      title: 'Emergency Gas Leak',
      tagline: '24/7 emergency response — we arrive in 60 min.',
      range: '₹499 onwards',
      time: 'Within 60 Min',
      image: null,
      badge: '24/7 Emergency',
      badgeColor: 'bg-primary',
      features: ['24/7 response, including holidays', 'Electronic leak detection', 'Immediate sealing & repair', 'Full safety checklist', 'Written clearance certificate'],
    },
    {
      title: 'Auto Ignition Repair',
      tagline: 'Spark back in seconds — no more manual lighting.',
      range: '₹299 – ₹699',
      time: '1–3 hrs',
      image: null,
      badge: null,
      badgeColor: null,
      features: ['Spark module replacement', 'Electrode cleaning', 'Battery & wiring check', 'All brand compatibility', 'On-site testing'],
    },
    {
      title: 'Gas Regulator Service',
      tagline: 'Correct pressure. Safe flow. Every time.',
      range: '₹199 – ₹499',
      time: '30–60 Min',
      image: null,
      badge: null,
      badgeColor: null,
      features: ['Pressure calibration', 'Regulator replacement', 'Hose pipe inspection', 'Leak detection', 'Safety compliance'],
    },
  ],

  homeServices: [
    { title: 'Gas Stove Repair', desc: 'All Brands • 30 Day Warranty', image: `${import.meta.env.BASE_URL}images/service-stove-repair.png` },
    { title: 'Deep Burner Cleaning', desc: 'Blue Flame • Carbon Removal', image: null },
    { title: 'Pipeline Installation', desc: 'Safety Tested • New Fittings', image: null },
    { title: 'Emergency Gas Leak', desc: '24/7 Response • 60 Min Arrival', image: null },
  ],

  howItWorks: [
    { step: '01', title: 'Call or WhatsApp Us', desc: 'Tell us your issue and location in under 2 minutes. It is that simple.', extra: 'Available 8 AM – 9 PM, 7 days a week.' },
    { step: '02', title: 'Technician at Your Door', desc: 'A certified, ID-verified technician reaches you in 2–4 hours.', extra: 'Get SMS updates with the technician ETA.' },
    { step: '03', title: 'Fixed, Safe & Guaranteed', desc: 'Problem resolved correctly the first time, with full safety testing.', extra: 'Free re-service within 30 days.' },
  ],

  testimonials: [
    { name: 'Priya Sharma', location: 'Thane West', text: 'My gas stove was leaking gas near the knob. They reached within 45 minutes and fixed it with a new valve. Fully tested before leaving. Highly recommended!', rating: 5 },
    { name: 'Vikram Singh', location: 'Mulund, Mumbai', text: 'Deep burner cleaning done beautifully. My stove flame is perfectly blue now and cooking is faster. Very reasonable price too.', rating: 5 },
    { name: 'Fatima Khan', location: 'Vashi, Navi Mumbai', text: 'Booked online, technician arrived same day. The auto-ignition was repaired in 20 minutes with a 30-day warranty. Great service!', rating: 5 },
    { name: 'Rohit Malhotra', location: 'Dombivli', text: 'Pipeline installation was quick, clean, and professional. They checked for leaks with proper equipment and even explained everything. Very happy!', rating: 5 },
    { name: 'Anjali Verma', location: 'Ghodbunder Road, Thane', text: 'Had an emergency gas leak at night. They came within the hour, found the issue, and fixed it on the spot. Peace of mind restored.', rating: 5 },
    { name: 'Amit Desai', location: 'Kalyan, Mumbai', text: 'Honest pricing, no hidden charges. Regulator replaced at MRP with no markup. The technician was polite and punctual. Great experience overall.', rating: 5 },
  ],

  serviceAreas: {
    highDemand: ['Thane', 'Thane West', 'Thane East', 'Mulund', 'Vashi', 'Dombivli', 'Kalyan', 'Bhiwandi'],
    alsoCovered: ['Mumbai', 'Navi Mumbai', 'Powai', 'Ghatkopar', 'Borivali', 'Andheri', 'Dadar', 'Bandra', 'Mira Road', 'Bhayandar', 'Kopar Khairane', 'Nerul', 'Kharghar', 'Airoli', 'Belapur', 'Ulhasnagar', 'Ambernath', 'Badlapur', 'Boisar', 'Vasai', 'Virar', 'Panvel', 'Kamothe', 'Taloja'],
  },

  faqs: [
    {
      q: 'How fast can you reach my location in Thane?',
      a: 'We typically arrive within 2–4 hours of your call. For gas leak emergencies, we can be at your doorstep in under 60 minutes.',
    },
    {
      q: 'Do you repair all brands of gas stoves?',
      a: 'Yes! We repair all brands including Prestige, Glen, Elica, Faber, Butterfly, Pigeon, Sunflame, and imported models.',
    },
    {
      q: 'What if the problem returns after repair?',
      a: 'All our repairs come with a 30-day warranty. If the same issue returns, we fix it free of charge — no questions asked.',
    },
    {
      q: 'Are there any visiting charges?',
      a: 'We charge a ₹199 inspection fee, which is fully waived if you proceed with the repair.',
    },
    {
      q: 'Is it safe? How do you check for gas leaks?',
      a: 'Safety is our top priority. We use digital manometers and soap-solution testing on every single job to guarantee zero leaks.',
    },
  ],

  pricingPlans: [
    {
      name: 'Basic Inspection',
      price: '₹199',
      desc: 'Inspection fee waived on repair',
      popular: false,
      features: ['Expert inspection', 'Issue diagnosis', 'Transparent cost estimate', 'No obligation'],
    },
    {
      name: 'Standard Service',
      price: '₹399',
      desc: 'Starting price, full deep clean + tune',
      popular: true,
      features: ['Deep burner cleaning', 'Complete tune-up', 'Ignition & leak check', '30-day warranty'],
    },
    {
      name: 'Pipeline Install',
      price: '₹999',
      desc: 'Starting price, ISI-certified',
      popular: false,
      features: ['ISI-certified pipes', 'Professional installation', 'Pressure leak test', 'Safety certificate'],
    },
  ],

  priceTable: [
    { service: 'Gas Stove Repair (Single Burner)', range: '₹299 – ₹599' },
    { service: 'Gas Stove Repair (2/3 Burner)', range: '₹399 – ₹799' },
    { service: 'Deep Burner Cleaning', range: '₹199 – ₹499' },
    { service: 'Auto Ignition Repair', range: '₹299 – ₹699' },
    { service: 'Gas Regulator Service', range: '₹199 – ₹499' },
    { service: 'Emergency Gas Leak Fix', range: '₹499 onwards' },
    { service: 'Pipeline Installation', range: '₹999 onwards' },
    { service: 'Hose Pipe Replacement', range: '₹199 – ₹349' },
  ],

  pricingFaqs: [
    { q: 'Is the inspection fee waived if I get the repair done?', a: 'Yes, the ₹199 inspection fee is fully waived when you proceed with the repair.' },
    { q: 'Are spare parts included in the price?', a: 'Spare parts are billed separately at MRP with no markup at all.' },
    { q: 'Is there any call-out fee for emergencies?', a: 'No hidden fees. Emergency gas leak service starts at ₹499.' },
  ],
}
