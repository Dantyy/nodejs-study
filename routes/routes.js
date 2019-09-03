const controllers = require('../controllers/controllers.js');
const lib = require('../lib/lib.js');
const router = lib.router;

exports.getName = router.get('/api/get', controllers.getQuery);
//get方法取参


exports.getId = router.get('/api/get/:id', controllers.getId);
//get方法取id：


exports.postCreate = router.post('/api/create', controllers.insertAData);
//post方法 请求MongoDB数据库插入数据

exports.putUpdate = router.put('/api/update', controllers.updateAData);
//put方法 请求MongoDB数据库更新数据


exports.delDelete = router.del('/api/delete', controllers.deleteAData);
//put方法 请求MongoDB数据库删除数据
