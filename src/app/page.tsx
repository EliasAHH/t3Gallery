import Link from "next/link";

const mockUrls = [
  "https://sik3ycoy0r.ufs.sh/f/ayDchF6ZNSYqtIJJTzDIT2LzjQnVYP5pg8Kda6hcUyGsemNq",
  "https://sik3ycoy0r.ufs.sh/f/ayDchF6ZNSYqSxv56gW72mctQfsdCGyo35vn9lV0DhMKjw1R",
  "https://sik3ycoy0r.ufs.sh/f/ayDchF6ZNSYq1dp0GgYNXyelLuVj7HKwnvCEtxs6ZRDr239m",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
