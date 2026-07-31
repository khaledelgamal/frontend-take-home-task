export interface PlanVariant {
  variant_id: string;
  billing_cycle: "Monthly" | "Annual";
  price: string;
  sale_price?: string;
  description?: string;
}

export interface Plan {
  id: string;
  title: string;
  features: string[];
  recommended?: boolean;
  variants: PlanVariant[];
}
