import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  color, 
  details
}: ServiceCardProps) {
  return (
    <div className={cn(
      "h-[400px] p-8 rounded-2xl bg-white shadow-lg",
      "transform transition-all duration-300",
      "hover:scale-105 hover:shadow-xl hover:-translate-y-2",
      "border border-gray-100 flex flex-col"
    )}>
      <div className={cn(
        `h-12 w-12 mb-6 rounded-lg bg-${color}-50`,
        "flex items-center justify-center flex-shrink-0",
        "transform transition-transform duration-300",
        "group-hover:scale-110"
      )}>
        {icon}
      </div>
      <h3 className={cn(
        `text-xl font-bold mb-4 text-${color}-600 flex-shrink-0`,
        "font-playfair"
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-gray-600 leading-relaxed mb-4",
        "font-martel text-base"
      )}>
        {description}
      </p>
      <div className="flex-grow">
        <ul className={cn(
          "space-y-2 text-sm text-gray-500",
          "opacity-0 transform translate-y-2 transition-all duration-300",
          "group-hover:opacity-100 group-hover:translate-y-0"
        )}>
          {details.map((detail, index) => (
            <li key={index} className="flex items-center">
              <span className={`w-1.5 h-1.5 rounded-full bg-${color}-400 mr-2`}></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 