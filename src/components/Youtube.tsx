export default function Youtube({ id }: { id: string }) {
  return (
    <iframe
      className="h-80 w-full"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
