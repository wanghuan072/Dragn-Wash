import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container inner-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>This route isn&apos;t here.</h1>
      <p>Find a guide, a dragon route, or a fix from the home page.</p>
      <Link className="button primary" href="/">
        Return home →
      </Link>
    </main>
  );
}
