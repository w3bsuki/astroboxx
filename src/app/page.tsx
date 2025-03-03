import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to Astrobox
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A clean, modern portfolio showcasing our products and services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/products">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Featured Products
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  Discover our most popular products designed to meet your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((product) => (
                <div
                  key={product}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square w-full relative rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {product}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Product {product}</h3>
                    <p className="text-sm text-muted-foreground">
                      A brief description of product {product} and its features.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/products/product-${product}`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Our Services
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  Professional services tailored to your specific requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((service) => (
                <div
                  key={service}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6"
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {service}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">Service {service}</h3>
                    <p className="text-sm text-muted-foreground">
                      A brief description of service {service} and what it
                      entails.
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/services/service-${service}`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
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
                  Contact us today to discuss how we can help with your project.
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
