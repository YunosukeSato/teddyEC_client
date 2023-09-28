type ImageAttributes = {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
  ext: string;
  formats: { thumbnail: Record<string, unknown> };
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: { public_id: string; resource_type: string };
  size: number;
  updatedAt: string;
  url: string;
};

type Data = {
  data: any;
  [data: number]: {
    attributes: ImageAttributes[];
  };
};

type ProductAttributes = {
  createdAt: string;
  description: string;
  image: Data;
  name: string;
  price: number;
  publishedAt: string;
  stock: number;
  updatedAt: string;
};

export type Product = {
  id: number;
  attributes: ProductAttributes;
};