
import PubSubApiClient from 'salesforce-pubsub-api-client';

async function run() {
    try {
        const client = new PubSubApiClient();
        await client.connect();

        // Subscribe to account change events
        const eventEmitter = await client.subscribe(
            '/data/AccountChangeEvent'
        );
        console.log('subscribed')
        //Handle incoming events
        eventEmitter.on('data',async (event) => {
            console.log(
                `Handling ${event.payload.ChangeEventHeader.entityName} change event ` +
                    `with ID ${event.replayId} ` +
                    `on channel ${eventEmitter.getTopicName()} ` +
                    `(${eventEmitter.getReceivedEventCount()}/${eventEmitter.getRequestedEventCount()} ` +
                    `events received so far)`
            );
            console.log(JSON.stringify(event, null, 2));
            
        });
        
        // const payload = {
        //     CreatedDate: new Date().getTime(), // Non-null value required but there's no validity check performed on this field
        //     CreatedById: '0050600000FlTqqAAF', // Valid user ID
        //     name__c: { string: 'Hello world' } // Field is nullable so we need to specify the 'string' type
        // };
        // const publishResult = await client.publish('/event/test_integration_ka__e', payload);
        // console.log('Published event: ', JSON.stringify(publishResult));
    } catch (error) {
        console.error(error);
    }
}

run();