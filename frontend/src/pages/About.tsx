import {
  ArrowRight,
  Code2,
  Cpu,
  Heart,
  Layers3,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Hero */}

      <section className="relative px-6 pb-20 pt-20 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-125 w-125 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
              <Heart size={15} className="text-violet-600" />
              Built with purpose
            </div>

            <h1 className="text-5xl font-black tracking-tighter sm:text-6xl lg:text-8xl">
              File tools should
              <br />
              <span className="text-violet-600">just work.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
              Nova Stream is a lightweight file utility platform focused on
              making everyday file operations fast, simple and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}

      <section className="border-t border-zinc-200 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Why Nova Stream
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Less friction.
              <br />
              More doing.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-500">
            <p>
              Working with files on the web often means dealing with complicated
              interfaces, unnecessary accounts and tools that make simple tasks
              feel harder than they should.
            </p>

            <p>
              Nova Stream takes the opposite approach. Upload your file, choose
              what you want to do and get the result. The interface stays out of
              your way.
            </p>

            <p>
              The project started with image conversion and is being designed to
              grow into a broader collection of practical file utilities.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Our principles
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Simple decisions.
              <br />
              Strong foundations.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Principle
              icon={Sparkles}
              title="Keep it simple"
              text="Every feature should reduce friction, not introduce another layer of complexity."
            />

            <Principle
              icon={Rocket}
              title="Performance matters"
              text="File processing should feel immediate. The underlying infrastructure is built with that goal in mind."
            />

            <Principle
              icon={Layers3}
              title="Build for the future"
              text="The architecture is designed so new file utilities can be added without rebuilding the entire product."
            />
          </div>
        </div>
      </section>

      {/* Technology */}

      <section className="border-y border-zinc-200 bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
                Under the hood
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Built on a
                <br />
                solid stack.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-zinc-500">
                Nova Stream uses a modern frontend and a performance-focused Go
                backend for processing files efficiently.
              </p>

              <a
                href="https://github.com/Anos714/NovaStream"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3.5 text-sm font-semibold transition hover:bg-zinc-100"
              >
                <FaGithub size={17} />
                View source
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <TechCard
                icon={Code2}
                name="React"
                description="Fast and flexible frontend"
              />

              <TechCard
                icon={Server}
                name="Go + Fiber"
                description="High-performance API"
              />

              <TechCard
                icon={Cpu}
                name="libvips"
                description="Efficient image processing"
              />

              <TechCard
                icon={Layers3}
                name="TypeScript"
                description="Reliable frontend code"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-violet-600 p-8 text-white sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-200">
                What's next
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Nova Stream is just getting started.
              </h2>

              <p className="mt-6 text-lg leading-8 text-violet-100">
                Image conversion is only the beginning. The platform is being
                expanded with more tools for compression and file processing.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                "Image compression",
                "PDF compression",
                "More file utilities",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              Try Nova Stream
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

interface PrincipleProps {
  icon: React.ElementType;
  title: string;
  text: string;
}

function Principle({ icon: Icon, title, text }: PrincipleProps) {
  return (
    <div className="rounded-4xl border border-zinc-200 bg-white p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
        <Icon size={22} />
      </div>

      <h3 className="mt-7 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-500">{text}</p>
    </div>
  );
}

interface TechCardProps {
  icon: React.ElementType;
  name: string;
  description: string;
}

function TechCard({ icon: Icon, name, description }: TechCardProps) {
  return (
    <div className="rounded-4xl border border-zinc-200 bg-[#fafafa] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
        <Icon size={20} />
      </div>

      <h3 className="mt-6 text-lg font-bold">{name}</h3>

      <p className="mt-2 text-sm text-zinc-500">{description}</p>
    </div>
  );
}
