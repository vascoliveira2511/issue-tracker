"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Button, Link } from "@radix-ui/themes";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-8 text-center">
        <motion.h1
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Your Issue Tracker
        </motion.h1>
        <motion.p
          className="text-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Track, manage, and resolve issues efficiently.
        </motion.p>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button asChild className="bg-white text-gray-800 ">
            <Link href={"/issues"}>Get Started</Link>
          </Button>
        </motion.div>
      </header>

      {/* Features Section with Radix UI Accordion */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <Accordion.Root type="single" collapsible className="space-y-6">
          {[
            {
              value: "item-1",
              title: "Create Issues",
              content: "Easily create and assign issues to your team.",
            },
            {
              value: "item-2",
              title: "Track Progress",
              content: "Monitor the status of each issue in real-time.",
            },
            {
              value: "item-3",
              title: "Collaborate",
              content: "Work together to resolve issues faster.",
            },
          ].map((item) => (
            <Accordion.Item
              key={item.value}
              value={item.value}
              className="border-b"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full justify-between items-center py-4 text-2xl font-semibold text-left transition-colors hover:text-purple-600">
                  {item.title}
                  <svg
                    className="w-6 h-6 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
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
              <Accordion.Content className="overflow-hidden text-lg text-gray-700 radix-state-open:animate-slideDown radix-state-closed:animate-slideUp">
                <div className="py-4">{item.content}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>
    </div>
  );
}
