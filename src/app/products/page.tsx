import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Products | Astrobox",
  description: "Discover our range of products designed to meet your needs.",
};

const products = [
  {
    id: 1,
    name: "Product 1",
    description:
      "A comprehensive description of product 1 and its features. This product is designed to solve specific problems and provide value to customers.",
    features: [
      "Feature 1: Detailed explanation of this feature",
      "Feature 2: Detailed explanation of this feature",
      "Feature 3: Detailed explanation of this feature",
    ],
    price: "$99",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "A comprehensive description of product 2 and its features. This product is designed to solve specific problems and provide value to customers.",
    features: [
      "Feature 1: Detailed explanation of this feature",
      "Feature 2: Detailed explanation of this feature",
      "Feature 3: Detailed explanation of this feature",
    ],
    price: "$149",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Product 3",
    description:
      "A comprehensive description of product 3 and its features. This product is designed to solve specific problems and provide value to customers.",
    features: [
      "Feature 1: Detailed explanation of this feature",
      "Feature 2: Detailed explanation of this feature",
      "Feature 3: Detailed explanation of this feature",
    ],
    price: "$199",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Product 4",
    description:
      "A comprehensive description of product 4 and its features. This product is designed to solve specific problems and provide value to customers.",
    features: [
      "Feature 1: Detailed explanation of this feature",
      "Feature 2: Detailed explanation of this feature",
      "Feature 3: Detailed explanation of this feature",
    ],
    price: "$249",
    image: "/placeholder.svg",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Products
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our range of products designed to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col space-y-4 rounded-lg border bg-card p-6 shadow-sm"
                >
                  <div className="aspect-video w-full relative rounded-md overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {product.id}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-muted-foreground">{product.description}</p>
                    <div className="pt-2">
                      <h3 className="font-medium mb-2">Key Features:</h3>
                      <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xl font-bold">{product.price}</span>
                      <Button asChild>
                        <Link href={`/products/product-${product.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] opacity-90">
                  Contact us today to discuss how our products can help you.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="mt-4"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 