const Shop = require('../../model/shop');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs-extra');
const path = require('path');
const shell = require('shelljs');
require('dotenv').config();

async function deployToVercel(repoName, destPath) {
  const token = process.env.VERCEL_AUTH_TOKEN; 
  if (!token) {
    throw new Error('Vercel authentication token is not set.');
  }

  repoName = repoName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  console.log(`Sanitized repoName: ${repoName}`);

  const code = shell.exec(`vercel --prod --name=${repoName} -y --token=${token}`, { cwd: destPath }).code;
  if (code !== 0) {
    throw new Error('Vercel CLI failed');
  }
  console.log('Vercel deployment completed');
}

const createShop = async (shopData) => {
  const {
    categories,
    userId,
    callToAction,
    BannerText,
    aboutMe,
    name,
    address,
    description,
    settings,
    balance
  } = shopData;

  if (!categories || !userId || !name || !settings) {
    throw new Error('Missing required fields');
  }

  const sourcePath = path.join(__dirname, '../../template/green');
  const destPath = path.join(__dirname, `../../temp/${name}`);

  try {
    console.log('About to copy files...');
    await fs.copy(sourcePath, destPath);
    console.log('Files copied.');

    const configFilePath = path.join(destPath, 'shopConfig.js');
    const newContent = `const shopConfig = {
      title: "${name}",
      description: "${description}"
    };
    export default shopConfig;`;

    fs.writeFileSync(configFilePath, newContent);

    const repoName = `${name}`;
    console.log('About to deploy to Vercel...');
    const url = await deployToVercel(repoName, destPath);
    console.log('Deployment to Vercel completed', url);

    const newShop = new Shop({
      categories,
      shopId: uuidv4(),
      userId,
      callToAction,
      BannerText,
      aboutMe,
      name,
      address: {
        street_address: address.street_address,
        country: address.country,
        city: address.city,
        state: address.state,
        zip: address.zip
      },
      description,
      settings: {
        socials: settings.socials,
        contact: settings.contact,
        location: {
          lat: settings.location.lat,
          lng: settings.location.lng,
          city: settings.location.city,
          state: settings.location.state,
          country: settings.location.country,
          zip: settings.location.zip,
          formattedAddress: settings.location.formattedAddress
        },
        website: settings.website
      }
    });

    await newShop.save();
    return newShop;
  } finally {
    console.log(`Temporary directory emptied.`);
  }
};

module.exports = createShop;
