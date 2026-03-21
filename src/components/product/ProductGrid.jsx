import products from "@/data/product.json";
import ProductCard from "./ProductCard";
export default function ProductGrid() {
  return (
    <div
      className="grid grid-cols-1 gap-x-3 gap-y-10 p-5
      min-[450px]:grid-cols-2
      min-[575px]:grid-cols-3      
      min-[800px]:grid-cols-4
      min-[1000px]:grid-cols-5
      min-[1300px]:grid-cols-6
      min-[1600px]:grid-cols-7
      min-[2000px]:grid-cols-8"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
