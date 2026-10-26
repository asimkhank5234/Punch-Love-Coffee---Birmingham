import { CoffeeProduct, Workshop, BlogPost, Testimonial, CafeMenuItem } from '../types/coffee';

export const CAFE_INFO = {
  name: 'Punch Love Coffee',
  tagline: 'Organic, ethically sourced specialty roasters in Birmingham, AL',
  address: '4000 3rd Ave S #103, Birmingham, AL 35222',
  locationName: 'Inside MAKEbhm Makerspace',
  googleRating: 4.6,
  reviewCount: 207,
  priceRange: '$1–10',
  phone: '(205) 588-0888',
  email: 'hello@punchlovecoffee.com',
  instagram: 'https://www.instagram.com/punchlovecoffee/?hl=en',
  instagramHandle: '@punchlovecoffee',
  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 4:00 PM', isOpenDay: true },
    { days: 'Saturday', time: '8:00 AM – 4:00 PM', isOpenDay: true },
    { days: 'Sunday', time: '8:00 AM – 2:00 PM', isOpenDay: true },
  ],
  googleMapsUrl: 'https://maps.google.com/?q=Punch+Love+Coffee+Birmingham+AL+4000+3rd+Ave+S'
};

export const COFFEE_PRODUCTS: CoffeeProduct[] = [
  {
    id: 'plc-ethiopia-guji',
    name: 'Alabama Sunburst',
    subtitle: 'Ethiopia Guji Organic Natural',
    category: 'single-origin',
    price: 19.50,
    rating: 4.9,
    reviewsCount: 64,
    origin: 'Guji Zone, Oromia, Ethiopia',
    farm: 'Dambi Uddo Smallholders',
    altitude: '2,050 – 2,200m',
    process: 'Natural',
    roastLevel: 'Light',
    tastingNotes: ['Wild Blueberry', 'Jasmine Bloom', 'Raw Honey', 'Bergamot'],
    description: 'Our crown jewel natural lot from Guji. Hand-picked ripe red cherries sundried on raised African beds for 21 days. Yields explosive berry aromas, silky tea-like sweetness, and a sparkling citrus finish.',
    brewRecommendation: 'Hario V60 or Chemex at 1:16 ratio, 203°F water. 3-pour method to highlight floral aromatics.',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80',
    isOrganic: true,
    isDirectTrade: true,
    badge: 'Roaster’s Choice',
    inStock: true
  },
  {
    id: 'plc-makebhm-blend',
    name: 'MAKEbhm Studio Blend',
    subtitle: 'Flagship Espresso & Drip Roast',
    category: 'blend',
    price: 17.50,
    rating: 4.8,
    reviewsCount: 89,
    origin: 'Colombia & Guatemala Direct Trade',
    farm: 'Co-op San Pedro & Finca La Esperanza',
    altitude: '1,650 – 1,900m',
    process: 'Washed',
    roastLevel: 'Medium',
    tastingNotes: ['Milk Chocolate', 'Toasted Pecan', 'Sweet Clementine', 'Brown Sugar'],
    description: 'Named after our creative home in Birmingham. Formulated to be velvety in oat milk lattes and sweet as a balanced morning drip. Robust body, vibrant acidity, and comforting nutty warmth.',
    brewRecommendation: 'Versatile daily driver: perfect for Espresso, Moccamaster batch brew, and French Press.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    isOrganic: true,
    isDirectTrade: true,
    badge: 'Best Seller',
    inStock: true
  },
  {
    id: 'plc-colombia-pink-bourbon',
    name: 'Third Avenue Reserve',
    subtitle: 'Colombia Huila Pink Bourbon Micro-lot',
    category: 'single-origin',
    price: 22.00,
    rating: 5.0,
    reviewsCount: 42,
    origin: 'Huila, San Adolfo, Colombia',
    farm: 'Finca Las Flores (Johan Vergara)',
    altitude: '1,750m',
    process: 'Anaerobic Slow Dry',
    roastLevel: 'Light-Medium',
    tastingNotes: ['Pink Guava', 'Tangerine Marmalade', 'Panela', 'White Tea'],
    description: 'A prized varietal mutation of Red and Yellow Bourbon. Underwent 72 hours of temperature-controlled anaerobic cherry fermentation. Complex tropical vibrancy with juicy acidity and clean brown sugar lingering.',
    brewRecommendation: 'AeroPress inverted or Kalita Wave 185. 92°C brew temperature brings out exotic fruit notes.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80',
    isOrganic: true,
    isDirectTrade: true,
    badge: 'Limited Micro-Lot',
    inStock: true
  },
  {
    id: 'plc-guatemala-dark',
    name: 'Avondale Nightfall',
    subtitle: 'Guatemala Huehuetenango Organic Dark',
    category: 'single-origin',
    price: 18.00,
    rating: 4.7,
    reviewsCount: 51,
    origin: 'Huehuetenango, Guatemala',
    farm: 'ASODOBI Organic Cooperative',
    altitude: '1,800m',
    process: 'Washed',
    roastLevel: 'Dark',
    tastingNotes: ['Dark Bakers Chocolate', 'Smoked Molasses', 'Vanilla Bean', 'Toasted Cedar'],
    description: 'Crafted for those who crave deep, rich chocolate intensity without bitter carbon ash. Roasted slow and deep in small 12kg batches to caramelize inherent coffee sugars.',
    brewRecommendation: 'French Press or Cold Brew. Superb with a splash of cream or served iced on hot southern days.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isOrganic: true,
    isDirectTrade: true,
    inStock: true
  },
  {
    id: 'plc-costa-rica-honey',
    name: 'Tarrazú Honey Bloom',
    subtitle: 'Costa Rica Yellow Honey Micro-Mill',
    category: 'single-origin',
    price: 20.00,
    rating: 4.8,
    reviewsCount: 38,
    origin: 'Tarrazú Valley, Costa Rica',
    farm: 'Don Mayo Micro-Mill',
    altitude: '1,900m',
    process: 'Honey',
    roastLevel: 'Light-Medium',
    tastingNotes: ['Bing Cherry', 'Salted Caramel', 'Macadamia Nut', 'Red Apple'],
    description: 'Processed with partial fruit mucilage remaining on the parchment during patio drying. This imparts rich body, buttery mouthfeel, and candied fruit depth.',
    brewRecommendation: 'Pour-over with flat-bottom dripper. Ratio 1:16.5 at 200°F.',
    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=800&q=80',
    isOrganic: true,
    isDirectTrade: true,
    inStock: true
  },
  {
    id: 'plc-decaf-mountain-water',
    name: 'Cacao Dulce Decaf',
    subtitle: 'Colombia Organic Mountain Water Process',
    category: 'decaf',
    price: 18.50,
    rating: 4.9,
    reviewsCount: 29,
    origin: 'Huila, Colombia',
    farm: 'Smallholder Organic Association',
    altitude: '1,700m',
    process: 'Washed',
    roastLevel: 'Medium',
    tastingNotes: ['Milk Chocolate', 'Crisp Red Apple', 'Toffee', 'Almond'],
    description: 'Decaffeinated using pure glacier water from Pico de Orizaba, preserving 99.9% caffeine-free purity while keeping origin oils and sweetness intact. No chemical solvents, ever.',
    brewRecommendation: 'Evening pour-over or velvety espresso before bed. Rich crema and zero jitters.',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80',
    isOrganic: true,
    isDirectTrade: true,
    badge: '100% Chemical Free',
    inStock: true
  },
  {
    id: 'plc-gear-v60-kit',
    name: 'Hario V60 Craft Brewing Set',
    subtitle: 'Ceramic Dripper, Glass Server & 40 Filters',
    category: 'merch',
    price: 38.00,
    rating: 4.9,
    reviewsCount: 45,
    origin: 'Tokyo, Japan',
    farm: 'Hario Craft Goods',
    altitude: 'N/A',
    process: 'Washed',
    roastLevel: 'Medium',
    tastingNotes: ['Precision Flow', 'Heat Retention', 'Clean Cup Clarity'],
    description: 'The golden standard pour-over brewing kit used daily at our Punch Love barista counter. Includes matte white ceramic size 02 cone, 600ml borosilicate glass decanter, measuring scoop, and unbleached paper filters.',
    brewRecommendation: 'Use with medium-fine grind and goose-neck kettle for ideal contact time.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    isOrganic: false,
    isDirectTrade: false,
    inStock: true
  },
  {
    id: 'plc-merch-makebhm-mug',
    name: 'MAKEbhm Hand-Thrown Ceramic Mug',
    subtitle: 'Handmade by Studio Artisans (10 oz)',
    category: 'merch',
    price: 32.00,
    rating: 5.0,
    reviewsCount: 76,
    origin: 'Birmingham, AL',
    farm: 'MAKEbhm Ceramics Studio',
    altitude: 'Sea Level',
    process: 'Natural',
    roastLevel: 'Medium',
    tastingNotes: ['Artisanal Stoneware', 'Tactile Glaze', 'Ergonomic Handle'],
    description: 'Locally sculpted and kiln-fired in our MAKEbhm building by resident potters. Each mug features an unglazed toasted stoneware base, warm speckle cream interior, and debossed Punch Love emblem.',
    brewRecommendation: 'Hand wash recommended. Microwave and dishwasher safe.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isOrganic: false,
    isDirectTrade: false,
    badge: 'Local Birmingham Art',
    inStock: true
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-espresso-dialing',
    title: 'Espresso Fundamentals & Dialing-In',
    tagline: 'Master dose, yield, grind calibration, and temperature on commercial Synesso machines.',
    duration: '2.5 Hours',
    level: 'Beginner to Intermediate',
    price: 65,
    maxSeats: 6,
    availableDays: ['Every Saturday morning', 'Select Wednesday evenings'],
    timeSlot: '9:00 AM – 11:30 AM',
    description: 'Learn the exact science of crafting god-shot espresso. We take you behind our counter inside MAKEbhm to operate professional dual-boiler machines, calibrate optical burr grinders, evaluate extraction curves, and diagnose channeling.',
    syllabus: [
      'Anatomy of a Coffee Cherry & Solubility Variables',
      'The Golden Ratio: Weighing dry dose vs. liquid yield',
      'Micro-adjusting commercial burr grinders (coarse vs fine behavior)',
      'Tamping mechanics: leveling, distribution (WDT), and uniform pressure',
      'Taste calibration: identifying sour under-extraction vs bitter over-extraction'
    ],
    includes: [
      'Take-home 12 oz bag of Punch Love Whole Bean Roast ($19 value)',
      'Laminated Barista Dial-In Cheat Card & Brew Log',
      'Unlimited espresso tastings and palate training',
      'Punch Love Barista Certificate of Completion'
    ],
    instructor: {
      name: 'Julian Vance',
      title: 'Head Roaster & Q-Grader Trained Lead Barista',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    featured: true
  },
  {
    id: 'ws-latte-art',
    title: 'Latte Art & Milk Steaming Masterclass',
    tagline: 'Transform silky whole milk & oat milk into glossy microfoam and pour hearts, tulips, and rosettas.',
    duration: '2 Hours',
    level: 'All Levels',
    price: 55,
    maxSeats: 6,
    availableDays: ['Every Saturday afternoon', 'Sunday mornings'],
    timeSlot: '1:30 PM – 3:30 PM',
    description: 'Ever wondered how baristas create that silky wet-paint microfoam that pours effortlessly into intricate art? In this hands-on workshop, you will steam pitch after pitch of organic whole milk and oat milk, mastering aeration, vortex whirlpooling, pitcher tilt, and wrist cut-through.',
    syllabus: [
      'Milk Chemistry: Proteins, fats, and temperature sweet spots (135°F–145°F)',
      'Steaming wand technique: the stretch phase vs. texturing vortex',
      'Alternative milk mastery: dialed-in oat and almond steaming',
      'Pour physics: flow rate, cup angling, and distance from surface',
      'Pattern drills: The Monk’s Head, The Layered Heart, and 3-Tier Tulip'
    ],
    includes: [
      'Professional stainless steel milk pitcher to take home',
      'Organic milk and oat milk practice supplies',
      'High-res photo of your best pour for your social feed',
      '15% off Punch Love coffee beans and accessories'
    ],
    instructor: {
      name: 'Maya Henderson',
      title: 'Competition Barista & Cafe Beverage Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    image: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'ws-sensory-cupping',
    title: 'Sensory Cupping & Flavor Wheel Lab',
    tagline: 'Train your palate like an SCA coffee judge through blind cupping of rare origins.',
    duration: '2 Hours',
    level: 'All Levels',
    price: 45,
    maxSeats: 8,
    availableDays: ['Every Sunday morning', 'First Tuesday of month'],
    timeSlot: '10:00 AM – 12:00 PM',
    description: 'Experience an authentic Specialty Coffee Association (SCA) tasting table. We line up 8 distinct single origin roasts from Africa, Central America, South America, and Asia. Learn the ceremonial slurp technique to aerate coffee across your palate.',
    syllabus: [
      'The SCA Cupping Protocol: Crust breaking, spoon technique, and temperature curves',
      'Navigating the World Coffee Research Sensory Lexicon',
      'Identifying organic fruit acids (malic, citric, phosphoric, acetic)',
      'Processing differences: Natural vs Washed vs Anaerobic fermentation tasting',
      'Blind tasting challenge with prize bag for the top palate'
    ],
    includes: [
      'Official SCA cupping spoon engraved with Punch Love insignia',
      'Printed Coffee Taster’s Flavor Wheel guide',
      'Sampling 8 rare single origin micro-lots',
      '12 oz bag of your favorite cupped coffee'
    ],
    instructor: {
      name: 'Julian Vance',
      title: 'Head Roaster & Q-Grader Trained Lead Barista',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'ws-home-pourover',
    title: 'Home Pour-Over & Extraction Science',
    tagline: 'Demystify TDS, grind particle distributions, brew water minerals, and brew geometry.',
    duration: '2 Hours',
    level: 'Beginner to Advanced',
    price: 50,
    maxSeats: 6,
    availableDays: ['Every Thursday evening'],
    timeSlot: '5:30 PM – 7:30 PM',
    description: 'Transform your morning home kitchen routine into a world-class cafe experience. Bring your favorite home dripper (or use ours: V60, Chemex, Aeropress, Kalita, Origami) and learn how slight changes in water mineral content, pour speed, and bypass drastically affect flavor.',
    syllabus: [
      'The Science of Water: Total Dissolved Solids (TDS), calcium, and magnesium',
      'Brew geometries: Conical vs. Flat Bed flow dynamics',
      'Agitation and channeling: How pulse pouring prevents clogging',
      'Refractometer testing: measuring real extraction percentage (18-22%)',
      'Troubleshooting sour, muddy, or astringent brews at home'
    ],
    includes: [
      'Punch Love Home Brewer Recipe Guidebook',
      'Pack of 40 specialty filter papers of your choice',
      'Water mineral re-mineralization packet (Third Wave Water)',
      '12 oz bag of organic single-origin coffee'
    ],
    instructor: {
      name: 'Caleb Morgan',
      title: 'Head of Quality & Green Coffee Buyer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-dial-in-guide',
    title: 'The At-Home Dial-In Guide: Mastering the 1:16 Ratio and Water Temperature',
    slug: 'at-home-dial-in-guide',
    excerpt: 'Stop guessing your coffee brew. Discover how weighing your beans to the tenth of a gram and adjusting water temperature unlocks bright citrus notes without bitterness.',
    category: 'Brew Guides',
    readTime: '5 min read',
    publishDate: 'October 18, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Head Roaster',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80',
    tags: ['Brewing', 'Pour-Over', 'Espresso', 'Tutorial'],
    content: [
      'Every morning, millions of people brew coffee by eye—scooping roasted beans with a plastic spoon and pouring water from a standard kettle. But coffee extraction is chemistry in motion, and small precision shifts yield dramatic results in your cup.',
      '1. Why Grams Beat Scoops Every Time: Coffee beans vary significantly in density based on roast level and origin. A scoop of dense Ethiopian light roast weighs much more than a dark-roasted Guatemalan bean. Using a digital kitchen scale eliminates inconsistency entirely.',
      '2. The Universal Golden Ratio: For pour-overs, start at 1:16. That means 20g of freshly ground coffee to 320g of filtered water. If your cup tastes hollow or too bitter, tighten to 1:15; if it feels overly intense or dry, loosen to 1:17.',
      '3. Temperature Dictates Solubility: Light roasts need high heat (202°F–206°F) to dissolve dense cellular fruit sugars. Darker roasts extract rapidly, so cooler water (195°F–198°F) prevents extracting harsh ash flavors.',
      'Try applying this formula to our Alabama Sunburst Guji tomorrow morning—you will notice a clean floral jasmine aroma and vibrant blueberry sweetness you never knew was hiding in your mug.'
    ]
  },
  {
    id: 'blog-makebhm-story',
    title: 'Why We Roast at MAKEbhm: Craft, Community, and Industrial Soul',
    slug: 'why-we-roast-at-makebhm',
    excerpt: 'Nestled on 3rd Avenue South, MAKEbhm isn’t just our physical address—it’s the beating creative heart of Birmingham makers, woodworkers, printmakers, and ceramicists.',
    category: 'Cafe Culture',
    readTime: '4 min read',
    publishDate: 'October 8, 2026',
    author: {
      name: 'Maya Henderson',
      role: 'Cafe Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
    tags: ['Birmingham', 'MAKEbhm', 'Local Culture', 'Our Story'],
    content: [
      'When we set out to build Punch Love Coffee in Birmingham, Alabama, we didn’t want an aloof, sterile retail space. We wanted somewhere where sawdust flies, pottery wheels spin, and passionate people build real things with their hands.',
      'MAKEbhm at 4000 3rd Ave South provided the perfect home. Walk through our doors on any weekday morning and you will hear the rhythmic crackle of our drum roaster syncing with the hum of the print studio next door.',
      'The ceramic mugs you sip from at our bar? They are hand-thrown 50 feet away in the ceramic wing. The timber bar tops were planed by resident woodworkers. Punch Love Coffee was built to nourish and fuel this community, one cup at a time.'
    ]
  },
  {
    id: 'blog-washed-vs-natural',
    title: 'Natural vs. Washed Processing: Unraveling What Makes African Coffees So Fruity',
    slug: 'natural-vs-washed-processing',
    excerpt: 'Ever wonder why some coffees taste like dark chocolate and caramel while others taste like wild strawberry jam? The secret lies in how the fruit is removed after harvest.',
    category: 'Roasting Science',
    readTime: '6 min read',
    publishDate: 'September 24, 2026',
    author: {
      name: 'Caleb Morgan',
      role: 'Quality & Green Buyer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    tags: ['Origin', 'Processing', 'Coffee Education', 'Ethiopia'],
    content: [
      'Coffee does not grow as a brown roasted bean—it begins as a sweet, fleshy cherry on a tree. How farmers remove that pulp and dry the inner seed determines almost half the flavor profile in your morning brew.',
      'In the Washed (Wet) Process, cherries are depulped immediately and fermented in water tanks to remove mucilage. This yields exceptional cleanliness, transparent acidity, and bright floral or crisp citrus notes.',
      'In the Natural (Dry) Process, intact cherries dry slowly under the sun on raised African beds for weeks. The drying seed absorbs the sweet sugars of the surrounding pulp, resulting in lush fruit explosions—notes of wild blueberry, blackberry, and winey sweetness.',
      'We roast both methods side by side so you can taste the wonder of origin terroir in every sip.'
    ]
  },
  {
    id: 'blog-direct-trade-ethics',
    title: 'From Seed to Cup: Transparent Direct-Trade with Huila Micro-Mills',
    slug: 'from-seed-to-cup-direct-trade',
    excerpt: 'Paying Fair Trade minimums isn’t enough. Here is how our direct pricing model ensures Colombian smallholder farmers receive over 250% of the C-Market commodity baseline.',
    category: 'Origin Stories',
    readTime: '5 min read',
    publishDate: 'September 12, 2026',
    author: {
      name: 'Julian Vance',
      role: 'Head Roaster',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=1000&q=80',
    tags: ['Direct Trade', 'Sustainability', 'Farmers', 'Colombia'],
    content: [
      'The global coffee commodity market fluctuates wildly, often forcing farmers to sell their labor below the true cost of production. At Punch Love Coffee, we reject this extractive cycle.',
      'By working directly with micro-mills like Finca Las Flores in Huila and smallholder associations in Huehuetenango, we contract lots months ahead and guarantee premium prices that reward regenerative soil practices and living wages.',
      'When you purchase a bag of Third Avenue Reserve, you aren’t just getting world-class coffee; you are investing in sustainable agrarian communities.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Sarah Jenkins',
    location: 'Birmingham Local & Architect',
    source: 'Google',
    rating: 5,
    date: '3 weeks ago',
    highlight: 'Hands down the best espresso in Birmingham.',
    text: 'Tucked inside MAKEbhm, Punch Love is the real deal. The baristas know their craft inside and out. I grabbed a cortado with their MAKEbhm blend and bought a bag of the Ethiopia Guji. The floral aromatics are unbelievable. Incredible welcoming atmosphere!',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Marcus Thornton',
    location: 'Homewood, AL',
    source: 'Workshop Attendee',
    rating: 5,
    date: '1 month ago',
    highlight: 'The Barista Workshop changed my morning routine forever!',
    text: 'Attended the Saturday Espresso Fundamentals class with Julian. He explained extraction ratios so clearly, and getting to pull shots on commercial machines until we dialed in the sweet spot was worth triple the price. Plus you get a fresh bag of beans to take home!',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Elena Rostova',
    location: 'Avondale, Birmingham',
    source: 'Google',
    rating: 5,
    date: '2 months ago',
    highlight: 'Creative makerspace vibe with $1–10 pricing that respects your wallet.',
    text: 'Love working here during weekday mornings. High ceilings, industrial maker aesthetic, delicious natural wines & oat lattes under $6. Their single-origin pour overs are treated with so much respect. 4.6 stars is well-earned.',
    verified: true
  },
  {
    id: 'test-4',
    author: 'David Chen',
    location: 'Coffee Subscription Member',
    source: 'Subscriber',
    rating: 5,
    date: '1 month ago',
    highlight: 'Roast dates are always within 48 hours of doorstep delivery.',
    text: 'I subscribed to the 2-week roaster choice bag. Every delivery arrives smelling like heaven. The Pink Bourbon micro-lot blew my mind with tropical guava and brown sugar notes. Can’t recommend Punch Love enough.',
    verified: true
  },
  {
    id: 'test-5',
    author: 'Jessica Morales',
    location: 'Birmingham, AL',
    source: 'Google',
    rating: 5,
    date: 'Just recently',
    highlight: 'Latte art masterclass was a fantastic date experience.',
    text: 'My partner and I booked the Latte Art session. Maya is an exceptional instructor with infinite patience. We finally learned how to steam proper microfoam without huge bubbles. Delicious pastries and warm people.',
    verified: true
  }
];

export const CAFE_MENU: CafeMenuItem[] = [
  {
    category: 'Espresso Bar',
    items: [
      { name: 'Espresso (Double Shot)', description: 'Dialed daily with rotating single origin or MAKEbhm blend', price: '$3.50', isHouseSpecial: false },
      { name: 'Cortado (1:1 Ratio)', description: 'Equal parts textured steamed milk and silky espresso', price: '$4.00', isHouseSpecial: true },
      { name: 'Cappuccino (6 oz)', description: 'Traditional velvet foam crown with rich cocoa dusting', price: '$4.25' },
      { name: 'Flat White (6 oz)', description: 'Ristretto double shot with micro-textured whole or oat milk', price: '$4.50' },
      { name: 'Punch Love Latte (12 oz)', description: 'Smooth double shot espresso with choice of organic milk', price: '$5.00' },
      { name: 'Americano (Hot or Iced)', description: 'Double shot pulled over filtered reverse-osmosis water', price: '$3.75' }
    ]
  },
  {
    category: 'Filter & Cold Coffee',
    items: [
      { name: 'Daily Batch Brew', description: 'Freshly ground medium roast brewed on Moccamaster', price: '$3.25' },
      { name: 'Single Origin Hand Pour-Over', description: 'Manual Hario V60 brew of your chosen single origin lot', price: '$5.50', isHouseSpecial: true },
      { name: 'Draft Cold Brew (16 oz)', description: 'Steeped for 18 hours cold; chocolatey and crisp', price: '$4.50' },
      { name: 'Flash-Chilled Nitro Brew', description: 'Infused with nitrogen for a creamy Guinness-like head', price: '$5.25' }
    ]
  },
  {
    category: 'Signature Creations',
    items: [
      { name: 'Honey Cinnamon Cortado', description: 'Local Alabama wildflower honey, Saigon cinnamon, espresso', price: '$4.75', isHouseSpecial: true },
      { name: 'Smoked Vanilla Sea Salt Latte', description: 'Bourbon vanilla bean syrup, Maldon sea salt flake', price: '$5.75' },
      { name: 'Espresso Tonic with Rosemary', description: 'Fever-Tree tonic, espresso float, bruised fresh rosemary', price: '$5.50' },
      { name: 'Ceremonial Uji Matcha Latte', description: 'Stone-ground Japanese green tea with steamed oat milk', price: '$5.50' }
    ]
  },
  {
    category: 'Bakery & Light Bites',
    items: [
      { name: 'Cardamom Morning Bun', description: 'Flaky laminated pastry infused with fresh cracked cardamom', price: '$4.50' },
      { name: 'Almond Chocolate Croissant', description: 'Twice-baked butter croissant with frangipane & Valrhona dark chocolate', price: '$5.00' },
      { name: 'Avocado Toast on Sourdough', description: 'Makerspace sourdough, smashed Haas avocado, chili crunch, microgreens', price: '$8.50' },
      { name: 'Oatmeal Pecan Cookie', description: 'Locally baked with toasted Alabama pecans and sea salt', price: '$3.25' }
    ]
  }
];
