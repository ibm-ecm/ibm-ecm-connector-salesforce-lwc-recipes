public with sharing class UserInfoController {

    @AuraEnabled(cacheable=true)
    public static User getUserInfo() {
        if (!Schema.sObjectType.User.isAccessible()) {
            throw new HandledException('User does not rights to access User object.');
        }        
        String userId = UserInfo.getUserId();
        User user = [SELECT Division, Department, CompanyName, Username FROM User Where id=:userId];
        return  user;
    }
}