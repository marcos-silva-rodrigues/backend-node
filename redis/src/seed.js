const seeder = require('mongoose-seed');

seeder.connect('mongodb://localhost:27017/cache', function() {
  seeder.loadModels([
    'src/schemas/Task.js'
  ]);

  seeder.clearModels(['Task'], function() {
    seeder.populateModels(require('./seed-info.js'), function() {
      seeder.disconnect();

    });

  });
});
