import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id?: string;
  name: string;
  category: 'medicine' | 'equipment';
  description: string;
  specifications: string;
  sku: string;
  price: number;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
};

export type Client = {
  id?: string;
  name: string;
  logo_url: string;
  description: string;
  created_at?: string;
};

export type Testimonial = {
  id?: string;
  client_name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  created_at?: string;
};