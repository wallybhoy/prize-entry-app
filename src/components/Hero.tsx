import Image, { StaticImageData } from 'next/image'

// components
// import Logo from '@/app/components/Logo'
import Heading from '@/components/typography/Heading'
import Paragraph from '@/components/typography/Paragraph'
import Button from '@/components/buttons/Button'

// images
// import Bottle from '@/app/assets/images/bottle.png'
// import Glasses from '@/app/assets/images/glasses.png'
// import CaptionImage from '@/app/assets/images/sanspatrie.png'

interface Props {
    title: string
    subtitle?: string
    buttonText: string
    buttonUrl: string
    imageSrc?: string | StaticImageData
}

export default function Hero({
    title,
    subtitle,
    buttonText,
    buttonUrl,
    imageSrc,
}: Readonly<Props>) {
    return (
        <section className="grid p-8 w-full h-svh">
            {imageSrc && (
                <picture className="col-[1] row-[1] rounded-2xl overflow-hidden">
                    <Image
                        className="w-full h-full"
                        src={imageSrc}
                        width={412}
                        height={412}
                        alt="Diver swimming in a reef"
                    />
                </picture>
            )}
            <div className="col-[1] row-[1] grid place-content-center">
                <div className="max-w-[60ch] bg-white/50 rounded-xl p-8 box-content">
                    <Heading>{title}</Heading>
                    <Paragraph size="large">{subtitle}</Paragraph>
                    <Button href={buttonUrl}>{buttonText}</Button>
                </div>
            </div>
        </section>
    )
}
