const doNotChanges = async (req) => {
  let change = false;
  const changes = await Role.findOne({
    name: req.name,
    description: req.description,
  });
  return changes ? change : (change = true);
};

export default doNotChanges;
