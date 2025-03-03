"use client";

import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Astrobox</h3>
            <p className="text-sm text-muted-foreground">
              Clean, modern portfolio showcasing our products and services.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/product-1"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product 1
                </Link>
              </li>
              <li>
                <Link
                  href="/products/product-2"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product 2
                </Link>
              </li>
              <li>
                <Link
                  href="/products/product-3"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product 3
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/service-1"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Service 1
                </Link>
              </li>
              <li>
                <Link
                  href="/services/service-2"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Service 2
                </Link>
              </li>
              <li>
                <Link
                  href="/services/service-3"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Service 3
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Astrobox. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 