const getBootcamps = (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};

const getBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id}`,
  });
};

const createBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Create new bootcamp",
  });
};

const updateBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

const deleteBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
