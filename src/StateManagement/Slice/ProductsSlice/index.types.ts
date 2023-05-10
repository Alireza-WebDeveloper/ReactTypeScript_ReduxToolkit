interface ProductsData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface StateData {
  data: ProductsData[];
  getLoad: boolean;
  getError: string;
  postLoad?: boolean;
  postError?: string;
  deleteLoad?: boolean;
  deleteError?: string;
  updateLoad?: boolean;
  updateError?: string;
}

export { ProductsData, StateData };
