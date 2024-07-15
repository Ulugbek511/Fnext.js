import Link from 'next/link';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link href="/category">Category</Link>
      <Link href="/product">Product</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/news">News</Link>
    </nav>
  </div>
);

export default Dashboard;
