export interface Variant {
  variant_id: string;
  color: string;
  price: string;
  sale_price?: string;
  discount_percentage?: string;
  stock_quantity: number;
  img_url: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  type: string;
  img_url: string;
  variants: Variant[];
}
