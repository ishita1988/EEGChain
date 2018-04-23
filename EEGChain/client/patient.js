
Template.patient.events({
  'click tr'(event, instance) {
    //console.log('click', instance);
      console.log(Meteor.user());
    Meteor.call('logPatientAccessed', instance.data._id);
    FlowRouter.go('/viewReport/' + instance.data._id);
  },

})




Template.registerHelper('getName', function(){
  if(this.name && this.name[0] && this.name[0].text){
    return this.name[0].text;       
  } else {
    return '';
  }
});
Template.registerHelper('getMrn', function(){
  if(this.identifier && this.identifier[0] && this.identifier[0].value){
    return this.identifier[0].value;       
  } else {
    return '';
  }
});

Template.registerHelper('getDateOfBirth', function(){
  if(this.birthDate){
    return this.birthDate;     
  } else {
    return '';
  }
});

Template.registerHelper('getReport', function(){
  if(this.text && this.text.div){
    return this.text.div;     
  } else {
    return '';
  }
});

/*Template.registerHelper('getId', function(){
  if(this._id){
    return this._id;       
  } else {
    return '';
  }
});*/

Template.registerHelper('getURL', function(){
    id = this._id;
    var AWS = require('aws-sdk');
  

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
return url;
});