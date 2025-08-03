// Import the section components to display them 
import HeroSection from "@/components/sections/hero-section";
import FeatureSection from "@/components/sections/feature-section";
import {getClient} from "@/apollo-client";
import {GetPageBySlugDocument, GetPageBySlugQuery} from "@/gql/graphql";
import {notFound} from "next/navigation";
import { getPreprHeaders } from '@preprio/prepr-nextjs/server'
 
export const revalidate = 0
export const dynamic = 'force-dynamic'
 
async function getData(slug: string) {
  const {data} = await getClient().query<GetPageBySlugQuery>({
    query: GetPageBySlugDocument,
    variables: {
        slug: slug,
    },
    context: {
        // Call the getPreprHeaders function to get the appropriate headers
        headers: await getPreprHeaders(),
    },
    fetchPolicy: 'no-cache',
  })
 
    if (!data.Page) {
        return notFound()
    }
 
    return data
}
 
export default async function Page({ params}: {params: Promise<{ slug: string | string[]}>}) 
{
    let { slug} = await params
 
    // Set the slug to the home page value if there's no slug 
    if (!slug) {
        slug = '/'
    }
 
    // Add a forward slash to the slug to navigate to the correct page.
    if (slug instanceof Array) {
        slug = slug.join('/')
    }
 
    const data = await getData(slug)
    const elements = data.Page?.content.map((element, index) => {
      if (element.__typename === 'Feature') {
          return <FeatureSection key={index} item={element}/>
      } else if (element.__typename === 'Hero') {
          return <HeroSection key={index} item={element}/>
      }
    })
    
    return (
        <div>
          <meta property='prepr:id' content={data.Page?._id}/>
          {elements}
        </div>
    );
}