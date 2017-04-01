var _ = require('lodash');
var Cat = require('./mongoose_models/cat_model');

module.exports = function(app){

    app.get('/cats', function(req, res){
        Cat.find({}, function(err, cats){
            if(err) 
                res.sendStatus(400);
            else  
                res.send(cats); 
        });
    });

     app.get('/cats/:id', function(req, res){
        Cat.findById(req.params.id, function(err, cat){
            if(err) 
                res.sendStatus(400);
            else  
                res.send(cat); 
        });
    });

    app.post('/cats', function(req, res){
        var newCat = Cat(req.body);
        newCat.save(function(err) {
            if (err)
                res.sendStatus(400);
            else
                res.send(newCat);
        });
    });

    app.put('/cats/:id', function(req, res){
        Cat.findById(req.params.id, function(err, cat){
            if(err)
                res.json({info : 'error finding cat', error: err});
            else
                if(cat){
                    _.merge(cat, req.body);
                    cat.save(function(err){
                        if(err)
                            res.json({info : 'error updating cat', error: err});
                        else
                            res.send(cat);
                    });
                }
                else
                    res.json({info : 'error cat not found', error: err});
        });
    });

    app.delete('/cats/:id', function(req, res){
        Cat.findByIdAndRemove(req.params.id, function(err, cat){
            if(err) 
                res.sendStatus(400);
            else  
                res.send('Cat deleted succesfully'); 
        });
    });
}