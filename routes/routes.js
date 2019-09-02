
app.use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);



router.get('/api/get', async (ctx)=>{
//get方法取参
});


router.get('/api/get/:id', async (ctx)=>{
//get方法取id：
});

router.post('/api/create', async (ctx)=>{
//post方法 请求MongoDB数据库插入数据
});

router.put('/api/update', async (ctx)=>{
//put方法 请求MongoDB数据库更新数据
});

router.del('/api/delete', async (ctx)=>{
//put方法 请求MongoDB数据库删除数据
});