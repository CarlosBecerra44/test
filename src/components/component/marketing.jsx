/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/KWpZVJDziIa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function marketing() {
  const products = [
    {
      id: 1,
      name: "Servicio de Diseño Gráfico",
      description: "Creamos diseños únicos y atractivos para tu negocio.",
      category: "Servicios",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Paquete de Branding",
      description: "Desarrollamos tu identidad de marca de manera integral.",
      category: "Servicios",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Sitio Web Personalizado",
      description: "Construimos tu presencia online a medida de tus necesidades.",
      category: "Servicios",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Camisetas Personalizadas",
      description: "Imprime tus diseños en camisetas de alta calidad.",
      category: "Productos",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Tazas Personalizadas",
      description: "Lleva tu marca a todas partes con nuestras tazas únicas.",
      category: "Productos",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Bolsas Ecológicas",
      description: "Promueve tu negocio de manera sostenible con nuestras bolsas.",
      category: "Productos",
      image: "/placeholder.svg",
    },
  ]
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      return matchesSearch && matchesCategory
    });
  }, [searchTerm, selectedCategories])
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }
  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products])
  return (
    (<div className="w-full">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Nuestros Productos y Servicios</h1>
      </header>
      <div className="px-4 md:px-6 py-8">
        <div className="flex items-center mb-6">
          <div className="relative flex-1">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={handleSearch} />
          </div>
          <div className="ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <div className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filtrar</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filtrar por categoría</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategorySelect(category)}>
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <img
                src="/placeholder.svg"
                alt={product.name}
                width={300}
                height={200}
                className="rounded-t-lg object-cover w-full aspect-[3/2]" />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>)
  );
}