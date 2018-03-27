module.exports={
    getTodos: (req, res, next)=>{
        let myResponse = 'getTodos hit';
        console.log(myResponse);
        res.status(200).send(myResponse);
    }
}