import DialogModel from "../../models/DialogModel";

let BuyingTicketVocabulary: Array<DialogModel> = [
    // { speaker: "A", text: '' },
    // { speaker: "B", text: '' },
    { speaker: "A", text: 'I want to buy a plane ticket.' },
    { speaker: "B", text: 'I can help you make your reservation. What is your destination?' },
    { speaker: "A", text: 'My final destination is Sydney, Australia.' },
    { speaker: "B", text: 'What is your travel date?' },
    { speaker: "A", text: 'I am making a reservation for December 12th.' },
    { speaker: "B", text: 'Would you prefer to leave from Los Angeles International or Burbank Airport?' },
    { speaker: "A", text: 'I want to fly out of Burbank Airport.' },
    { speaker: "B", text: 'Would you rather fly in the morning or later in the day?' },
    { speaker: "A", text: 'I need an afternoon flight.' },
    { speaker: "B", text: 'I have you booked on a flight in the afternoon. Your tickets will arrive in the mail within 3 days.' },
];
export default BuyingTicketVocabulary
