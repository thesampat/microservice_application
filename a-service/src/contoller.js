const { TestServiceA, CalledByBService, SetOrder, UpdateService } = require('./service')

const TestServiceAController=(req, res)=>{
    console.log('controller from a')
    let result = TestServiceA()
    res.status(200).send(result)
}

const CalledByBController=(req, res)=>{
    // throw 'service b failed' // simulating error
    let result = CalledByBService()
    res.status(200).send(result)

    //time out mocking call
    // setTimeout(() => {
    //     res.status(200).send(result)
    // }, 100000);
}

const SetACarController=async(req, res)=>{
    let data = 'tomato'
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ip, 'the ip', req.ip)
    try {
        let resdata = await SetOrder(data)
        res.status(200).send(resdata)   
    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports = {TestServiceAController, CalledByBController, SetACarController}