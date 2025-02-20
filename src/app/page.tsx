import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/typography/Heading'
import Paragraph from '@/components/typography/Paragraph'
import Hero from '@/components/Hero'

// images
import HeroImage from '@/images/diver-reef.jpg'

export default function Home() {
    return (
        <>
            <main>
                <Hero
                    title="Your Chance to Win Big!"
                    buttonText="Enter Below"
                    buttonUrl="#enter"
                    imageSrc={HeroImage}
                />
            </main>
        </>
    )
}
