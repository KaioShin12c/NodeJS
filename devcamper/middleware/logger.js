module.exports = (req, res, next) => {
  console.log("This is middleware");
  next();
};
