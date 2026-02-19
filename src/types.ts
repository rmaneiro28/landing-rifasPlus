


export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  isCompany?: boolean;
}

export interface GeminiResponse {
  suggestion: string;
  pricingAdvice: string;
  marketingHook: string;
}
