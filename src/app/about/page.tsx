import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Award, Clock, Target } from "lucide-react";

export const metadata = {
  title: "About Us | Astrobox",
  description: "Learn more about Astrobox and our mission.",
};

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "John has over 15 years of experience in the industry and founded Astrobox with a vision to create innovative solutions.",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Jane leads our technical team and ensures that our products are built with the latest technologies and best practices.",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Johnson",
    role: "Head of Design",
    bio: "Michael brings creativity and user-centered design principles to all of our products and services.",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Williams",
    role: "Head of Marketing",
    bio: "Sarah develops our marketing strategies and ensures that our brand message reaches the right audience.",
    image: "/placeholder.svg",
  },
];

export default function AboutPage() {
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
                  About Astrobox
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn more about our company, our mission, and the team behind our products and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  Astrobox was founded in 2020 with a simple mission: to create innovative products and services that help businesses succeed in the digital age.
                </p>
                <p className="text-muted-foreground">
                  What started as a small team of passionate individuals has grown into a company that serves clients across the globe. We believe in combining cutting-edge technology with exceptional design to create solutions that not only look great but also deliver results.
                </p>
                <p className="text-muted-foreground">
                  Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for businesses of all sizes. We're proud of what we've accomplished so far, but we're even more excited about what the future holds.
                </p>
              </div>
              <div className="aspect-square w-full relative rounded-md overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">Our Story</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and collaboration to achieve exceptional results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from product development to customer service.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Efficiency</h3>
                <p className="text-muted-foreground">
                  We value efficiency and work smart to deliver solutions that save time and resources.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace innovation and continuously explore new technologies and approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground mt-2">
                Meet the talented individuals behind Astrobox.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="h-32 w-32 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-full flex items-center justify-center bg-primary/10">
                      <span className="text-xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground">{member.bio}</p>
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
                  Join Our Journey
                </h2>
                <p className="mx-auto max-w-[600px] opacity-90">
                  We're always looking for talented individuals to join our team. Check out our current openings.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                >
                  <Link href="/careers">View Careers</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 