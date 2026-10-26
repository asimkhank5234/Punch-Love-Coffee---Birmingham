export type RoastLevel = 'Light' | 'Light-Medium' | 'Medium' | 'Medium-Dark' | 'Dark';
export type ProcessMethod = 'Washed' | 'Natural' | 'Honey' | 'Anaerobic Slow Dry';
export type GrindOption = 'Whole Bean' | 'Espresso / Moka' | 'Pour Over / Chemex' | 'Drip / Batch Brew' | 'French Press / Cold Brew';
export type BagSize = '12 oz (340g)' | '2 lb (907g)' | '5 lb (Bulk)';

export interface CoffeeProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'single-origin' | 'blend' | 'decaf' | 'merch';
  price: number;
  rating: number;
  reviewsCount: number;
  origin: string;
  farm: string;
  altitude: string;
  process: ProcessMethod;
  roastLevel: RoastLevel;
  tastingNotes: string[];
  description: string;
  brewRecommendation: string;
  image: string;
  isOrganic: boolean;
  isDirectTrade: boolean;
  badge?: string;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  product: CoffeeProduct;
  grind: GrindOption;
  size: BagSize;
  quantity: number;
  isSubscription: boolean;
  subscriptionInterval?: '2-weeks' | '4-weeks';
  pricePerUnit: number;
}

export interface Workshop {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'All Levels' | 'Advanced' | 'Beginner to Intermediate' | 'Beginner to Advanced';
  price: number;
  maxSeats: number;
  availableDays: string[];
  timeSlot: string;
  description: string;
  syllabus: string[];
  includes: string[];
  instructor: {
    name: string;
    title: string;
    avatar: string;
  };
  image: string;
  featured?: boolean;
}

export interface WorkshopBooking {
  id: string;
  workshopId: string;
  workshopTitle: string;
  date: string;
  timeSlot: string;
  participants: number;
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
  bookedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: 'Brew Guides' | 'Origin Stories' | 'Cafe Culture' | 'Roasting Science';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  coverImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  source: 'Google' | 'Workshop Attendee' | 'Subscriber';
  rating: number;
  date: string;
  text: string;
  highlight: string;
  verified: boolean;
}

export interface CafeMenuItem {
  category: string;
  items: {
    name: string;
    description: string;
    price: string;
    notes?: string;
    isHouseSpecial?: boolean;
  }[];
}
