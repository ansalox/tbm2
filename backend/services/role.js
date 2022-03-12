import Role from "../models/role.js";

const isChanges = async (data) => {
  let change = false;
  const getRole = await Role.findOne({
    name: data.name,
    description: data.description,
  });
  return getRole ? change : (change = true);
};

const existingRole = async (data) => {
  let existing = false;
  const getRole = await Role.findOne({ name: data.name });
  return getRole ? existing : (existing = false);
};

export default { isChanges, existingRole };
