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

/** 
 * A Class representing a Content Platform Engine Document. 
 * This is a Data Transfer Object(DTO). 
 *  
*/
export class DocumentClass {
    name = null;
    propertyDefinitions = {};
    hideDocumentClass = true;
    hideNameProperty = true;

    /**
     * Create a Document Class instance.
     * @param {String} name - The symbolic name of the Document class.
     */    
    constructor(name) {
      this.name = name;
    }

    /**
     * addProperty - Add a property to Property Definitions. Either value or 
     * fieldName should be set when adding the property.
     * @param  {String} name  - The symbolic name of the Property Definition.
     * @param  {String} value - The value of the property.
     * @param  {String} fieldName - A Salesforce record field name (without __c). 
     *                              Connector will retrieve the value of the field 
     *                              and place into the proprty.
     * @param  {boolean} isHidden - Hide the property on Add Dialog. The default is true.
     */    
    addProperty(name, value, fieldName, isHidden=true) {
        this.propertyDefinitions[name] = {
            ...(value && {value}),
            ...(fieldName && {fieldName}),
            ...(isHidden && {isHidden}),
        }
    }

    /**
     * toObject - Convert to the plain object
     */     
    toObject() {
        return { ...this };
    }
}