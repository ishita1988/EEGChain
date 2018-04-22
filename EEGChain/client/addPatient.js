Template.addPatient.events({
  'submit'(event, instance) {
    event.preventDefault();
    var patient = {
      name: event.target.name.value,
      mrn: event.target.mrn.value,
      dob: event.target.dob.value,
      report: event.target.report.value,
      edf: event.target.edf.value
    }
    console.log('patient', patient);
    
    
    var newPatient = {
      'name' : [
        {
          'text' : event.target.name.value,
          'resourceType' : 'HumanName'
        }
      ],
      'active' : true,
      'gender' : 'female',
      'identifier' : [{
          'use' : 'usual',
          'type' : {
            text: 'Medical record number',
            'coding' : [
              {
                'system' : 'http://hl7.org/fhir/v2/0203',
                'code' : 'MR'
              }
            ]
          },
          'system' : 'urn:oid:1.2.36.146.595.217.0.1',
          'value' : event.target.mrn.value,
          'period' : {}
      }],
      //'birthDate' : new Date(1970, 1, 25),
      'birthDate' : new Date(event.target.dob.value),
      'text': {
        'status': 'generated',
        'div': event.target.report.value
      },
      'resourceType' : 'Patient'
    };


    //console.log('newPatient', newPatient);
    console.log('*******client side called******');
    Meteor.call('addPatient', newPatient, patient, function(err,res) {
      if(!err) {
        FlowRouter.go('patients');
      }
    });
  },
  'click #cancel'(event, instance) {
    event.preventDefault();
    FlowRouter.go('patients');
  },
   'change .file-upload-input': function(event, template){
   var func = this;
   var file = event.currentTarget.files[0];
   var reader = new FileReader();
   reader.onload = function(fileLoadEvent) {
      Meteor.call('file-upload', file, reader.result);
   };
   reader.readAsBinaryString(file);
}
});
