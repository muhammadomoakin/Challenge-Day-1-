import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Card from "../ui/Card";

const features = [
  {
    name: "Push to deploy",
    description:
      "Seamlessly integrate with your version control system. One click and you are live.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Automatic SSL provisioning for all your domains. Security without the headache.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Powerful queue management system to handle background jobs efficiently.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Enterprise-grade security features including 2FA, SSO, and audit logs.",
    icon: FingerPrintIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to scale your app
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From prototype to production in record time. FlowDesk provides the
            tools you need to build, deploy, and scale with confidence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <Card key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-400">
                  {feature.description}
                </dd>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
