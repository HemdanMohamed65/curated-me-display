
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Hello, I'm</span>
              <br />
              <span className="relative inline-block">
                Hemdan Mohamed
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              BackEnd .NET Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I create efficient and scalable applications with a focus on .NET technologies and backend development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg">
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('#contact', '_self')}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className={cn(
            "flex-1 relative",
            "before:absolute before:-top-4 before:-left-4 before:w-24 before:h-24 before:border-t-2 before:border-l-2 before:border-primary before:-z-10",
            "after:absolute after:-bottom-4 after:-right-4 after:w-24 after:h-24 after:border-b-2 after:border-r-2 after:border-primary after:-z-10"
          )}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
