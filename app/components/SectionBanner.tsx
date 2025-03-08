import Image from 'next/image'

interface SectionBannerProps {
  imagePath: string
  overlayColor?: string
}

export default function SectionBanner({ imagePath, overlayColor = "from-gray-900" }: SectionBannerProps) {
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
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor} to-transparent opacity-20`}></div>
      </div>
    </div>
  )
} 