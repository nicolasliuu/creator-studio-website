import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed z-50 w-full px-6 bg-white shadow-md">
      <div className="flex justify-between h-16 items-center py-2 mx-4 lg:mx-16">
        <div className="flex items-center gap-3 space-x-4">
          <Link href="/" className="text-xl text-black font-bold hover:text-blue-500">
            Creator Studio
          </Link>
          <Link href="/docs" className="text-gray-800 hover:text-blue-500">
            Docs
          </Link>
          <Link href="/tutorial" className="text-gray-800 hover:text-blue-500">
            Tutorial
          </Link>
        </div>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 flex gap-2 items-center "
        >
          GitHub    
           <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
        </a>
      </div>
    </header>
  )
}