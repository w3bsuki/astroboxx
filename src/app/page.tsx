import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Welcome to Astrobox
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                  A clean, modern portfolio showcasing our products and services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/products">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-base">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Featured Products
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-lg">
                  Discover our most popular products designed to meet your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((product) => (
                <div
                  key={product}
                  className="flex flex-col items-center space-y-4 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square w-full relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {product}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Product {product}</h3>
                    <p className="text-muted-foreground">
                      A brief description of product {product} and its features.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/products`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" asChild className="text-base">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Services
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-lg">
                  Professional services tailored to your specific requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((service) => (
                <div
                  key={service}
                  className="flex flex-col items-center space-y-4 rounded-xl border bg-card p-8"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {service}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Service {service}</h3>
                    <p className="text-muted-foreground">
                      A brief description of service {service} and what it
                      entails.
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/services`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" asChild className="text-base">
                <Link href="/services">View All Services</Link>
              </Button>
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
                  Contact us today to discuss how we can help with your project.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="mt-6 text-base"
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
