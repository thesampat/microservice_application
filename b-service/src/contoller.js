const { TestServiceB } = require('./service')
const communicator = require('../../communicator/httpClient')
const { SafeCall, RetryService } = require('./utils')

const TestServiceBController = (req, res) => {
    try {
        const result = TestServiceB();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ error: 'Service B failed' });
    }
};

const CallServiceAControllerAlso = async (req, res) => {
    try {
        const result = await SafeCall(
            TestServiceB(),
            'Service B failed'
        );


        const data = await SafeCall(
            RetryService(communicator.CallServiceA()),
            { data: 'Service A failed' }
        );


        res.status(200).send({ A: { data: data?.data, success:data?.data!=='Service A failed'}, B: { success:result!=='Service B failed', data: result } });
    } catch (error) {
        res.status(500).send('Unexpected error');
    }
};

module.exports = { TestServiceBController, CallServiceAControllerAlso }