import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({ name, price, features, cta, isPopular }: {
  name: string,
  price: string | number,
  features: string[],
  cta: string,
  isPopular?: boolean
}) => (
  <div className={`border rounded-lg p-6 flex flex-col ${isPopular ? 'border-blue-600 relative' : ''}`}>
    {isPopular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <div className="mt-4 min-h-[2.5rem]">
      <span className="text-3xl font-bold">${price}</span>
      {typeof price === 'number' && <span className="text-gray-500 ml-1">/month</span>}
    </div>
    <ul className="my-8 flex-grow space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full">{cta}</Button>
  </div>
);

export function Pricing() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingTier
            name="Team"
            price={29}
            features={[
              "Up to 10 users",
              "Basic role management",
              "Standard support",
              "Core workflows"
            ]}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Business"
            price={99}
            features={[
              "Up to 50 users", 
              "Advanced workflows",
              "Priority support",
              "Custom domains",
              "Advanced analytics"
            ]}
            cta="Start Free Trial"
            isPopular
          />
          <PricingTier
            name="Enterprise"
            price="Custom"
            features={[
              "Unlimited users",
              "Custom implementation",
              "24/7 dedicated support", 
              "Advanced integrations",
              "Custom features"
            ]}
            cta="Contact Sales"
          />
        </div>
      </div>
    </div>
  );
}