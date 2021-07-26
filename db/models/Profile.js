const sequelizeSlugify  = require( "sequelize-slugify")
module.exports =(sequelize,DataTypes)=> {
    const Profiles=sequelize.define("Profile",{
        id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    username:{
        type: DataTypes.STRING,
           
    },
    slug:{
        type: DataTypes.STRING,
           unique: true
    },
    profileImage:{
        type: DataTypes.STRING,
           
    },
    isOnLine:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
      
    }
});
sequelizeSlugify.slugifyModel(Profiles,{
source: ["username"]
});
return Profiles}