export interface ReviewItem {
  title: string;
  image_url: string;
  price: string;
  oldPrice?: string;
  quantity?: number;
  is_required?: boolean;
  onQuantityChange?: (newValue: number) => void;
}
