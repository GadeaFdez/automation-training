import * as studentForm from '../page-object-model/student-form';
import image from '../images/headshots.jpeg'

describe('Check adding new user from Practice Form page', () => {
  const firstName: string  = 'Gadea';
  const lastName: string = 'Fernandez'; 
  const userEmail: string = 'gf@gmail.com'; 
  const userGender: string = 'Male';
  const phoneNumber: string = '7827568383'; 
  const birthdayMonth: string = 'August';
  const birthdayYear: string = '1997';
  const birthdayDay: string = '15'; 
  const subject: string = 'Maths';  
  const hobby: string = 'Sports'; 
  const address: string = 'SW6 2PN'; 
  const imageName: string = 'headshots.jpeg';
  const state: string = 'NCR'; 
  const city: string = 'Delhi'
  const successMessage: string = 'Thanks for submitting the form'; 

    beforeEach(() => {
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
      cy.visit('/automation-practice-form');
    })
  
    it('should access Tools QA and assert the url', () => {
      cy.url().should('include', 'automation-practice-form'); 
    })
  
  
    it('Should find and fill up all text-boxes and submit', ()=> {
      studentForm.addStudentBasicInformation(firstName, lastName, phoneNumber, birthdayMonth, birthdayYear)
      studentForm.fillStudentEmail(userEmail);
      studentForm.fillStudentSubject(subject); 
      studentForm.fillStudentHobbies(); 
      //studentForm.fillStudentImage(image); 
      studentForm.fillStudentFullAddress(address)
      studentForm.submitStudent(); 
    
    })
  
  
       
     it('should assert users information', () => {
      studentForm.addStudentBasicInformation(firstName, lastName, phoneNumber, birthdayMonth, birthdayYear)
      studentForm.fillStudentEmail(userEmail);
      studentForm.fillStudentSubject(subject); 
      studentForm.fillStudentHobbies(); 
      //studentForm.fillStudentImage(image); 
      studentForm.fillStudentFullAddress(address)
  
      studentForm.submitStudent();       
     //Assert a modal is displayed after clicking on the submit button
    
     studentForm.assertModalView();
      //Assert the success message is correct
      studentForm.assertModalHeading(successMessage);
     
      //Assert the student information is correct 
      studentForm.assertFullName(firstName, lastName);
      studentForm.assertStudentEmailAddress(userEmail); 
      studentForm.assertStudentGender(userGender); 
      studentForm.assertStudentPhoneNumber(phoneNumber);
      studentForm.assertStudentBirthday(birthdayDay, birthdayMonth, birthdayYear); 
      studentForm.assertStudentSubject(subject); 
      studentForm.assertStudentHobbies(hobby); 
      //studentForm.assertStudentImage(imageName); 
      studentForm.assertStudentAddress(address); 
      studentForm.assertStudentStateAndCity(state, city);  
      })
    })
  