# IBM ECM Salesforce Connector Recipes

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
               - AnnualRevenue (Float)
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

4. Push the app to your Salesforce org:
   ```
   sf project deploy start
   ```

5. To open the Salesforce org:
   ```
   sf org open
   ```

6. Allow access for a subset of Salesforce Organization users
   1. In the Setup menu, go to Administration > Users, and select Permission Sets.
   2. Click IBM Salesforce Connector Receipes User permission set.
   3. On the Permission set screen, click Manage Assignments.
   4. Select the user or users that you want to add to the permission set (or unselect users who you would like to remove from the permission set), and click Assign.
   5. Click Save to save your changes.

