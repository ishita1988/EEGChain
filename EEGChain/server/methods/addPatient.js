import createPatient from '../createPatient.js';


Meteor.methods({
  'addPatient' : function(patient, patient_eeg)  {
    console.log('*******Server side called******');
    //console.log(patient_eeg.edf);
    //console.log(this.userId);
    //console.log(patient);
    if(this.userId === null) {
      throw new Meteor.Error("logged-out", "The user must be logged in.");
    }
    createPatient(patient, patient_eeg);
  }
});
