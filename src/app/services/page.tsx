import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Services | Astrobox",
  description: "Professional services tailored to your specific requirements.",
};

const services = [
  {
    id: 1,
    name: "Service 1",
    description:
      "A comprehensive description of service 1 and what it entails. This service is designed to solve specific problems and provide value to customers.",
    benefits: [
      "Benefit 1: How this will help your business",
      "Benefit 2: How this will help your business",
      "Benefit 3: How this will help your business",
    ],
    process: [
      "Initial consultation to understand your needs",
      "Development of a customized plan",
      "Implementation of the solution",
      "Ongoing support and maintenance",
    ],
  },
  {
    id: 2,
    name: "Service 2",
    description:
      "A comprehensive description of service 2 and what it entails. This service is designed to solve specific problems and provide value to customers.",
    benefits: [
      "Benefit 1: How this will help your business",
      "Benefit 2: How this will help your business",
      "Benefit 3: How this will help your business",
    ],
    process: [
      "Initial consultation to understand your needs",
      "Development of a customized plan",
      "Implementation of the solution",
      "Ongoing support and maintenance",
    ],
  },
  {
    id: 3,
    name: "Service 3",
    description:
      "A comprehensive description of service 3 and what it entails. This service is designed to solve specific problems and provide value to customers.",
    benefits: [
      "Benefit 1: How this will help your business",
      "Benefit 2: How this will help your business",
      "Benefit 3: How this will help your business",
    ],
    process: [
      "Initial consultation to understand your needs",
      "Development of a customized plan",
      "Implementation of the solution",
      "Ongoing support and maintenance",
    ],
  },
];

export default function ServicesPage() {
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
                  Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Professional services tailored to your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col md:flex-row gap-8 rounded-lg border bg-card p-6 shadow-sm"
                >
                  <div className="md:w-1/3 space-y-4">
                    <div className="p-2 rounded-full bg-primary/10 w-fit">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">
                          {service.id}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold">{service.name}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button asChild>
                      <Link href={`/services/service-${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Our Process</h3>
                      <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                        {service.process.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
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
                  Contact us today to discuss how our services can help your business.
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