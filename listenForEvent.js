import PubSubApiClient from 'salesforce-pubsub-api-client';
async function run() {
    
        const client = new PubSubApiClient();
        await client.connect();
        
        // const eventEmitter = await client.subscribeFromEarliestEvent(
        //     '/event/test_integration_ka__e',
        //     100
        // );
        
        const eventEmitter = await client.subscribeFromReplayId(
            '/event/test_integration_ka__e',
            100,
            32674663
        );
        console.log('subscribed')
        //Handle incoming events
        let evs = []
        eventEmitter.on('data',async (event) => {
            // console.log('platform event')
            // console.log(JSON.stringify(event, null, 2));
            evs.push(JSON.stringify(event))
            
            console.log(evs)
        });
    
}

run()

// [
//     '{"replayId":32673966,"payload":{"CreatedDate":1708523483486,"CreatedById":"0050600000FlTqqAAF","name__c":"ev 1"}}',
//     '{"replayId":32673967,"payload":{"CreatedDate":1708523483486,"CreatedById":"0050600000FlTqqAAF","name__c":"ev 2"}}',
//     '{"replayId":32674471,"payload":{"CreatedDate":1708526103429,"CreatedById":"0050600000FlTqqAAF","name__c":"Hello world"}}',
//     '{"replayId":32674525,"payload":{"CreatedDate":1708526525388,"CreatedById":"0050600000FlTqqAAF","name__c":"ev 2"}}',
//     '{"replayId":32674520,"payload":{"CreatedDate":1708526422134,"CreatedById":"0050600000FlTqqAAF","name__c":"ev 1"}}',
//     '{"replayId":32674663,"payload":{"CreatedDate":1708527479041,"CreatedById":"0050600000FlTqqAAF","name__c":"Test 1"}}',
//     '{"replayId":32674574,"payload":{"CreatedDate":1708526896972,"CreatedById":"0050600000FlTqqAAF","name__c":"Hello world"}}',
//     '{"replayId":32674521,"payload":{"CreatedDate":1708526422134,"CreatedById":"0050600000FlTqqAAF","name__c":"ev 2"}}',
//     '{"replayId":32674621,"payload":{"CreatedDate":1708527201616,"CreatedById":"0050600000FlTqqAAF","name__c":"Hello world"}}',
//     '{"replayId":32674589,"payload":{"CreatedDate":1708527015884,"CreatedById":"0050600000FlTqqAAF","name__c":"Hello world"}}',
//     '{"replayId":32674524,"payload":{"CreatedDate":1708526525388,"CreatedById":"0050600000FlTqqAAF","name__c":"ev 1"}}'
//   ]