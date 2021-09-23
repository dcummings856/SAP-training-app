require('dotenv').config({path: './config/.env'})

module.exports = {
  getIndex: async (req, res, next) => {
    try{
      res.render('index.ejs')
    }catch(err){
      console.log(err)
    }
  }
}