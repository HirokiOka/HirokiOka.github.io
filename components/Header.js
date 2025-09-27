import Link from "next/link";

export function Header() {
    const linkTextClass = 'font-bold rounded-sm px-2 py-1 transition-colors duration-200 hover:bg-white hover:text-black md:mx-2 md:text-2xl sm:text-base'
    return (
        <header className='bg-black text-white fixed top-0 w-full'>
            <nav className='flex justify-between m-4'>
                <Link href="/" className='font-bold sm:text-base sm:mx-1 md:text-4xl md:mx-4'>
                    HirokiOka Web.
                </Link>
                <div className="flex flex-row items-center">
                    <Link href="/about" className={linkTextClass}>About</Link>
                    <Link href="/works" className={linkTextClass}>Works</Link>
                    <Link href="/blog" className={linkTextClass}>Blog</Link>
                </div>
            </nav>
        </header>
    )
}