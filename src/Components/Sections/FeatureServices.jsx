import { FiCheckCircle, FiShoppingBag, FiHeart } from "react-icons/fi";

const features = [
  {
    title: "Maintenance license",
    description: "Keep your services up-to-date with minimal effort.",
    icon: (
      <FiCheckCircle className="w-8 h-8 text-[#eafff6] flex-shrink-0 mt-1" />
    ),
  },
  {
    title: "Easy payment and order",
    description: "Seamless checkout with multiple payment options.",
    icon: (
      <FiShoppingBag className="w-8 h-8 text-[#eafff6] flex-shrink-0 mt-1" />
    ),
  },
  {
    title: "Gift discount membership",
    description: "Get exclusive offers and rewards on every order.",
    icon: <FiHeart className="w-8 h-8 text-[#eafff6] flex-shrink-0 mt-1" />,
  },
];

export default function FeatureBanner() {
  return (
    <section className="w-screen bg-[#576b62] text-[#ffffff] px-8 py-12 font-main">
      <div className="flex flex-col md:flex-row gap-10 justify-around items-start">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4 max-w-xs">
            {feature.icon}
            <div>
              <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
