
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'shampoo, tub, dog', description: 'cleaning supplies'},
        {name: 'kitchen, ingredients, instructions', description: 'cooking supplies'},
        {name: 'book, lecture material, homework instructions', description: 'homework related materials'}
      ]);
    });
};
