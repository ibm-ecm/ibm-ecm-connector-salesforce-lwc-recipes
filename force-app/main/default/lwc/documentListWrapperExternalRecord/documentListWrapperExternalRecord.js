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
import { DocumentClass } from 'c/lwcHelperUtils';

export default class DocumentsListWrapper extends LightningElement  {    
    @api recordId;
    @api objectStoreId;
    @api listTitle;
    @api visibleRows;
    @api hideDocumentActions;
        
    @api objectApiName;

    connectedCallback() {
      if(this.objectApiName = 'RealEstateProperty__c') {
          this.recordId = `C:RealEstateProperty:${this.recordId}`;
      } 
    }

    get docClass () {
      if(this.recordId && this.objectApiName) {

        /*
        * For external record, all custom properties of the Document class needs
        * to be set as shown below. Setting the field name parameter on 
        * addProperty method do not work for external records since the 
        * Salesforce Connector won't be able to retrieve the External Record.
        */
        if(this.objectApiName === 'RealEstateProperty__c') {
          const dc = new DocumentClass('RealEstateProperty');
          dc.addProperty('Address', '12 Walnut Ave, Tustin, CA 92716'); 
          dc.addProperty('Type', 'Single Family');
          dc.addProperty('Bedrooms', 3); 
          dc.addProperty('Bathrooms', 2);
          dc.addProperty('Sqft', 1900); 
          dc.addProperty('Garage', 2);
          dc.addProperty('Price', 950000); 
          return dc.toObject();
        }
        else {
          const dc = new DocumentClass('Document');
          return this.dc.toObject();
        }
      }
      return;
    }
}
