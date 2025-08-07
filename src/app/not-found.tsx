export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-muted-foreground">We couldn’t find what you were looking for.</p>
    </div>
  );
}
