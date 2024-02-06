import Image from 'next/image'
import AnimatedGradient from '@/app/components/AnimatedGradient'
import SolarColor from '@/app/components/SolarColor'
import Blob from '@/app/components/Blob'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="flex gap-8 items-center justify-between max-w-screen-lg p-8 w-full min-h-[50vh]">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="h1">
            Hi, I&apos;m <span className="text-[#FF4F4F]">Oli</span>
          </h1>
          <p>Web developer, UI designer</p>
        </div>
        <div className="h-64 overflow-hidden rounded-full w-64">
          <Image
            alt="Oli Carter avatar"
            className="relative bottom-3"
            height={256}
            src="/me.jpg"
            width={256}
          />
        </div>
      </section>
      <section className="flex flex-col gap-8 max-w-screen-lg p-8 w-full">
        <header className="space-y-4">
          <h3 className="h3">Gradients</h3>
          <p>
            Now I&apos;m not saying they belong everywhere, but tastfully done,
            gradients can bring much needed joy to an oftentimes bland browsing
            experience.
          </p>
          <p>
            And what takes gradients from um to yum?
            <span className="font-bold whitespace-pre">
              {' '}
              {'Animation!'.split('').map((letter, index) => (
                <span className="relative text-transparent" key={index}>
                  <span
                    className="absolute animate-bounce text-red-400"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      filter: `hue-rotate(${index * 36}deg)`,
                    }}
                  >
                    {letter}
                  </span>
                  {letter}
                </span>
              ))}
            </span>
          </p>
          <p>
            Here&apos;s an example of an infinitely changing animated gradient
            using{' '}
            <a
              className="underline"
              href="https://www.npmjs.com/package/simplex-noise"
              rel="noreferrer"
              target="_blank"
            >
              simplex-noise
            </a>{' '}
            to generate the color values.
          </p>
        </header>
        <AnimatedGradient className="aspect-video contrast-125 rounded-2xl" />
      </section>
      <section className="flex flex-col gap-8 max-w-screen-lg p-8 w-full">
        <header className="space-y-4">
          <h3 className="h3">Geopalette</h3>
          <p>
            I love dark mode, it&apos;s the best, right up there with capacitive
            touch screens.
          </p>
          <p>
            Although, the jump between light and dark can feel a tad jarring.
          </p>
          <p>
            This is an experiment using key sunlight times in your location to
            generate a background color suitable for the time of day where you
            are.
          </p>
        </header>
        <SolarColor />
      </section>
      <section className="flex flex-col gap-8 max-w-screen-lg p-8 w-full">
        <header className="space-y-4">
          <h3 className="h3">Just a blob™</h3>
          <p>
            Ok so after doing some{' '}
            <a
              href="https://threejs-journey.com"
              rel="noreferrer"
              target="_blank"
            >
              Three.js Journey
            </a>{' '}
            lessons and discovering how to use noise algorithms to generate
            coherent random graphics, I wanted to apply it to everything.
          </p>
          <p>
            This is a just a blob™, not particularly useful but strangely
            hypnotic.
          </p>
        </header>
        <Blob className="aspect-video" />
      </section>
    </main>
  )
}
