import { SHOP_LOGOS } from "app/utils/constants/paths";
import { getAssetPath } from "app/utils/appHelpers";

const shopsList = [
  {
    id: 1,
    name: 'Shop A',
    ownerName: 'John Doe',
    logo: getAssetPath(`${SHOP_LOGOS}/shop1.jpg`, "100x100"),
    products: 150,
    orders: 50,
    status: 'Open',
  },
  {
    id: 2,
    name: 'Shop B',
    ownerName: 'Jane Smith',
    logo: getAssetPath(`${SHOP_LOGOS}/shop2.jpg`, "100x100"),
    products: 200,
    orders: 75,
    status: 'Closed',
  },
  {
    id: 3,
    name: 'Shop C',
    ownerName: 'Alice Johnson',
    logo: getAssetPath(`${SHOP_LOGOS}/shop3.jpg`, "100x100"),
    products: 100,
    orders: 30,
    status: 'Open',
  },
  {
    id: 4,
    name: 'Shop D',
    ownerName: 'Bob Brown',
    logo: getAssetPath(`${SHOP_LOGOS}/shop4.jpg`, "100x100"),
    products: 75,
    orders: 20,
    status: 'Open',
  }
];

export default shopsList;
