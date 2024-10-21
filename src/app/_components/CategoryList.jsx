import Link from "next/link";

async function CategoryList() {
  const res = await fetch("http://localhost:5000/api/category/list");
  const {
    data: { categories },
  } = await res.json();
  console.log(categories);
  return (
    <ul>
      {categories.map((c) => (
        <li className="space-y-4" key={c._id}>
          <Link href={`/blog/category/${c.slug}`}>{c.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
