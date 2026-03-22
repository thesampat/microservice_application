const { publishEvent } = require('../kafka/publisher');
const { TestService, AddItem } = require('./service')
const { SafeCall, RetryService } = require('./utils')

const TestServiceController = async(req, res) => {
    try {
        const result = await TestService();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ error: 'Service B failed' });
    }
};


const AddItemController = async(req, res) => {
    const {user, item} = req.query
    try {
        await AddItem(user, item);
        publishEvent('from-service-x', {item:item, user:user})
        res.status(200).send('Item Added');
    } catch (error) {
        res.status(500).json({ error: 'Service B failed' });
    }
};

module.exports = { TestServiceController, AddItemController }