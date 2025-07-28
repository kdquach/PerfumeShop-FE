import axiosInstance from "./axios";

interface Product {
  name: string;
  brand: string;
  description: string;
  scentProfile: string[];
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  rating: number;
  gender: string;
  longevity: string;
  imageURLs: string[];
}
