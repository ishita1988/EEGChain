Meteor.methods({
   'aws_upload': function (patientId) {
    var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
    AWS.config.update({ accessKeyId: '', secretAccessKey: '' });

// Read in the file, convert it to base64, store to S3
    fs.readFile('/Users/ishita/Documents/undefined', function (err, data) {
    if (err){ 
       throw err; }

  var base64data = new Buffer(data, 'binary');

  var s3 = new AWS.S3();
  s3.putObject({
    Bucket: 'eegishita',
    Key: patientId +'.edf',
    Body: base64data,
    ACL: 'public-read'
  },function (resp) {
    console.log(arguments);
    console.log('Successfully uploaded package.');
  });

});
   }
});

