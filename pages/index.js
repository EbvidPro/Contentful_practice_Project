import Head from 'next/head'
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'recipe' })
  return {
    props: {
      recipes: res.items
    },
    revalidate: 1
  }
}

const Home = ({ recipes }) => (
  <div className='text-center p-4 bg-gray-300'>
    {console.log({ recipes })}
    <Head>
      <title>Marmite Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="px-10 py-2">
      <h4 className='text-xl font-bold text-left'>Latest Recipes</h4>
      <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
        {/* Cards go here */}
        {recipes.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </main>
  </div>
)

export default Home
