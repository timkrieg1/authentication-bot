cc.sessionInfo.appointments.newAppointment = {
    "patient": cc.sessionInfo.patient.sysId,
    "procedures": ci.aiAgent.toolArgs.purpose,
    "start_date_time": `${ci.aiAgent.toolArgs.appointment_date} ${ci.aiAgent.toolArgs.appointment_time}:00`
}

let demoText = "Here is something new";