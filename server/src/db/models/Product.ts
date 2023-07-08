import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';

const Product = sequelize.define('product', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
	barcode: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
});

export default Product;
