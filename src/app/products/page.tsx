import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Products | Astrobox",
  description: "Discover our range of products designed to meet your needs.",
};

const products = [
  {
    id: 1,
    name: "Product One",
    description:
      "Our flagship product designed to help you achieve your goals with minimal effort.",
    features: [
      "Feature 1: Easy to use interface",
      "Feature 2: Advanced analytics",
      "Feature 3: Cloud integration",
      "Feature 4: 24/7 support",
    ],
    price: "$99",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Product Two",
    description:
      "A comprehensive solution for businesses looking to scale their operations.",
    features: [
      "Feature 1: Team collaboration",
      "Feature 2: Workflow automation",
      "Feature 3: Custom reporting",
      "Feature 4: API access",
    ],
    price: "$199",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Product Three",
    description:
      "The ultimate tool for professionals who demand the best in class performance.",
    features: [
      "Feature 1: Enterprise-grade security",
      "Feature 2: Dedicated account manager",
      "Feature 3: Custom integrations",
      "Feature 4: Priority support",
    ],
    price: "$299",
    image: "/placeholder.svg",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Our Products
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  Discover our range of products designed to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products List Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold">{product.name}</h2>
                      <p className="mt-2 text-lg text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold">{product.price}</p>
                      <Button asChild>
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground/50">
                      Product {product.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] opacity-90 text-lg">
                  Contact us today to discuss how our products can help with your needs.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="mt-6"
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