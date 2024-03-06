const concatNames = async (req, res) => {
  try {
    let data = {
      fullName: req.body.firstName + " " + req.body.lastName,
    };
    // req.data = data
    // return next();
    res.send({ data });
  } catch (error) {
    console.log(error);
    return res.send("Internal Server Error");
    // return res.statusCode(500).send("Internal Server Error");
  }
};

module.exports = {
  concatNames,
};
