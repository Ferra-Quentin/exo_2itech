module.exports=(sequelize,DataTypes) =>{
    return sequelize.define("Formations",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom:{
            type:DataTypes.STRING,
            allowNull: false
        },
        date:{
            type:DataTypes.DATE,
            allowNull: false
        },
        duree:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        version:{
            type:DataTypes.STRING,
            allowNull: true
        },
        formateur:{
            type:DataTypes.STRING,
            allowNull: false
        },
        icon:{
            type:DataTypes.STRING,
            allowNull: true
        },
        langages:{
            type:DataTypes.STRING,
            allowNull: false
        }

    })
}
