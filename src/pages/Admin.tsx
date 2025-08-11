import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Upload } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Товар добавлен!",
        description: "Новый товар успешно добавлен в каталог.",
      });
      
      setFormData({
        name: "",
        price: "",
        category: "",
        description: "",
        image: ""
      });
      
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              АДМИН-ПАНЕЛЬ
            </h1>
            <p className="text-muted-foreground">
              Добавление новых товаров в каталог
            </p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Plus className="h-5 w-5 mr-2 text-primary" />
                Добавить новый товар
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Название товара</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Введите название товара"
                    required
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-foreground">Цена (₽)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="Введите цену"
                    required
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-foreground">Категория</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="outerwear">Верхняя одежда</SelectItem>
                      <SelectItem value="tshirts">Футболки</SelectItem>
                      <SelectItem value="pants">Брюки</SelectItem>
                      <SelectItem value="shoes">Обувь</SelectItem>
                      <SelectItem value="sweatshirts">Свитшоты</SelectItem>
                      <SelectItem value="accessories">Аксессуары</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-foreground">Описание</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Описание товара"
                    rows={4}
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image" className="text-foreground">URL изображения</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => handleInputChange("image", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="bg-secondary border-border"
                    />
                    <Button variant="outline" type="button" className="flex-shrink-0">
                      <Upload className="h-4 w-4 mr-2" />
                      Загрузить
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isLoading}
                >
                  {isLoading ? "Добавление..." : "Добавить товар"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;