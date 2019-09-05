const Router = require("koa-router");
const router = new Router();
const controllers = require('../controllers/controllers.js');


router.get('/api/get', controllers.getQuery);
//get方法取参


router.get('/api/get/:id', controllers.getId);
//get方法取id：


router.post('/api/create', controllers.insertAData);
//post方法 请求MongoDB数据库插入数据

router.put('/api/update', controllers.updateAData);
//put方法 请求MongoDB数据库更新数据


router.del('/api/delete', controllers.deleteAData);
//put方法 请求MongoDB数据库删除数据

module.exports = router;