import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Award, Clock, Target } from "lucide-react";

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
    bio: "Jane leads our technical team with her expertise in cutting-edge technologies and passion for creating exceptional products.",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Johnson",
    role: "Head of Design",
    bio: "Michael brings creativity and user-centered design principles to every project, ensuring our products are both beautiful and functional.",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Williams",
    role: "Head of Marketing",
    bio: "Sarah develops our marketing strategies with a focus on building meaningful connections with our customers and partners.",
    image: "/placeholder.svg",
  },
];

export default function AboutPage() {
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
                  About Astrobox
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  Learn more about our company, our mission, and the team behind our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2015, Astrobox began with a simple mission: to create innovative solutions that help businesses thrive in the digital age.
                </p>
                <p className="text-lg text-muted-foreground">
                  What started as a small team of passionate individuals has grown into a company known for its commitment to excellence, customer satisfaction, and cutting-edge technology.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we serve clients across various industries, providing them with the tools and services they need to succeed in an increasingly competitive landscape.
                </p>
              </div>
              <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground/50">
                  Our Story
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-[700px] mx-auto">
                These core principles guide everything we do and help us deliver exceptional value to our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and partnership, both internally and with our clients.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from product development to customer service.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                <p className="text-muted-foreground">
                  We value efficiency and work to optimize processes and solutions for maximum impact.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace innovation and continuously seek new ways to solve complex problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Meet the talented individuals who make our success possible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-muted/30 rounded-xl p-6 text-center">
                  <div className="aspect-square bg-muted rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground/50">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
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
                  Join Our Team
                </h2>
                <p className="mx-auto max-w-[600px] opacity-90 text-lg">
                  We're always looking for talented individuals to join our growing team.
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