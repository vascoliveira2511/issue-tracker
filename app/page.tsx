import * as Accordion from "@radix-ui/react-accordion";
import { Button, Link } from "@radix-ui/themes";
export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Your Issue Tracker
        </h1>
        <p className="text-xl mb-8">
          Track, manage, and resolve issues efficiently.
        </p>

        {/* Get Started Button */}
        <Button>
          <Link href={"/issues"}>Get Started</Link>
        </Button>
      </header>

      {/* Features Section with Radix UI Accordion */}
      <section className="py-12 px-8 max-w-4xl mx-auto">
        <Accordion.Root type="single" collapsible className="space-y-4">
          <Accordion.Item value="item-1" className="border-b">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full justify-between items-center py-4 text-xl font-semibold text-left">
                Create Issues
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="py-2 text-gray-700">
              Easily create and assign issues to your team.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2" className="border-b">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full justify-between items-center py-4 text-xl font-semibold text-left">
                Track Progress
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="py-2 text-gray-700">
              Monitor the status of each issue in real-time.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" className="border-b">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full justify-between items-center py-4 text-xl font-semibold text-left">
                Collaborate
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="py-2 text-gray-700">
              Work together to resolve issues faster.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </section>
    </div>
  );
}
