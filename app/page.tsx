import Link from "next/link";

export default function Home() {
  // 
  return (
    <div className="container">
      <h1>This is the container</h1>
      <Link href="/productlist"> Go to Product List</Link>
    </div>
  )
}
