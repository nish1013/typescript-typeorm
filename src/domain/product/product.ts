export interface NewProduct {
  code: string;
  name: string;
  description?: string;
}

export interface Product extends NewProduct {
  id: number;
}
