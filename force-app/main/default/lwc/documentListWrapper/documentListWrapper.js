/*
 * Licensed Materials - Property of IBM © Copyright IBM Corp. 2023 All Rights Reserved.
 * 
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 * 
 * DISCLAIMER OF WARRANTIES :
 * 
 * Permission is granted to copy and modify this Sample code, and to distribute modified versions provided that both the
 * copyright notice, and this permission notice and warranty disclaimer appear in all copies and modified versions.
 * 
 * THIS SAMPLE CODE IS LICENSED TO YOU AS-IS. IBM AND ITS SUPPLIERS AND LICENSORS DISCLAIM ALL WARRANTIES, EITHER
 * EXPRESS OR IMPLIED, IN SUCH SAMPLE CODE, INCLUDING THE WARRANTY OF NON-INFRINGEMENT AND THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT WILL IBM OR ITS LICENSORS OR SUPPLIERS BE LIABLE FOR
 * ANY DAMAGES ARISING OUT OF THE USE OF OR INABILITY TO USE THE SAMPLE CODE, DISTRIBUTION OF THE SAMPLE CODE, OR
 * COMBINATION OF THE SAMPLE CODE WITH ANY OTHER CODE. IN NO EVENT SHALL IBM OR ITS LICENSORS AND SUPPLIERS BE LIABLE
 * FOR ANY LOST REVENUE, LOST PROFITS OR DATA, OR FOR DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE
 * DAMAGES, HOWEVER CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, EVEN IF IBM OR ITS LICENSORS OR SUPPLIERS HAVE
 * BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
 */

/* eslint-disable no-console */

import { LightningElement, api } from 'lwc';
import { DocumentClass } from 'c/helperUtils';
import queryRecord from '@salesforce/apex/RecordInfoController.queryRecord';

export default class DocumentsListWrapper extends LightningElement  {    
    @api recordId;
    @api objectStoreId;
    @api listTitle;
    @api visibleRows;
    @api hideDocumentActions;
        
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

    get docClass () {
      /*
        A condition logic to create different Document class and sets its properties.
          - The API name of the Record is Account then create a MyDocument1 class. 
          - The API name of the Record is Book__c then create a Book Class.
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
            dc.addProperty('ContractNumber', null, 'ContractNumber', false); //Contract field - ContractNumber
            dc.addProperty('ContractTerm', null, 'ContractTerm', false); //Contract field - ContractTerm
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
