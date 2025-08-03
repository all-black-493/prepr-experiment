import Link from "next/link";
import { FragmentType, getFragmentData } from '@/gql'
import { BUTTON_FRAGMENT, FEATURE_SECTION_FRAGMENT } from '@/queries/get-page-by-slug'
import Image from 'next/image'
import Button from '@/components/button'
 
export default function FeatureSection(props: { item: FragmentType<typeof FEATURE_SECTION_FRAGMENT> }) {
    const item = getFragmentData(FEATURE_SECTION_FRAGMENT, props.item)
    const button = getFragmentData(BUTTON_FRAGMENT, item.button)
 
    const image = (<div className="order-first md:order-none basis-1/2 ">
        <Image src={item.image?.url || ''} alt="Feature image" width={800} height={300} className='rounded-2xl w-full aspect-[29/19] object-cover'/>
    </div>)
 
    return (
        <section className="bg-primary-50">
            <div className="mx-auto max-w-8xl p-spacing py-10 lg:py-10 xl:py-20">
                <div className="flex flex-col items-start md:items-center md:flex-row gap-8 xl:gap-28 text-secondary-700">
                    {item.image_position === 'LEFT' && image}
                    <div className="basis-1/2">
                        <h2 className="text-mb-4xl lg:text-5xl font-medium text-secondary-700 text-balance">
                            {item.heading}
                        </h2>
                        <p className="text-lg mt-4 xl:mt-6 font-medium text-wrap text-balance">
                            {item.sub_heading}
                        </p>
                        <Link href='#'>
                            <Button>
                                {button?.text}
                            </Button>
                        </Link>
                    </div>
                    {item.image_position === 'RIGHT' && image}
                </div>
            </div>
        </section>
    )
}