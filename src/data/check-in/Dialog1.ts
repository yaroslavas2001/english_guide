import DialogModel from "../../models/DialogModel";

let CheckInDialog: Array<DialogModel> = [
    { speaker: "A", text: 'Welcome. May I have your tickets?' },
    { speaker: "B", text: 'Here you go.' },
    { speaker: "A", text: 'Is anybody else traveling with you two?' },
    { speaker: "B", text: `No. It's just us.` },
    { speaker: "A", text: `Do you have your passports with you?` },
    { speaker: "B", text: `Yes. Here it is.` },
    { speaker: "A", text: `I'm going to ask you a series of questions. Please respond with a yes or a no.` },
    { speaker: "B", text: `Ok.` },
    { speaker: "A", text: `Did someone you do not know ask you to take something on the plane with you?` },
    { speaker: "B", text: `No.` },
    { speaker: "A", text: `Did you have possession of your luggage since you packed?` },
    { speaker: "B", text: `Yes.` },
    { speaker: "A", text: `Did you leave your luggage unattended at all in the airport?` },
    { speaker: "B", text: `No.` },
    { speaker: "A", text: `Are you carrying any weapons or firearms?` },
    { speaker: "B", text: `No.` },
    { speaker: "A", text: `Are you carrying any flammable material?` },
    { speaker: "B", text: `No.` },
    { speaker: "A", text: `Do you have any perishable food items?` },
    { speaker: "B", text: `No.` },
    { speaker: "A", text: `Great. Can you place your baggage over here?` },
    { speaker: "B", text: `Sure.` },
    { speaker: "A", text: `Would you like an aisle or a window seat?` },
    { speaker: "B", text: `Window seat please.` },
    { speaker: "A", text: `Ok. I am placing you two in 21A and 21B. The gate number is C2. It is on the bottom of the ticket. They will start boarding 20 minutes before the departure time. C2 is located around the corner through the hall. Thank you.` },
    { speaker: "B", text: `Can you point me to gate C2?` },
    { speaker: "A", text: `Sure. It's that way. Around that corner.` },
    { speaker: "B", text: `Great. Thank you.` },
    // { speaker: "A", text: `` },
    // { speaker: "B", text: `` },
    // { speaker: "A", text: `` },
    // { speaker: "B", text: `` },

];
export default CheckInDialog
