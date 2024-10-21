import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
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
