const seedWallet = require('./wallet-seeds');
<<<<<<< HEAD
const sequelize = require('../config/connection');
=======
const sequelize = require('../config/config');
>>>>>>> 74276a730d6669cdd1c5fc8e889e2da9a7c7afdc

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWallet();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();