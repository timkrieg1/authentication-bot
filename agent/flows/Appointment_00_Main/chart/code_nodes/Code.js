if (!cc.sessionInfo.appointments?.secondTime) {
    cc.sessionInfo.appointments.secondTime = true;
    cc.sessionInfo.appointments.rta = "The appointment is not avaliable anymore. The first available slot would be in exaclty 2 weeks at 14:30 (Say the date to the user, dont say in two weeks). Ask the user if that is okay for him."
} else {
    cc.sessionInfo.appointments.rta = "The appointment is still available."
    let demo = "A new line";
}
