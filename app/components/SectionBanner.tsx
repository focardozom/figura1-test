import Image from 'next/image'

interface SectionBannerProps {
  imagePath: string
  overlayColor?: string
}

export default function SectionBanner({ 
  imagePath, 
  overlayColor = "bg-gray-900/10"
}: SectionBannerProps) {
  return (
    <div className="relative h-32 md:h-48 w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        
        {/* Simple semi-transparent overlay */}
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      </div>
    </div>
  )
} 