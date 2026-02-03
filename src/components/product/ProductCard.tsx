import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isBestseller,
}: ProductCardProps) => {
  return (
    <div className="group relative">
      <Link to={`/product/${id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-card aspect-jewelry rounded-sm">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <span className="bg-accent text-accent-foreground text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm">
                New
              </span>
            )}
            {isBestseller && (
              <span className="bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm">
                Bestseller
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
            <Heart className="w-4 h-4" />
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="btn-luxury text-xs">
              Quick View
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
            {category}
          </p>
          <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="text-primary font-medium">
              ${price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                ${originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
