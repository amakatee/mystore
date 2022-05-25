import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'kivga5yq',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: true,
    token:process.env.NEXT_PUBLIC_TOKEN
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)