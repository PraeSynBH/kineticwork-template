import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Palette, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next.js 16 + App Router",
    description:
      "Full-stack React with Server Components, streaming, and the latest App Router patterns.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS 4 + shadcn/ui",
    description:
      "Utility-first styling with beautiful, accessible components — copy, paste, and own.",
  },
  {
    icon: Shield,
    title: "TypeScript Strict Mode",
    description:
      "End-to-end type safety with strict compiler flags, ESLint, and Prettier pre-configured.",
  },
  {
    icon: Code2,
    title: "CI/CD Ready",
    description:
      "GitHub Actions pipeline for linting, type checking, and testing out of the box.",
  },
];

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript 5",
  "Tailwind CSS 4",
  "shadcn/ui",
  "Prisma",
  "NextAuth.js",
  "PostgreSQL",
  "React Hook Form",
  "Zod",
  "TanStack Query",
  "Lucide Icons",
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center gap-8">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              KineticWork Starter Template
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Web applications{" "}
              <span className="text-[--brand]">that work</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              A production-ready starter for building fast, reliable, and
              maintainable web applications with the KineticWork methodology.
              Scaffolded with Next.js, TypeScript, Tailwind, and shadcn/ui.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://github.com/PraeSyn/kineticwork-template"
                className={buttonVariants({ size: "lg" })}
              >
                View on GitHub
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/api/health"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                API Health Check
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[--brand] to-[--brand-400] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to ship
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pre-configured with the KineticWork default stack — start building
              on day one, not configuring tooling for a week.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-muted/60">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-[--brand]" />
                  <CardTitle className="mt-4 text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 sm:py-32 bg-muted/50 border-t">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Default technology stack
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These are the KineticWork defaults. Every tool is chosen for
              velocity, reliability, and maintainability.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-[#18181b] px-6 py-24 text-center shadow-2xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-zinc-400">
              Clone this template, run <code className="rounded bg-white/10 px-2 py-0.5 text-sm">pnpm dev</code>, and start
              building your next web application.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://github.com/PraeSyn/kineticwork-template"
                className={buttonVariants({ size: "lg", variant: "secondary" })}
              >
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <span className="text-[--brand] font-medium">KineticWork</span> —
              a{" "}
              <a
                href="https://praesyn.com"
                className="underline underline-offset-4 hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                PraeSyn
              </a>{" "}
              brand.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PraeSyn, LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}