import React from 'react'
import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'recipe'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'recipe',
        'fields.slug': params.slug
    })

    return {
        props: { recipe: items[0] },
        revalidate: 1
    }
}

export default function RecipeDetails({ recipe }) {
    const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
    console.log(ingredients)
    return (
        <div className='text-center xl:px-40 md:px-20 sm:px-4 p-4 bg-gray-300'>
            <div className='text-center'>
                <Image src={'https:' + featuredImage.fields.file.url}
                    width={300}
                    height={300} />
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
            <div>
                <p className='italic'>Takes about {cookingTime} mins to cook.</p>
                <h3 className='text-left text-xl font-bold pt-6'>Ingredients:</h3>
                {ingredients.map(ing => {
                    <li key={ing}>{ing}</li>
                })}
            </div>
            <div>
                <h3 className='text-left text-xl font-bold pt-6'>Method:</h3>
                <div className='text-justify px-4 '>{documentToReactComponents(method)}</div>
            </div>
        </div>
    )
}
