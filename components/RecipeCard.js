import Link from "next/link"

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div>
            <div>
                {/* Image thumbnail*/}
            </div>
            <div className=''>
                <div>
                    <h4>{title}</h4>
                    <p>Takes approx {cookingTime} mins to make</p>
                </div>
                <div>
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>
        </div>
    )
}
