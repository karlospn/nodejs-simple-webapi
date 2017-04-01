var _ = require('lodash');
var Cats = require('./mongoose_models/cat_model');

module.exports = function(app){

    app.get('/cats', function(req, res){
        Cats.find({}, function(err, cats){
            if(err){
                res.sendStatus(400);
            }
            else{
                res.send(cats);
            }
        });
    });

    app.get('/ca')
}