// Model to define the structure of an article
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Article = sequelize.define('Article', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
});

module.exports = Article;
