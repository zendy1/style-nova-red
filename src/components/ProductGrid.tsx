import ProductCard from "./ProductCard";

const mockProducts = [
  {
    id: "1",
    name: "Черная куртка Premium",
    price: 15990,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    category: "Верхняя одежда"
  },
  {
    id: "2", 
    name: "Красная футболка Oversize",
    price: 3990,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Футболки"
  },
  {
    id: "3",
    name: "Черные джинсы Slim",
    price: 8990,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    category: "Брюки"
  },
  {
    id: "4",
    name: "Красные кроссовки",
    price: 12990,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    category: "Обувь"
  },
  {
    id: "5",
    name: "Черный свитшот",
    price: 6990,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    category: "Свитшоты"
  },
  {
    id: "6",
    name: "Красная шапка",
    price: 2990,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500",
    category: "Аксессуары"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            НОВАЯ КОЛЛЕКЦИЯ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Откройте для себя самые актуальные тренды сезона в нашей новой коллекции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;