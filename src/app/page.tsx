import { type PageComponent } from "../types/next-layout";
import { trpc } from "../utils/trpc";
import { AuthShowcase } from "./auth-preview";
import { TechnologyCard } from "./technology-card";

const HomePage: PageComponent = async () => {
  //const hello = await trpc.example.hello.query();

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
        Create <span className="text-purple-300">T3</span> App
      </h1>
      <p className="text-2xl text-gray-700">This stack uses:</p>
      <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
        <TechnologyCard
          name="NextJS"
          description="The React framework for production"
          documentation="https://nextjs.org/"
        />
        <TechnologyCard
          name="TypeScript"
          description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
          documentation="https://www.typescriptlang.org/"
        />
        <TechnologyCard
          name="TailwindCSS"
          description="Rapidly build modern websites without ever leaving your HTML"
          documentation="https://tailwindcss.com/"
        />
        <TechnologyCard
          name="tRPC"
          description="End-to-end typesafe APIs made easy"
          documentation="https://trpc.io/"
        />
        <TechnologyCard
          name="Next-Auth"
          description="Authentication for Next.js"
          documentation="https://next-auth.js.org/"
        />
        <TechnologyCard
          name="Prisma"
          description="Build data-driven JavaScript & TypeScript apps in less time"
          documentation="https://www.prisma.io/docs/"
        />
      </div>
      <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
        {/* {hello.greeting} */}
      </div>
      {/* <AuthShowcase /> */}
    </main>
  );
};

export default HomePage;
