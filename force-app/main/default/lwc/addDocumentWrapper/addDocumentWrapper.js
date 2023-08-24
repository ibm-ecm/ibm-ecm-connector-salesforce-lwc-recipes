/* eslint-disable no-console */

import { LightningElement, api } from 'lwc';
import { DocumentClass } from 'c/lwcHelperUtils';
import queryRecord from '@salesforce/apex/RecordInfoController.queryRecord';

export default class DocumentsListWrapper extends LightningElement {    
    @api recordId;
    @api objectStoreId;
    @api fileUploadLabel;
    objectApiName;

    connectedCallback() {
      if(!this.objectApiName) {
        if(this.recordId) {
          queryRecord({recordId: this.recordId}).then(apiName => {
            this.objectApiName = apiName;
          }).catch(err => {
            console.log(err);
          });       
        }
      }
    }

    handleFileUploadComplete () {
      // A back function after the file is uploaded.
      console.log('File Upload Completed');
    }

    get docClass () {
      /*
        A condition logic to create different Document class and sets its properties.
          - The API name of the Record is Account then create a MyAccount class. 
          - The API name of the Record is Contract then create a MyContract Class.
          - For all other Records, create a Document class.
        Document class name and Property name must match with the Content Platform Engine
        Document class symbolic name and Property Defnition symbolic name.
      */
      if(this.recordId && this.objectApiName) {

        if(this.objectApiName === 'Account') {
          // create a class passing the Document Class Symbolic Name.
          const dc = new DocumentClass('MyAccount');
          // Add Propeties passing Property symbolic name, value or Salesforce Record Field Name
          // and IsHidden to hide or display property on the Add Document dialog.
          // IsHidden is by default set to true so set it only when property needs to be 
          // displayed, set IsHidden to false.
          // Value or FieldName can be set on the property not both on the same property.
          dc.addProperty('AccountNumber', null,'AccountNumber'); // Account field - AccountNumber
          dc.addProperty('Description', null, 'Description'); //Account field - Description
          dc.addProperty('AnnualRevenue', null,'AnnualRevenue'); // Account field - AnnualRevenue
          dc.addProperty('Rating', null, 'Rating'); //Account field - Rating
          dc.addProperty('IsNew', true);
          dc.addProperty('DueDate', '2023-11-25T23:47:30.323Z');

          return dc.toObject();
        }
        else if(this.objectApiName === 'Contract') {
          const dc = new DocumentClass('MyContract');
          dc.addProperty('Description', null, 'Description'); //Contract field - Description
          dc.addProperty('ContractNumber', null, 'ContractNumber'); //Contract field - ContractNumber
          dc.addProperty('ContractTerm', null, 'ContractTerm'); //Contract field - ContractTerm
          return dc.toObject();
        }
        else {
          const dc = new DocumentClass('Document');
          return dc.toObject();
        }        
      }
      return;
    }
}
