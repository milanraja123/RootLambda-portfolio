import Tag from "@/components/Tag";
import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
  {
    name: "React / Next.js",
    icon: "⚛️",
    description: "Modern React framework for production-grade applications.",
  },
  {
    name: "React Native",
    icon: "📱",
    description: "Build native mobile apps for iOS and Android.",
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "JavaScript runtime for scalable backend services.",
  },
  {
    name: "Supabase",
    icon: "🗄️",
    description: "Open source Firebase alternative with Postgres.",
  },
  {
    name: "Vercel",
    icon: "🔺",
    description: "Deploy and scale with zero configuration.",
  },
  {
    name: "OpenAI / Claude",
    icon: "🤖",
    description: "AI-powered features and intelligent automation.",
  },
  {
    name: "Cursor AI",
    icon: "⚡",
    description: "AI-accelerated development for faster shipping.",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    description: "Type-safe JavaScript for robust applications.",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first CSS for rapid UI development.",
  },
  {
    name: "Razorpay",
    icon: "💳",
    description: "Seamless payment integration for India & global.",
  },
  {
    name: "n8n Automation",
    icon: "🔗",
    description: "Workflow automation and integrations.",
  },
  {
    name: "Figma",
    icon: "📊",
    description: "Collaborative interface design and prototyping.",
  },
];

export type IntegrationType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24" id="integrations">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Our Arsenal</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Built with the <span className="text-lime-400">best tools</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              We use AI-accelerated tools to ship faster — and industry-standard
              tech so your codebase is never a hostage.
            </p>
          </div>
          <div>
            <div
              className="h-[400px] lg:h-[800px] overflow-hidden grid md:grid-cols-2 gap-4 mt-8 lg:mt-0
         [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            >
              <IntegrationColumn integrations={integrations.slice(0, 6)} />
              <IntegrationColumn
                integrations={integrations.slice(6, 12)}
                className="hidden md:flex"
                reverse={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
