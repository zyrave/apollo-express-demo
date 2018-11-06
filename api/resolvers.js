const defaultData = [
  {
    id: 1,
    name: 'Luke SkyWalker',
    gender: 'male',
    homeworld: 'Tattoine',
  },
  {
    id: 2,
    name: 'C-3PO',
    gender: 'bot',
    homeworld: 'Tattoine',
  },
];

const resolvers = {
  Query: {
    allPeople: () => defaultData,
    person: (root, { id }) => defaultData.filter(character => (character.id = id))[0], // eslint-disable-line
  },
};

export default resolvers;
