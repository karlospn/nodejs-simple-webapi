var _ = require('lodash');
var Dog = require('./../models/dog_model');

module.exports = function(app){

    app.get('/dogs', function(req, res){
        Dog.find({}, function(err, dogs){
            if(err) 
                res.sendStatus(400);
            else  
                res.send(dogs); 
        });
    });

     app.get('/dogs/:id', function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err) 
                res.sendStatus(400);
            else  
                res.send(dog); 
        });
    });

    app.post('/dogs', function(req, res){
        var newDog = Dog(req.body);
        newDog.save(function(err) {
            if (err)
                res.sendStatus(400);
            else
                res.send(newDog);
        });
    });

    app.put('/dogs/:id', function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err)
                res.json({info : 'error finding dog', error: err});
            else
                if(dog){
                    _.merge(dog, req.body);
                    dog.save(function(err){
                        if(err)
                            res.json({info : 'error updating dog', error: err});
                        else
                            res.send(dog);
                    });
                }
                else
                    res.json({info : 'error dog not found', error: err});
        });
    });

    app.delete('/dogs/:id', function(req, res){
        Dog.findByIdAndRemove(req.params.id, function(err, dog){
            if(err) 
                res.sendStatus(400);
            else  
                res.send('Dog deleted succesfully'); 
        });
    });
}