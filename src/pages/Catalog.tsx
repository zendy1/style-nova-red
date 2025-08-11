import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

const Catalog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            КАТАЛОГ ТОВАРОВ
          </h1>
          <p className="text-muted-foreground text-lg">
            Вся коллекция в одном месте
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="outerwear">Верхняя одежда</SelectItem>
                  <SelectItem value="tshirts">Футболки</SelectItem>
                  <SelectItem value="pants">Брюки</SelectItem>
                  <SelectItem value="shoes">Обувь</SelectItem>
                  <SelectItem value="accessories">Аксессуары</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Сначала новые</SelectItem>
                  <SelectItem value="price-low">Сначала дешевые</SelectItem>
                  <SelectItem value="price-high">Сначала дорогие</SelectItem>
                  <SelectItem value="popular">Популярные</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
    </div>
  );
};

export default Catalog;