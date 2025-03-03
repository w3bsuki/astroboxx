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
    name: "Consulting",
    description:
      "Expert advice to help you make informed decisions and achieve your business goals.",
    benefits: [
      "Strategic planning and guidance",
      "Industry-specific expertise",
      "Data-driven recommendations",
      "Implementation support",
    ],
    process: [
      "Initial consultation",
      "Needs assessment",
      "Strategy development",
      "Implementation and follow-up",
    ],
  },
  {
    id: 2,
    name: "Development",
    description:
      "Custom software solutions designed to address your unique business challenges.",
    benefits: [
      "Tailored to your specific needs",
      "Scalable architecture",
      "Modern technology stack",
      "Ongoing support and maintenance",
    ],
    process: [
      "Requirements gathering",
      "Design and planning",
      "Development and testing",
      "Deployment and training",
    ],
  },
  {
    id: 3,
    name: "Training",
    description:
      "Comprehensive training programs to help your team maximize productivity.",
    benefits: [
      "Customized curriculum",
      "Hands-on workshops",
      "Expert instructors",
      "Ongoing support",
    ],
    process: [
      "Skills assessment",
      "Curriculum development",
      "Interactive training sessions",
      "Progress evaluation",
    ],
  },
];

export default function ServicesPage() {
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
                  Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  Professional services tailored to your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16">
              {services.map((service, index) => (
                <div key={service.id} className="grid gap-8 md:gap-12">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{service.name}</h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Our Process</h3>
                      <ol className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                              {i + 1}
                            </div>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div>
                    <Button asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                  {index < services.length - 1 && (
                    <div className="border-t border-border" />
                  )}
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
                  Contact us today to discuss how our services can help your business.
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