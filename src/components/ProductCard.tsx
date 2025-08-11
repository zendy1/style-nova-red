import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border-border bg-card hover:bg-card/80 transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-brand-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
            <Eye className="h-4 w-4 mr-2" />
            Просмотр
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-primary">
            {product.price.toLocaleString()} ₽
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;