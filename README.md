# IBM ECM Salesforce Lightning Web Components Recipes

A collection of code examples for composing IBM Salesforce Connector Lightning Web Components. Each recipe demonstrate how to compose a wrapper component using IBM Salesforce Connector Lightning Web Component and setting the custom properties of the FileNet Document Class.

## Installing the app using a Salesforce Org

1. Set up your environment. Follow the steps below:

    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension
    - Install Salesforce Connector v5.8.0 on your Salesforce Org
    - Create following FileNet Document Classes in the Object Store 
       - MyAccount
           - Properties
               - Description   (String)
               - AccountNumber (String)
               - AnnualRevenue (String)
               - Rating        (String) Choice List (Hot, Warm, Cold)
               - IsNew         (Boolean)
               - DueDate       (DateTime)

       - MyContract
           - Properties
               - ContractNumber (String)
               - Description    (String)
               - ContractTerm   (Integer)
              
                  

2. Clone this repository:
   ```
   git clone https://github.com/ibm-ecm/ibm-ecm-connector-salesforce-lwc-recipes
   cd ibm-ecm-connector-salesforce-lwc-recipes
   ```

3. Now you need to authorize your Salesforce Org:
   ```
   sf org login web
   ```

4. Push the app to your scratch org:
   ```
   sf project deploy start
   ```

5. Open the scratch org:
   ```
   sf org open
   ```
