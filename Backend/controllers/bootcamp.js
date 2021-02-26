const Bootcamp = require("../models/Bootcamp");

//CRUD
//add bootcamp
exports.createBootcamp = async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const newBootcamp = new Bootcamp({
      title,
      description,
      image,
    });
    const addedBootcamp = await newBootcamp.save();
    res.status(200).json(addedBootcamp);
  } catch (error) {
    console.error(error);
  }
};

//get bootcamp
exports.getBootcamp = async (req, res) => {
 Bootcamp.find()         
 .then((bootcamps) => res.send(bootcamps))
 .catch((err) => res.status(400).send({ msg: "ERROR GET USERS"}))
};

//get one bootcamp
exports.getOneBootcamp = (req, res) => {
    Bootcamp.findById(req.params.id)
      .then(bootcamp => res.json(bootcamp))
      .catch(err =>
        res.status(404).json({ nopostfound: 'No bootcamp founded with this ID' })
      );
  };

//edit bootcamp
exports.editBootcamp = async (req, res) => {
  const id = req.params.id;
  Bootcamp.findByIdAndUpdate(id, req.body, { new: true })
    .then((bootcamp) => {
      if (!bootcamp) {
        return res.status(404).send({ msg: "Bootcamp Not Found " });
      }
      res.send(bootcamp);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
};

//delete bootcamp
exports.deleteBootcamp = async (req, res) => {
  const id = req.params.id;
  Bootcamp.findByIdAndDelete(id)
    .then((bootcamp) => {
      if (!bootcamp) {
        return res.status(404).send({ msg: "Bootcamp Not Found " });
      }
      res.send(bootcamp);
    })
    .catch((err) => res.status(400).send({ msg: "Bootcaamp delete .." }));
};
