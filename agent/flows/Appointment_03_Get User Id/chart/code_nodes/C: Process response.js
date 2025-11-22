try {

    function processPatientResponse(respone) {
        let memory = "";
        let rtaText = "";

        if (respone.statusCode != 200) {
            cc.sessionInfo.patient.failed = true;
            rtaText = "Getting the patient failed. Try again once more."
            return "hello";
        }

        let content = respone.result.result;
        if (content.length == 1) {
            cc.sessionInfo.patient = {
                ...cc.sessionInfo.patient,
                "sysId": content[0].sys_id,
                "name": content[0].name
            };
            
        } else if (content.length > 1) {
            rtaText = "You have found more than one user with that name. Disambiguate with the caller which patient he is."
        } else {
            rtaText = "You have found no patient with that name in the database. Ask the caller for his name again."
        }

        cc.sessionInfo.appointments.rtaText = rtaText;
    }

    processPatientResponse(ci.httprequest);

    function someNewFunction(input) {
        if (input.replace("something") == "Something Else") {
            return "This";
        } else{
            return "That";
        }
    }

    
} catch(err) {
    api.log("error", `Error in cleaning get all incidents response. Error was: ${err.toString()}`)
}