Meteor.methods({
   'file-upload': function (fileInfo, fileData) {
       var fs = require('fs');
      console.log("received file " + fileInfo.name);
      fs.writeFile('/Users/ishita/Documents/'+fileInfo.name, fileData);
   }
});
