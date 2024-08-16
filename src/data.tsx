import img1 from './assets/images/image-product-1.jpg';
import img2 from './assets/images/image-product-2.jpg';
import img3 from './assets/images/image-product-3.jpg';
import img4 from './assets/images/image-product-4.jpg';
export const Headers = ['Collection', 'Men', 'Women', 'About', 'Contact'];

export const Product = [
  {
    id: 1,
    category: 'SNEAKER COMPAGNY',
    name: 'Fall Limited Edition Sneakers',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything
    the weather can offer.`,
    price: 250,
    percentReduce: 50,
    image: img1,
    images: [img1, img2, img3, img4],
  },
];
