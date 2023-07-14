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