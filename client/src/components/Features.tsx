import React from 'react';
import { Shield, Users, Database } from 'lucide-react';

const Feature = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    {icon}
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2">{description}</p>
  </div>
);

export default function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            icon={<Users className="h-12 w-12 text-blue-500" />}
            title="Role Management"
            description="Streamline role assignments and approvals with automated workflows."
          />
          <Feature
            icon={<Database className="h-12 w-12 text-blue-500" />}
            title="Domain-Driven Governance"
            description="Organize data domains with clear ownership and governance standards."
          />
          <Feature
            icon={<Shield className="h-12 w-12 text-blue-500" />}
            title="Compliance Automation"
            description="Automate compliance documentation and maintain audit trails effortlessly."
          />
        </div>
      </div>
    </div>
  );
}