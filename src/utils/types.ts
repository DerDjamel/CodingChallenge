export type ProductType = {
  id: string;
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
};

export type CartItemType = {
  quantity: number;
  product: ProductType;
};
