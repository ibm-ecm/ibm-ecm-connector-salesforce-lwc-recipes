public with sharing class UserInfoController {

    @AuraEnabled
    public static String getUserName() {
        return  UserInfo.getUserName(); 
    }
}