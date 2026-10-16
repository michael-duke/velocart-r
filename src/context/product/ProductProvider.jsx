import { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { useMemo } from "react";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:3000/api/v1/products");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  const value = useMemo(() => ({ products }), [products]);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
