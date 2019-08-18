const mongoose = require('mongoose');
mongoose.connect('mongodb://qa_registry_feed_readwrite:Test1234@qa-registry-feed-82xp1-mongodb.net/qa-registry-feed');

//Defining a Model:
//Models are defined through the Schema interface.
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

//The following example shows some of these features:
const Comment = new Schema({
    name: { tyoe: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { tyoe: Date, default: Date.now },
    buff: Buffer
});
//a setter
Comment.path('name').set(function (v){
    return capitalize(v);
});
//middleware
Comment.pre('save', function(next){
    notify(this.get('email'));
    next();
});



const MyModel = mongoose.model('Ticket', mySchema);
MyModel.find({}, function(err, docs) {
    // docs.forEach
});    //You can also findOne, findById, update, etc. 

const conn = mongoose.createConnection('your connection string');
const MyModel = conn.model('ModelName', schema);
const m = new MyModel;
m.save();  //works

const BlogPost = mongoose.model('BlogPost'); //retrieve my model
const post = new BlogPost(); //Creare a blog post
post.comments.push({ title: 'My comment' }); //create a comment
post.save(function(err){
    if (!err) console.log('Success!');
});

