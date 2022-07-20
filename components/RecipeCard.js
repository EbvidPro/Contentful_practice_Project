import Image from "next/image"
import Link from "next/link"

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg text-center sm:m-auto'>
            <div>
                <Image src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className='py-4'>
                <div>
                    <h4 className="text-lg font-bold">{title}</h4>
                    <p className="italic">Takes approx {cookingTime} mins to make</p>
                </div>
                <div className="my-4">
                    <Link href={'/recipes/' + slug}><a className="text-orange-600 font-semibold hover:text-white hover:p-2 hover:bg-blue-600 rounded">Cook this</a></Link>
                </div>
            </div>
        </div>
    )
}
