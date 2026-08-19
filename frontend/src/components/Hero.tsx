import {
  ArrowDown,
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

// import { FaGithub } from "react-icons/fa";

import Converter from "./Converter";

export default function Hero() {
  return (
    <main className="overflow-hidden bg-[#fafafa]">
      {/* HERO */}

      <section className="relative px-6 pb-16 pt-16 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-28">
        {/* Background */}

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="pointer-events-none absolute left-0 top-80 -z-10 h-75 w-75 rounded-full bg-fuchsia-100/40 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          {/* Badge */}

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-600 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500" />
              Fast, free & easy to use
              <Sparkles size={13} className="text-violet-500" />
            </div>
          </div>

          {/* Heading */}

          <div className="mx-auto mt-7 max-w-5xl text-center">
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-8xl">
              Convert images.
              <br />
              <span className="text-violet-600">Keep it simple.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              Convert JPEG, PNG, WebP and AVIF images in seconds. No signup, no
              complicated settings, just upload your image and get the format
              you need.
            </p>
          </div>

          {/* Small benefits */}

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-zinc-500">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-green-600" />
              No signup
            </div>

            <div className="flex items-center gap-2">
              <Check size={14} className="text-green-600" />
              Fast processing
            </div>

            <div className="flex items-center gap-2">
              <Check size={14} className="text-green-600" />
              Simple downloads
            </div>
          </div>

          {/* Converter */}

          <div className="relative mx-auto mt-12 max-w-3xl">
            {/* Glow */}

            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-violet-200/30 blur-2xl" />

            <Converter />
          </div>

          {/* Supported formats */}

          <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 text-xs text-zinc-400">
            <span>Supports</span>

            <div className="h-px w-8 bg-zinc-200" />

            {["JPEG", "PNG", "WEBP", "AVIF"].map((format) => (
              <span
                key={format}
                className="font-bold tracking-wide text-zinc-500"
              >
                {format}
              </span>
            ))}
          </div>

          {/* Scroll indicator */}

          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-xs font-medium text-zinc-400">
              <span>Explore Nova Stream</span>

              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOVA */}

      <section className="border-t border-zinc-200 bg-white px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <MiniFeature
              icon={<Zap size={21} />}
              title="Fast"
              description="Built with Go and optimized image processing for quick conversions."
            />

            <MiniFeature
              icon={<ShieldCheck size={21} />}
              title="Straightforward"
              description="No account or unnecessary configuration. Upload and convert."
            />

            <MiniFeature
              icon={<Sparkles size={21} />}
              title="Modern"
              description="Built around the image formats used by modern websites."
            />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black px-7 py-14 text-center sm:px-12 sm:py-16">
            {/* Decorative circles */}

            <div className="pointer-events-none absolute -left-24 -top-24 h-60 w-60 rounded-full bg-violet-600/30 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-violet-400">
                <HeartIcon />
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Like what we're building?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
                Nova Stream is being built as a collection of simple, useful
                file tools. If it saves you time, consider supporting the
                project.
              </p>

              {/* Replace this later with Buy Me a Coffee */}

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-zinc-200"
              >
                Support Nova Stream
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <p className="mt-4 text-xs text-zinc-600">
                Your support helps keep the project free and improves future
                tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MiniFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-4xl border border-zinc-200 bg-[#fafafa] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-bold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
