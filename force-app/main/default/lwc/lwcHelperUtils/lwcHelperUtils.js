/** 
 * A Class representing a Content Platform Engine Document.  
 *  
*/
export class DocumentClass {

    name = null;
    propertyDefinitions = {};
    hideDocumentClass = true;
    hideNameProperty = true;

    /**
     * Create a Document Class instance.
     * @param {string} name - The symbolic name of the Document class.
     */    
    constructor(name) {
      this.name = name;
    }

    /**
     * addProperty - Add a property to Property Definitions. Either value or 
     * fieldName should be set when adding the property.
     * @param  {string} name  - The symbolic name of the Property Definition.
     * @param  {string} value - The value of the property.
     * @param  {string} fieldName - A Salesforce record field name (without __c). 
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
     * Get the plain object
     * @return {object} - The object value of the DocumentClass instance.
     */     
    toObject() {
        return { ...this };
    }
}