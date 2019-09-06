const Router = require("koa-router");
const router = new Router();
const {getQuery, getParser, createAData, updateAData, deleteAData} = require('../controllers/controllers');


//get方法取参：
router.get('/api/get', getQuery);

//get方法取id：
router.get('/api/get/:id', getParser);

//post方法 请求MongoDB数据库插入数据：
router.post('/api/create', createAData);

//put方法 请求MongoDB数据库更新数据：
router.put('/api/update', updateAData);

//put方法 请求MongoDB数据库删除数据：
router.del('/api/delete', deleteAData);

module.exports = router();