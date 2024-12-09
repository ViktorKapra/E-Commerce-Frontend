export default function FallbackRenderer({ error }: { error: unknown }) {
  console.error(error);

  return <h1>Something went wrong:</h1>;
}
