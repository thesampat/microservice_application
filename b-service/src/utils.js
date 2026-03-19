const SafeCall=async(fn, fallback)=>{
    try {
        return await fn
    } catch (error) {
        return fallback
    }
}

const RetryService=async(fn, retries=2)=>{
    try {
        console.log('Retrying....', retries)
        return await fn;
    } catch (error) {
        if (retries===0) throw error
        return RetryService(fn, retries-1)
    }
}



module.exports = {SafeCall, RetryService}