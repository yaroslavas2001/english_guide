import TextTranslationModel from "../../models/TextTranslationModel";

let Text: Array<TextTranslationModel> = [
    { text: `Ladies and gentlemen, welcome onboard Flight 4B7 with service from Hong Kong to San Francisco. We are currently third in line for take-off and are expected to be in the air in approximately seven minutes time. We ask that you please fasten your seatbelts at this time and secure all baggage underneath your seat or in the overhead compartments. We also ask that your seats and table trays are in the upright position for take-off. Please turn off all personal electronic devices, including laptops and cell phones. Smoking is prohibited for the duration of the flight. Thank you for choosing Mountain Airlines.  `, translation: `Дамы и господа, добро пожаловать на борт рейса 4B7 с обслуживанием из Гонконга в Сан-Франциско. В настоящее время мы являемся третьими в очереди на взлет и взлетим примерно через семь минут. Мы просим вас пристегнуть ремни безопасности в это время и закрепить весь багаж под вашим сидением или в верхних отделениях. Мы также просим, чтобы ваши места и подносы были в вертикальном положении для взлета. Пожалуйста, отключите все личные электронные устройства, включая ноутбуки и мобильные телефоны. Курение запрещено на время полета. Спасибо, что выбрали Mountain Airlines. ` },
    { text: `Enjoy your flight!`, translation: ` Наслаждайтесь вашим полетом!` },
    { text: `Ladies and gentlemen. Your attention, please! If there is a doctor on the board, please contact a member of the cabin crew. Thank you!`, translation: `Дамы и господа. Прошу минутку внимания, пожалуйста! Если на борту есть врач, пожалуйста, свяжитесь с членом экипажа. Спасибо!` },
    { text: `Safety Briefing`, translation: `Инструктаж по технике безопасности` },
    {
        text: `Ladies and gentlemen, on behalf of the crew I ask that you please direct your attention to the monitors in front of you as we review the emergency procedures. There are 8 emergency exits on this aircraft. Please take a minute to locate the emergency exit closest to you. Note that the nearest exit may be behind you. Should the cabin experience sudden pressure loss, stay calm and listen for instructions from the cabin crew. Oxygen masks will drop down from above your seat. Place the mask over your mouth and nose, like this. Pull the strap to tighten it. If you are traveling with small children, make sure that you secure your own mask first before helping your children with theirs. In the unlikely event of an emergency landing and evacuation, life rafts are located below your seats and emergency lighting will lead you to your closest emergency exit. We ask that you make sure that all carry-on luggage is stowed away safely during the flight. While we wait for takeoff, please take a moment to review the airline safety sheet in the seat pocket in front of you.`, translation: `Дамы и господа, от имени экипажа самолёта прошу вас посмотреть на мониторы перед вами, пока мы инструктируем вас по технике безопасности. Этот самолёт оборудован 8 аварийными выходами. Определите расположение ближайшего – он может быть позади вас. В случае снижения давления в салоне самолёта сохраняйте спокойствие и слушайте инструкции от экипажа. Сверху вашего сиденья свалятся кислородные маски. Наденьте маску на рот и нос вот так и потяните за ремешок для затягивания. Перед надеванием маски на своего ребёнка сначала наденьте маску на себя. В крайнем случае аварийной посадки и эвакуации под сиденьями расположены спасательные плоты, а аварийное освещение направит вас к ближайшему аварийному выходу. Просьба на время полёта отложить всю ручную кладь в целях безопасности. Пожалуйста, перед взлётом изучите памятку авиабезопасности из кармана сиденья спереди.
    Посадка пассажиров
    При посадке бортпроводник приветствует пассажиров и помогает им найти свои места, а также разместить ручную кладь в салоне самолета. Для общения можно использовать такие фразы.
    ` },
    { text: `We are glad to see you on board. `, translation: `Мы рады приветствовать Вас на борту нашего самолета.` },
    { text: `Can I help you, madam/sir? `, translation: `Могу я Вам помочь, госпожа/господин?` },
    { text: `Can I see your boarding pass, please? `, translation: `Могу я взглянуть на Ваш посадочный талон?` },
    { text: `I am sorry, but I need to see your boarding pass.`, translation: `Извините, мне нужен Ваш посадочный талон.` },
    { text: `Your seat is 77A by the window.`, translation: `Ваше место 77А возле окна.` },
    { text: `Your seat is over there — second row on the left.`, translation: `Ваше место вон там — второй ряд слева.` },
    { text: `May I place your bag in the overhead compartment?`, translation: `Я могу положить Вашу сумку на багажную полку?` },
    { text: `Could I ask you to put your bag beneath the seat? `, translation: `Могу я попросить Вас положить сумку под сиденье?` },
    { text: `Please listen carefully to the following announcement for your own safety.`, translation: `Пожалуйста, выслушайте внимательно следующие правила безопасности.` },

    { text: `Please stow your hand luggage in the overhead locker or under the seat in front of you. `, translation: `Пожалуйста, разместите Вашу ручную кладь на полке над собой или под сиденьем перед собой.` },
    { text: `Your phone has to be turned off for the whole flight. `, translation: `Ваш телефон должен быть выключен на протяжении всего полета.` },
    { text: `Smoking is not allowed on the flight. `, translation: `Во время полета нельзя курить.` },
    { text: `Your life vest is under your seat. This is how you should put it on. `, translation: `Ваш спасательный жилет под сиденьем. Вот как его следует надевать (показываем).` },
    { text: `There are several emergency exits on this plane. They are being pointed out to you now. `, translation: `На этом самолете несколько аварийных выходов. Сейчас Вам их показывают.` },
    { text: `Your seat must be fully upright. `, translation: `Ваше сиденье должно быть приведено в вертикальное положение.` },
    { text: `Our plane is taking off now, please fasten /ˈfɑːs(ə)n/ your safety belt. `, translation: `- Наш самолет сейчас взлетает, пожалуйста, пристегните ремни безопасности.` },
    { text: `When the seatbelt sign is on, you must fasten your seatbelt.`, translation: `Когда знак «Пристегните ремни» включен, Вы должны пристегнуть свои ремни.` },
    { text: `Make sure your seat belt is fastened. `, translation: `Убедитесь, что Ваш ремень безопасности пристегнут.` },
    { text: `You can find a safety instruction card in the pocket in front of you. `, translation: `Вы можете найти инструкцию по безопасности в кармашке перед Вами.` },
    { text: `We wish you all an enjoyable flight. `, translation: `Мы желаем Вам приятного полета.` },
    { text: `The seatbelt sign is off and you can leave your seats if you need. `, translation: `Знак «Пристегните ремни» выключен, и Вы можете покинуть свое место, если Вам нужно.` },
    { text: `If you press this button, it will light up at the end of the cabin and one of us will come to your assistance. `, translation: `Если Вы нажмете эту кнопку, в конце салона зажжется индикатор и один из бортпроводников подойдет к Вам.` },
    { text: `Would you like headphones?`, translation: `Вам нужны наушники?` },
    { text: `We will serve drinks and snacks as soon as possible. `, translation: `Мы подадим напитки и закуски в ближайшее время.` },
    { text: `May I offer you a drink, madam/sir?`, translation: `Могу я предложить Вам напиток, госпожа/господин?` },
    { text: `The drinks are free-of-charge. `, translation: `Напитки бесплатные.` },
    { text: `Would you like a blanket? `, translation: `Не хотели бы Вы одеяло?` },
    { text: `Please, press the release button to feel comfortably.`, translation: `Пожалуйста, нажмите кнопку для опускания спинки кресла, чтобы чувствовать себя комфортно.` },
    // { text: ``, translation: `` },
    // { text: ``, translation: `` },



];
export default Text
