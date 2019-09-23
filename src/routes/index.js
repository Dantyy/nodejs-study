const Router = require("koa-router");
const router = new Router();

const Controllers = require('../controllers/controllers');
const UserControllers = require('../controllers/user-controllers');
const WeddingControllers = require('../controllers/wedding-controllers');
const controllers = new Controllers();
const userControllers = new UserControllers();
const weddingControllers = new WeddingControllers();

//get方法取参：
router.get('/api/getQuery', controllers.getQuery);

//get方法取id：
router.get('/api/get/:id', controllers.getParser);

//get方法 请求MongoDB数据库读取数据：
// router.get('/api/user/get', );
router.get('api/wedding/get', weddingControllers.findAWedding);

//post方法 请求MongoDB数据库插入数据：
router.post('/api/user/create', userControllers.createAUser);
router.post('/api/wedding/create', weddingControllers.createAWedding);

//put方法 请求MongoDB数据库更新数据：
router.put('/api/user/update', userControllers.updateAUser);
router.put('/api/wedding/update', weddingControllers.updateAWedding);

//put方法 请求MongoDB数据库删除数据：
router.del('/api/user/delete', userControllers.deleteAUser);
router.del('/api/wedding/delete', weddingControllers.deleteAWedding);

module.exports = router;