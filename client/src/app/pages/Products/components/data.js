import { PRODUCT_IMAGES } from "app/utils/constants/paths";
import { getAssetPath } from "app/utils/appHelpers";

const productsList = [
  {
    id: 1,
    name: 'Electric Socket',
    group: 'Electronics',
    image: getAssetPath(`${PRODUCT_IMAGES}/electric-socket.jpeg`, "100x100"),
    productType: 'simple',
    shop:'Shop 1',
    unitPrice: 50,
    status: 'Published',
    qty: 5
  },
  {
    id: 2,
    name: 'Nike Shoes',
    group: 'Shoes',
    image: getAssetPath(`${PRODUCT_IMAGES}/footwear.png`, "100x100"),
    productType: 'variable',
    shop:'Shop 3',
    unitPrice: 75,
    status: 'Unpublished',
    qty: 10
  },
  {
    id: 3,
    name: 'Headphones',
    group: 'Electronics',
    image: getAssetPath(`${PRODUCT_IMAGES}/headphone.jpeg`, "100x100"),
    productType: 'simple',
    shop:'Shop 1',
    unitPrice: 30,
    status: 'Published',
    qty: 15
  },
  {
    id: 4,
    name: 'Watch',
    group: 'Electronics',
    image: getAssetPath(`${PRODUCT_IMAGES}/watch.jpeg`, "100x100"),
    productType: 'simple',
    shop:'Shop 1',
    unitPrice: 20,
    status: 'Published',
    qty: 18
  },
  {
    id: 5,
    name: 'Travel Bag',
    group: 'Bags',
    image: getAssetPath(`${PRODUCT_IMAGES}/travel-bag.jpg`, "100x100"),
    productType: 'variable',
    shop:'Shop 2',
    unitPrice: 20,
    status: 'Published',
    qty: 20
  }
];

export default productsList;
