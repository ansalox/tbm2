import Role from "../models/role.js";

const existingRole = async (req, res, next) => {
  const getRole = await Role.findOne({ name: req.body.name });
  return getRole
    ? res.status(400).send({ message: "The role already exist" })
    : next();
};

const getRoleUser = async (req, res, next) => {
  const role = await Role.findOne({ name: "user" });
  if (!role) return res.status(400).send({ message: "error assigning role" });

  req.body.role = role._id;
  next();
};

export default { existingRole, getRoleUser };
