import sequelize from './sequelize';

import { Price, Product } from './models';

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log('db synced!');

  const product1 = await Product.create({
    name: 'sdghdf',
    description:
      'stock lunch grandmother border bar myself sheep lips correct start studied felt themselves himself space lay properly throughout division late throat top common due',
    barcode: '8523698237590',
  });

  const product2 = await Product.create({
    name: 'dshjgksdj',
    description:
      'chosen been soil buy speech calm breath dozen dance get excited garden base subject troops rear spread stuck health likely article asleep occasionally tree',
    barcode: '236589325769',
  });

  const product3 = await Product.create({
    name: 'sdkjhgiodshklv',
    description:
      'change special whenever force use popular wrote nose onto come fifteen caught one star made upon silence bus especially due tea column week process',
    barcode: '327950923790',
  });

  const product4 = await Product.create({
    name: 'jksdhgbkdf',
    description:
      'hundred minute shoe successful game likely wind individual pond store including until enter completely rich tank tide camp popular everywhere instance modern home joy',
    barcode: '2357932587',
  });

  const product5 = await Product.create({
    name: 'hsdgkjhdfk',
    description:
      'nearer these cross blow fact choose common have sort teeth care neighborhood local breathe until train doctor stage service person elephant printed view row',
    barcode: '3489768934',
  });

  const product6 = await Product.create({
    name: 'hsdukhgkdjs',
    description:
      'cool frozen want power bite coffee tobacco got nine foot adventure mathematics quietly coming lunch wrote strip respect may hair stock difference third brass',
    barcode: '734906783490',
  });

  await Price.create({
    value: 1.12,
    productId: 1,
  });

  console.log('seeded products and prices');
};

const runSeed = async () => {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
  }
};

runSeed();
