import Link from "next/link"


export default function page() {
    return <div><h1>its selected blog page</h1>
    
    <nav>
      <Link href="/dashboard/category">Category</Link>
      <Link href="/dashboard/product">Product</Link>
      <Link href="/dashboard/blog">Blog</Link>
      <Link href="/dashboard/news">News</Link>
    </nav>
    
    
    </div>
}