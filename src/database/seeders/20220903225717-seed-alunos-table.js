'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('alunos', [{
        
          name: 'Sandro Servo',
          bio: 'I\'m a full-stack javascript developer with experience on MERN stack.',
          email: 'sandro_servo@hotmail.com',
          created_at: new Date(),
          updated_at: new Date()
        }, {
          name: 'Thales Canela ',
          bio: 'Font-end developer | React | PHP | Next.js | Typescript',
          email: 'systemboy@hotamil.com',
          created_at: new Date(),
          updated_at: new Date()
      
        },{
          name: 'Glorisnaldo - o Naldo ',
          bio: 'Font-end developer | React | PHP | Next.js | Typescript',
          email: 'magim@hotamil.com',
          created_at: new Date(),
          updated_at: new Date()
      
        }
      ])
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('alunos', null, {});
     
  }
};
