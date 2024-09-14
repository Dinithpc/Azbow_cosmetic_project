import { FC, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { useCart } from "../context/CartContext";

interface Product{
  product_id: string;
  product_name: string;
  product_description: string;
  product_category: string;
  price: string;
  in_stock: number;
  directions: string;
  image_url: string;
}

interface ProductProps {
  product: Product;
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const ProductDetailsCard:FC<ProductProps> = ({ product }) => {

  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click from triggering
    if (product.in_stock > 0) {
      addToCart(product.product_id, 1); // Add 1 item to the cart
    }
  };

  const ProductDetails = {
    name: product.product_name,
    price: '$'+ product.price,
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Cosmetics', href: '#' },
    ],
    images: [
      {
        src: product.image_url,
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: './DesignerC.jpeg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: product.image_url,
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: './DesignerC.jpeg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description: product.product_description,
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details: product.directions,
  }

  const [selectedColor, setSelectedColor] = useState(ProductDetails.colors[0])
  const [selectedSize, setSelectedSize] = useState(ProductDetails.sizes[2])
  const [selectedImage, setSelectedImage] = useState(ProductDetails.images[0])

  return (
    <div className="bg-white">
  <div className="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {ProductDetails.breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                {breadcrumb.name}
              </a>
              <svg
                fill="currentColor"
                width={16}
                height={20}
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <a href={ProductDetails.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
            {ProductDetails.name}
          </a>
        </li>
      </ol>
    </nav>

    {/* Image gallery and product details in a two-column layout */}
    <div className="mx-auto mt-6 max-w-2xl lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8">
      {/* Image */}
      <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-1 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={selectedImage.alt} // Update alt to selected image
                src={selectedImage.src} // Update src to selected image
                className="h-full w-full object-contain object-center"
              />
            </div>

            {/* Thumbnails below the main image */}
            <div className="mt-4 grid grid-cols-4 gap-4">
              {ProductDetails.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(image)} // Set the selected image on click
                  className={`aspect-h-1 aspect-w-1 overflow-hidden rounded-lg border-2 ${
                    selectedImage.src === image.src ? 'border-indigo-500' : 'border-gray-300'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
      {/* ProductDetails info */}
      <div className="lg:border-l lg:border-gray-200 lg:pl-8">
        <div className="pb-16 pt-10 lg:pb-24 lg:pt-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {ProductDetails.name}
          </h1>
          <p className="mt-4 text-3xl tracking-tight text-gray-900">{ProductDetails.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0',
                    )}
                  />
                ))}
              </div>
              <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          {/* Options */}
          <form className="mt-10">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4 flex items-center space-x-3">
                {ProductDetails.colors.map((color) => (
                  <Radio
                    key={color.name}
                    value={color}
                    aria-label={color.name}
                    className={classNames(
                      color.selectedClass,
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        color.class,
                        'h-8 w-8 rounded-full border border-black border-opacity-10',
                      )}
                    />
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Size guide
                </a>
              </div>
              <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4 grid grid-cols-4 gap-4">
                {ProductDetails.sizes.map((size) => (
                  <Radio
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={classNames(
                      size.inStock
                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                      'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none',
                    )}
                  >
                    <span>{size.name}</span>
                    {size.inStock && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[checked]:border-indigo-500"
                      />
                    )}
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            <button
              type="submit"
              onClick={handleAddToCart}
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to cart
            </button>
          </form>

          {/* Description and details */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            <ul role="list" className="mt-4 list-disc pl-4 text-sm">
              {ProductDetails.highlights.map((highlight) => (
                <li key={highlight} className="text-gray-400">
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Details</h3>
            <p className="mt-4 text-sm text-gray-600">{ProductDetails.details}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
