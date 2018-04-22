Meteor.methods({
   'aws_download': function (patientId) {
       var AWS = require('aws-sdk');
       var path = require('path');
       var fs = require('fs');

// For dev purposes only
    AWS.config.update({ accessKeyId: 'AKIAIC4UPV6UV3ZOZRRQ', secretAccessKey: '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' });
       
   var params = {
    Bucket : "eegishita", // name of the bucket
    Key: patientId +'.edf' // exact file name 
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
s3.getObject(params).createReadStream().pipe(file);
   }
});

// ARE WE USING THIS FILE??