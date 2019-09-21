const Router = require("koa-router");
const router = new Router();

const Controllers = require('../controllers/controllers');
const controllers = new Controllers();

//get方法取参：
router.get('/api/get', controllers.getQuery);

//get方法取id：
router.get('/api/get/:id', controllers.getParser);

//post方法 请求MongoDB数据库插入数据：
router.post('/api/create', controllers.createAData);

//put方法 请求MongoDB数据库更新数据：
router.put('/api/update', controllers.updateAData);

//put方法 请求MongoDB数据库删除数据：
router.del('/api/delete', controllers.deleteAData);

module.exports = router;