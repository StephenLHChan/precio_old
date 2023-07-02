import Price from './Price';
import Product from './Product';

Price.belongsTo(Product, { foreignKey: 'productId' });

export { Price, Product };
