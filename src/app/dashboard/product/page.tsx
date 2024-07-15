import Link from "next/link"


export default function page() {
    return <div><h1>its selected product page</h1>
    
        <nav className="navs">
      <Link href="/dashboard/category">Category</Link>
      <Link href="/dashboard/product">Product</Link>
      <Link href="/dashboard/blog">Blog</Link>
      <Link href="/dashboard/news">News</Link>
    </nav>
        {/* <style jsx>{`
        .navs{
        color:blue;
        }
            `}</style> */}
    
    </div>
}