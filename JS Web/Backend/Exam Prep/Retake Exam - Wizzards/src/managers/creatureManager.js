const Creature = require("../models/Creature.js");

exports.create = async (creatureData) => {
  await Creature.validate(creatureData);
  const newCreature = await Creature.create(creatureData);
  return newCreature;
};

exports.getAll = async () => {
  let creatures = await Creature.find().lean();
  return creatures;
};

exports.getOne = async (id) => {
  const creature = await Creature.findById(id).lean();
  return creature;
};

// REMOVE IF NOT NEEDED - query that retrieves all created courses
exports.createdCreatures = async (id) => {
  const createdCreatures = await Creature.find({owner: id})
    .populate({
      path: 'owner',
      select: 'firstName lastName'
    })
    .lean()
  return createdCreatures;
}

//REMOVE IF NOT NEEDED - query that retrieves the names of the creator
exports.getNames = async (id, path) => {
  const data = await Creature.findById(id)
    .populate({
      path: path,
      select:'firstName lastName',
    }).lean();

  return data;
};

//REMOVE IF NOT NEEDED - query that retrieves the names of people who voted
exports.getEmails = async (id, path) => {
  const data = await Creature.findById(id)
    .populate({
      path: path,
      select:'email'
    }).lean();

  return data;
};

// TODO: This needs to be renamed
exports.vote = async (creatureId, userId) => {
  const creature = await Creature.findById(creatureId);
  creature.votesList.push(userId);
  return creature.save();
}


exports.delete = async (creatureId) => {
  await Creature.findByIdAndDelete(creatureId);
  return;
};

exports.edit = async (creatureId, creatureData) => {
  await Creature.validate(creatureData);
  await Creature.findByIdAndUpdate(creatureId, creatureData);
  return;
};

// TODO: This needs to be reworked
exports.search = async (name, typeCreature) => {
  let creatures = await Creature.find().lean();

  if (name) {
    creatures = creatures.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (typeCreature) {
    creatures = creatures.filter((m) =>
      m.typeCreature.toLowerCase().includes(typeCreature.toLowerCase())
    );
  }
  return creatures;
};
