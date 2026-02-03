import { Link } from "react-router-dom";

interface CollectionCardProps {
  name: string;
  image: string;
  itemCount: number;
  href: string;
}

const CollectionCard = ({ name, image, itemCount, href }: CollectionCardProps) => {
  return (
    <Link to={href} className="group relative block overflow-hidden">
      <div className="relative aspect-square overflow-hidden rounded-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
          <h3 className="font-heading text-2xl md:text-3xl tracking-widest text-foreground mb-2">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm tracking-wide">
            {itemCount} Pieces
          </p>
          <div className="mt-4 overflow-hidden">
            <span className="inline-block text-sm tracking-widest uppercase text-primary translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Explore Collection
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
