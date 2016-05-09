/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('orderdetails', {
		orderNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'orders',
				key: 'orderNumber'
			}
		},
		productCode: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'products',
				key: 'productCode'
			}
		},
		quantityOrdered: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		priceEach: {
			type: 'DOUBLE',
			allowNull: false
		},
		orderLineNumber: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		}
	}, {
		tableName: 'orderdetails'
	});
};