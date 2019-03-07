
// Import the ORM to create functions that will interact with the database.
module.exports = (sequelize, DataTypes)=> {
  var Burger = sequelize.define("Burger", 
    {
      // The name identifying the burger
     burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // The availability boolean
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    
    });

  return Burger;
};


// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

// Add a flag for complete so that it's false by default if not given a value


