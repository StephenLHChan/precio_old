import { DataTypes } from 'sequelize';
import Sequelize from '../sequelize';

const Price = Sequelize.define('price', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	value: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	productId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'products',
			key: 'id',
		},
	},
});

export default Price;
