public with sharing class RecordInfoController {

    @AuraEnabled
    public static String queryRecord(String recordId) {
        String typeName = '';
        try {
            if(!recordId.equalsIgnoreCase('')) {
                typeName = Id.valueOf(recordId).getSobjectType().getDescribe().getName();
            }
        } catch(Exception ex) {
            System.debug(ex);
        }
        return typeName;
    }
}