
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'shampoo, tub, dog', description: 'cleaning supplies'},
        {name: 'kitchen, ingredients, instructions', description: 'cooking supplies'},
        {name: 'book, lecture material, homework instructions', description: 'homework related materials'}
      ]);
    });
};
