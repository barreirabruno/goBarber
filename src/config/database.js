module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'goBarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
