const { TestService } = require('./service')
const communicator = require('../../communicator/httpClient')
const { SafeCall, RetryService } = require('./utils')

const TestServiceController = (req, res) => {
    try {
        const result = TestService();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ error: 'Service B failed' });
    }
};

module.exports = { TestServiceController }