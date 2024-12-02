"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Users,
  Code,
  Star,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "@/components/home/feature-card";
import { StatCard } from "@/components/home/stat-card";
import { useRef } from "react";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built using the Fastify node framework, we're optimized for efficiency and minimal latency",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description:
        "We pride ourselves on our privacy and security! Read our privacy policy for more info.",
    },
    {
      icon: Globe,
      title: "E-Z = Easy",
      description:
        "As is our brand, our services are famously simple and intuitive for our users.",
    },
    {
      icon: Users,
      title: "Growing Community",
      description:
        "Join thousands of users who trust E-Z Services to provide a great user experience.",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description:
        "Comprehensive API documentation and we offer pastes to help you store your code snippets.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "The team at e-z has a burning passion for creating the best user experience. We love what we do!",
    },
  ];

  const stats = [
    { value: "17684", label: "Active Users" },
    { value: "1854204", label: "Unique Views" },
    { value: "4458911", label: "Uploads" },
    { value: "24/7", label: "Support" },
  ];

  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-24 sm:space-y-32">
          <div className="text-center space-y-8 pt-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 glow-text-blue">
                  E-Z Docs
                </span>
              </h1>
              <p className="text-lg sm:text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                High-quality and easy to use web services. We strive to offer
                the best experience possible for our users.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
              <Link
                href="/docs/getting-started"
                className="rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm bg-blue-600 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors flex items-center justify-center gap-2 glow-button-blue"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs/api"
                className="rounded-lg px-6 py-3 text-sm font-semibold text-blue-400 ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all flex items-center justify-center gap-2"
              >
                API Documentation
                <Code className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            ref={statsRef}
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </motion.div>

          <div ref={featuresRef}>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={
                featuresInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 glow-text-blue"
            >
              But why choose us?
            </motion.h2>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={
                featuresInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={ctaRef}
            initial={{ y: 50, opacity: 0 }}
            animate={ctaInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8 bg-blue-950/10 rounded-2xl border border-blue-900/20 p-8 sm:p-12 glow-card"
          >
            <Star className="w-12 h-12 text-blue-400 mx-auto glow-icon-blue" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
              Join thousands of users who trust us to provide great services.
              <br />
              Get started today!
            </p>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm bg-blue-600 hover:bg-blue-500 transition-colors glow-button-blue"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
