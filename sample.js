
import PubSubApiClient from 'salesforce-pubsub-api-client';

async function run() {
    try {
        const client = new PubSubApiClient();
        await client.connect();

        // // Subscribe to account change events
        // const eventEmitter = await client.subscribe(
        //     '/data/AccountChangeEvent'
        // );
        // console.log('subscribed')
        // //Handle incoming events
        // eventEmitter.on('data',async (event) => {
        //     console.log(
        //         `Handling ${event.payload.ChangeEventHeader.entityName} change event ` +
        //             `with ID ${event.replayId} ` +
        //             `on channel ${eventEmitter.getTopicName()} ` +
        //             `(${eventEmitter.getReceivedEventCount()}/${eventEmitter.getRequestedEventCount()} ` +
        //             `events received so far)`
        //     );
        //     console.log(JSON.stringify(event, null, 2));
            
        // });
        
       
        
        // Subscribe to account change events
        // const eventEmitter = await client.subscribe(
        //     '/event/test_integration_ka__e'
        // );
        // console.log('subscribed')
        // //Handle incoming events
        // eventEmitter.on('data',async (event) => {
        //     // console.log(
        //     //     `Handling ${event.payload.ChangeEventHeader.entityName} change event ` +
        //     //         `with ID ${event.replayId} ` +
        //     //         `on channel ${eventEmitter.getTopicName()} ` +
        //     //         `(${eventEmitter.getReceivedEventCount()}/${eventEmitter.getRequestedEventCount()} ` +
        //     //         `events received so far)`
        //     // );
        //     console.log('platform event')
        //     console.log(JSON.stringify(event, null, 2));
            
        // });
        // setTimeout(async ()=>{
        //     const payload = {
        //         CreatedDate: new Date().getTime(), // Non-null value required but there's no validity check performed on this field
        //         CreatedById: '0050600000FlTqqAAF', // Valid user ID
        //         name__c: { string: 'Hello world' } // Field is nullable so we need to specify the 'string' type
        //     };
        //     const publishResult = await client.publish('/event/test_integration_ka__e', payload);
        //     console.log('Published event: ', JSON.stringify(publishResult));
        // },2000)
        
        // const payload = {
        //     CreatedDate: new Date().getTime(), // Non-null value required but there's no validity check performed on this field
        //     CreatedById: '0050600000FlTqqAAF', // Valid user ID
        //     name__c: { string: 'Hello world' } // Field is nullable so we need to specify the 'string' type
        // };
        // const publishResult = await client.publish('/event/test_integration_ka__e', payload);
        // console.log('Published event: ', JSON.stringify(publishResult));
        
        const eventEmitter = await client.subscribeFromEarliestEvent(
            '/event/test_integration_ka__e',
            10
        );
        eventEmitter.on('data',async (event) => {
            // console.log(
            //     `Handling ${event.payload.ChangeEventHeader.entityName} change event ` +
            //         `with ID ${event.replayId} ` +
            //         `on channel ${eventEmitter.getTopicName()} ` +
            //         `(${eventEmitter.getReceivedEventCount()}/${eventEmitter.getRequestedEventCount()} ` +
            //         `events received so far)`
            // );
            console.log('platform event')
            console.log(JSON.stringify(event, null, 2));
        })
    } catch (error) {
        console.error(error);
    }
}

run();