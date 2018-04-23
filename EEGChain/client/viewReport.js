Template.viewReport.helpers({
  patient: function(){
    console.log('viewReport', FlowRouter)
    return Patients.findOne({_id: FlowRouter._current.params.id});
  }
});
Template.viewReport.events({
    //'click #edf'(event, template){
     //id = FlowRouter._current.params.id;
     //var AWS = require('aws-sdk');
     /*var path = require('path');
       var fs = require('fs');

// For dev purposes only
    AWS.config.update({ accessKeyId: '', secretAccessKey: '' });
       
   var params = {
    Bucket : "eegishita", // name of the bucket
    Key: id +'.edf' // exact file name 
};

var filePath = path.join(__dirname, 'downloadedfile.edf');

var file = fs.createWriteStream(filePath, 'utf8');

file.on('finish', function(){ 
    console.log("File Downloaded");
});

file.on('error', function(e){ 
    console.log("Error downloading file", e);
});
var s3 = new AWS.S3();
s3.getObject(params).createReadStream().pipe(file);*/
        
/* Working code used in viewReport.html
AWS.config.update({region: 'us-east-2', accessKeyId: '', secretAccessKey: '', signatureVersion: 'v4'});


var myBucket = 'eegishita';
var myKey = id + '.edf';
var signedUrlExpireSeconds = 60 * 5;
//var ep = new AWS.Endpoint('https://s3.us-east-2.amazonaws.com');
//var s3 = new AWS.S3({endpoint: ep});
var s3 = new AWS.S3();

var url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
});

console.log(url);
        //console.log('$$$$$$$$$$$$print it$$$$$$$$$$$$$', id);
   
},*/
  'click #close'(event, instance) {
    event.preventDefault();
    //console.log(instance);
    FlowRouter.go('patients');
  }
});
