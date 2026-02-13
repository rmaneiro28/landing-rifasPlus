
export interface RafflePlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GeminiResponse {
  suggestion: string;
  pricingAdvice: string;
  marketingHook: string;
}
