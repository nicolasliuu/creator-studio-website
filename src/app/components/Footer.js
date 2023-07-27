import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center p-10 bg-white text-black rounded">
            <div className="grid grid-flow-col gap-4 mb-4">
                <Link href="/docs" className="link link-hover hover:text-blue-500">
                  Docs
                </Link>
                <Link href="/tutorial" className="link link-hover hover:text-blue-500">
                  Tutorial
                </Link>
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="link link-hover hover:text-blue-500">
                  GitHub
                </a>
            </div> 
            <div>
                <p>Copyright © 2023 - Creator Studio</p>
            </div>
        </footer>
    )
}

export default Footer