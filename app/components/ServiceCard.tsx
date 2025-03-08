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
      "w-full h-full",
      "bg-white rounded-xl shadow-sm",
      "p-6",
      "transform transition-all duration-300",
      "hover:shadow-lg hover:-translate-y-1",
      "group cursor-pointer",
      "border border-gray-100"
    )}>
      <div className="flex flex-col h-full">
        <div className={cn(
          "w-12 h-12 mb-4",
          "flex items-center justify-center",
          "rounded-lg",
          `bg-${color}-50`,
          "transition-transform group-hover:scale-110"
        )}>
          {icon}
        </div>
        
        <h3 className={cn(
          "text-xl font-bold mb-2",
          "font-playfair italic",
          `text-${color}-600`,
          "group-hover:text-${color}-700",
          "leading-tight"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "text-sm",
          "text-gray-600",
          "font-martel font-light",
          "leading-relaxed",
          "mb-6"
        )}>
          {description}
        </p>

        <div className="mt-auto">
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg className={cn(
                  "w-4 h-4 flex-shrink-0",
                  `text-${color}-600`
                )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className={cn(
                  "text-sm text-gray-500",
                  "font-martel font-light",
                  "leading-relaxed"
                )}>{detail}</span>
              </li>
            ))}
          </ul>
          
          <div className={cn(
            "mt-6",
            "flex items-center",
            "text-sm font-medium",
            "font-martel",
            `text-${color}-600`,
            "opacity-0 transform -translate-y-2",
            "transition-all group-hover:opacity-100 group-hover:translate-y-0"
          )}>
            Learn more
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
} 