import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <nav className='bg-blue-600 px-10 py-5 flex w-full m-0 inset-0'>
                    <div className='justify-start'>
                        <h1 className='px-4 text-xl text-white font-bold'>
                            <a href="/">Marmite</a>
                        </h1>
                    </div>
                    <ul className='flex justify-center text-white items-center m-auto font-semibold'>
                        <li className='px-6 '>
                            <a href="/" className='hover:text-yellow-400'>Home</a>
                        </li>
                        <li className='px-6 '>
                            <a href="#" className='hover:text-yellow-400'>About</a>
                        </li>
                        <li className='px-6 '>
                            <a href="#" className='hover:text-yellow-400'>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className='text-center p-8 bg-gray-300'>
                    <Link href='/'>
                        <a>
                            <h1>
                                <span className='text-lg font-medium'>JUST ADD </span>
                                <span className='block font-bold text-3xl '>MARMITE</span>
                            </h1>
                            <h2 className='font-medium'>SPREAD THE JOY</h2>
                        </a>
                    </Link>
                </div>
            </header>

            <div>
                {children}
            </div>
            <footer className="bg-gray-300 flex h-24 w-full self-center justify-center border-t">
                <p className='pt-6'>Copyright @ 2021</p>
            </footer>
        </div>
    )
}