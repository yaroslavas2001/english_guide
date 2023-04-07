import DialogModel from "../../models/DialogModel";

let BuyingTicketVocabulary: Array<DialogModel> = [
    // { speaker: "A", text: '' },
    // { speaker: "B", text: '' },
    { speaker: "A", text: 'I would like to book a flight.' },
    { speaker: "B", text: 'I can help you with that. Where are you traveling to?' },
    { speaker: "A", text: 'I am traveling to Singapore.' },
    { speaker: "B", text: 'What date will you be traveling?' },
    { speaker: "A", text: 'I want to fly on June 14th.' },
    { speaker: "B", text: 'Do you want to fly out of Los Angeles International or Burbank Airport?' },
    { speaker: "A", text: 'I would like to fly out of Los Angeles International Airport.' },
    { speaker: "B", text: 'Would you prefer a morning or an afternoon flight?' },
    { speaker: "A", text: 'I would rather fly in the morning.' },
    { speaker: "B", text: 'Well, I have you booked on a flight that will fit your schedule. The tickets will arrive by mail in a few days.' },
];
export default BuyingTicketVocabulary
