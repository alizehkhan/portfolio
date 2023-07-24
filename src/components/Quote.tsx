const Quote = ({ children, author }: { children: string; author?: string }) => {
  return (
    <div className="mx-auto mb-8 mt-10 max-w-lg px-6">
      <blockquote>
        <q className="font-serif text-xl italic">{children}</q>
        <cite className="mt-4 block font-bold">{author}</cite>
      </blockquote>
    </div>
  );
};

export default Quote;
