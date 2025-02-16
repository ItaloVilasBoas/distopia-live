type FeaturedCardProps = {
  __html: string;
}

export function TweetCard({ __html }: FeaturedCardProps) {
  return (
    <div className="ml-4" dangerouslySetInnerHTML={{ __html }} />
  );
}
