const { Pool} = require('pg');
const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    password: 'agustin1234',
    database: 'firstapi',
    port: '5432'
 })
const getUsers= async (req,res)=>{
    //res.send('users');
    const response = await pool.query('Select * from users');
    res.status(200).json(response.rows);
    //console.log(response.rows);
    //res.send('users');
};

const createUser = async(req,res)=>{
    const {name, email}= req.body;
    
    const response = await pool.query('insert into users (name, email) values ($1,$2)', [name,email]);
    console.log(response);
    res.json({
        message: 'User added successfully',
        body:{
            user: {name, email}
        }
    })
};


const getUserById = async (req,res)=>{
    const getID = req.params.id;
    const response = await pool.query('select * from users where id = $1',[getID]);
    res.json(response.rows);

};

const deleteUsers = async(req,res)=>{
    const getID = req.params.id;
    const response = await pool.query('delete from users where id = $1',[getID]);
    console.log(response);
    res.json(`User ${getID} delete successfully`);


};

const updateUser = async (req,res)=>{
    const {name, email}= req.body;
    const getID = req.params.id;

    const response = await pool.query('update users set name = $1, email =$2 where id= $3 ',[name, email, getID]);
    console.log(response);
    res.json(`User update with ID: ${getID}`);
};


module.exports={
    getUsers,
    createUser,
    getUserById,
    deleteUsers,
    updateUser
}