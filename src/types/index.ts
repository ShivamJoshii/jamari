// Product Types
export interface ProductVariant {
  id: string;
  size: string;
  sizeLabel: string;
  stockQuantity: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'shirt' | 'shorts';
  price: number;
  description: string;
  slug: string;
  featured: boolean;
  image: string;
  variants: ProductVariant[];
}

// Cart Types
export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

// Order Types
export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: CustomerInfo;
  subtotal: number;
  shipping: number;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}

// Navigation
export type Page = 'home' | 'shop' | 'product' | 'checkout' | 'success';
