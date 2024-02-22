import PubSubApiClient from 'salesforce-pubsub-api-client';
async function run() {
    
        const client = new PubSubApiClient();
        await client.connect();
        
        const payload = {
            CreatedDate: new Date().getTime(), // Non-null value required but there's no validity check performed on this field
            CreatedById: '0050600000FlTqqAAF', // Valid user ID
            name__c: { string: 'Test 3' } // Field is nullable so we need to specify the 'string' type
        };
        const publishResult = await client.publish('/event/test_integration_ka__e', payload);
        console.log('Published event: ', JSON.stringify(publishResult));
    
}

run()