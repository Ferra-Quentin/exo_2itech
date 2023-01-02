module.exports=(sequelize,DataTypes) =>{
    return sequelize.define("Participants",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom:{
            type:DataTypes.STRING,
            allowNull: false
        },
        prenom:{
            type:DataTypes.STRING,
            allowNull: true
        },
        sexe:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull: true
        }

    })
}
