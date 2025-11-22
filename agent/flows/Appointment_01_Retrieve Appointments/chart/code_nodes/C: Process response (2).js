try {

    function processAppointmentResponse(respone) {
        let memory = {};
        let rtaText = {};

        if (respone.statusCode != 200) {
            cc.sessionInfo.appointments.failed = true;
            rtaText = "The patient was found. Getting all appointments failed."
            return
        }

        let content = respone.result.result;
        if (content.length > 0) {
            cc.sessionInfo.appointments.all = content;
            memory = cc.sessionInfo.appointments;
            rtaText = `Getting all appointments succeeded. The user currently has ${content.length.toString()} appointments. Go on with the process the patient wanted.`
        } else {
            rtaText = "The patient currently does not have any appointments"
        }

        cc.sessionInfo.aiAgent.shortTermMemory.appointments = memory;
        cc.sessionInfo.appointments.rtaText = rtaText;
    }

    processAppointmentResponse(ci.httprequest);

    
} catch(err) {
    api.log("error", `Error in cleaning get all appointments response. Error was: ${err.toString()}`)
}