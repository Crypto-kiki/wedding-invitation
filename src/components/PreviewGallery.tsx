import Link from "next/link";

export default function PreviewGallery() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">우리의 순간들</h2>
      <div className="flex justify-center gap-2 mb-4">
        <img
          src="/images/couple1.jpg"
          alt="preview1"
          className="w-24 h-24 object-cover rounded-md"
        />
        <img
          src="/images/couple2.jpg"
          alt="preview2"
          className="w-24 h-24 object-cover rounded-md"
        />
        <img
          src="/images/couple3.jpg"
          alt="preview3"
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>
      <Link href="/gallery" className="text-blue-500 underline">
        MORE
      </Link>
    </section>
  );
}
