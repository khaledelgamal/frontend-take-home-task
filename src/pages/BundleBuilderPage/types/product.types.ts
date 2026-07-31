export interface Variant {
  variant_id: string;
  color: string;
  price: string;
  sale_price?: string;
  discount_percentage?: string;
  stock_quantity: number;
  img_url: string;
}

type ProductType = "camera" | "accessory" | "sensor";
export interface Product {
  id: string;
  title: string;
  description: string;
  is_required?: boolean;
  type: ProductType;
  img_url: string;
  variants: Variant[];
}
