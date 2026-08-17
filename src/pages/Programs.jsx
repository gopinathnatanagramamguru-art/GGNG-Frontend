import React, { useState } from 'react';
import { Calendar, MapPin, Clock, BookOpen, Sparkles, Search, Music, Palette, Film } from 'lucide-react';

const PROGRAMS_DATA = [
  {
    id: 1,
    titleMal: "ഇന്ത്യൻ ഗ്രാമോത്സവം",
    titleEng: "Indian Gramotsavam",
    date: "15 May 2022",
    time: "7:00 PM",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "2022 മെയ് 15 ന് വൈകിട്ട് 7 മണിക്ക് ഭാരത് ഭവനും ഗുരു ഗോപിനാഥ് നടനഗ്രാമവുമായി ചേർന്ന് ഇന്ത്യൻ ഗ്രാമോത്സവത്തിൻ്റെ സമാപന സമ്മേളനവും കലാപരിപാടികളും നടത്തുകയുണ്ടായി.",
    descriptionEng: "On May 15, 2022, at 7:00 PM, Bharat Bhavan in collaboration with Guru Gopinath Natanagramam organized the valedictory function and cultural performances of the Indian Gramotsavam.",
    type: "Cultural Festival",
    icon: Sparkles
  },
  {
    id: 2,
    titleMal: "കാട്ടാൽ പുസ്തകോത്സവം",
    titleEng: "Kattal Book Festival",
    date: "22 May 2022",
    time: "Evening",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "2022 മെയ് 22 ന് കാട്ടാക്കട നിയമസഭാ ബഹുമാനപ്പെട്ട എം.എൽ.എ ശ്രീ .ഐ.ബി സതീഷിൻ്റെ നിയോജക മണ്ഡലത്തിൽ കാട്ടാൽ പുസ്തകമേള സാംസ്കാരികോത്സവത്തോ ടനുബന്ധിച്ച് നടനഗ്രാമത്തിൻ്റെ പെങ്ങൾ നൃത്താവിഷ്ക്കാരം ശ്രീ ബാബു നാരായണൻ നേതൃത്വത്തിൽ നടത്തുകയുണ്ടായി.",
    descriptionEng: "On May 22, 2022, in connection with the Kattal Book Fair and Cultural Festival in Kattakkada constituency, Natanagramam presented the dance production 'Pengal' under the leadership of Shri Babu Narayanan, in the presence of Hon. MLA Shri I.B. Satheesh.",
    type: "Book Fair & Performance",
    icon: BookOpen
  },
  {
    id: 3,
    titleMal: "നാട്യോത്സവം (ഗ്രേറ്റ് ഇന്ത്യൻ ഡാൻസ് ഫെസ്റ്റിവൽ)",
    titleEng: "Natyotsavam (Great Indian Dance Festival)",
    date: "Every Year - June",
    time: "Annual Event",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "ഇന്ത്യയിലെ അംഗീകൃത ശൈലികളുടെ അവതരണത്തിൽ ഏറ്റവും ശ്രദ്ധേയരായ പ്രതിഭകളുടെ നൃത്താവതരണത്തിന് ഡോ. ഗുരുഗോപിനാഥിൻ്റെ ജന്മദിനാഘോഷത്തോട നുബന്ധിച്ച് എല്ലാ വർഷവും ജൂൺ മാസത്തിൽ നടനഗ്രാമത്തിലെ ചിലമ്പൊലി ഓപ്പൺ എയർ ആഡിറ്റോറിയം വേദിയൊരുക്കുന്നു. കേരളീയരുടെ നൃത്തകലാസ്വാദനത്തെ ദേശീയ നിലവാരത്തിൽ മാറ്റുരച്ച് പരിപോഷിപ്പിക്കാൻ ഈ ദിവസങ്ങൾ പ്രയോജനപ്പെടുത്തുന്നു.",
    descriptionEng: "Every year in June, in connection with the birth anniversary celebrations of Dr. Guru Gopinath, the Chilamboli Open Air Auditorium at Natanagramam hosts dance recitals by India's most eminent classical exponents. This festival aims to cultivate and elevate national-level appreciation for dance arts among the public of Kerala.",
    type: "Dance Festival",
    icon: Music
  },
  {
    id: 4,
    titleMal: "വരവിളി",
    titleEng: "Varavili",
    date: "29 July - 01 August 2022",
    time: "4 Days Event",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "2022 ജൂലൈ 29,30,31 ആഗസ്റ്റ് 1 തീയതികളിൽ ഗുരു ഗോപിനാഥ് നടനഗ്രാമവും തെയ്യം കലാ അക്കാദമിയും ചേർന്ന് കൊണ്ട് പൈതൃകപOനവും ശാസ്ത്രീയകലകളും, ആസ്വാദനവും പ്രോത്സാഹിപ്പിക്കുക എന്ന ലക്ഷ്യത്തോടെ വരവിളി എന്ന സാംസ്ക്കാരിക പരിപാടി സംഘടിപ്പിക്കുകയുണ്ടായി.തെയ്യംകലയെ അടിസ്ഥാനമാക്കി മ്യൂറൽ പെയിൻ്റിംഗ്, ചിത്രരചന ക്യാമ്പ്, ഫോട്ടോഗ്രാഫി പ്രദർശനം ഡോക്യുമെൻ്ററി പ്രദർശനം കൂടാതെ മുഖത്തെഴുത്ത് ശില്പ്പശാല, തോറ്റംപാട്ട് ശില്പ്പശാല, നാടൻ പാട്ട് ശില്പ്പശാല, അണിയല ക്കാഴ്ചകൾ എന്നിവയും നടത്തുകയുണ്ടായി.",
    descriptionEng: "From July 29 to August 1, 2022, Guru Gopinath Natanagramam and Theyyam Kala Academy jointly organized the cultural program 'Varavili' to foster heritage studies, classical arts, and aesthetic appreciation. The event featured mural painting, an art camp, photography & documentary exhibitions, as well as workshops on face-painting (Mukhathezhuthu), Thottampattu, folk songs, and traditional headgear/ornaments.",
    type: "Cultural Heritage & Exhibition",
    icon: Palette
  },
  {
    id: 5,
    titleMal: "ചെങ്ങന്നൂർ പ്പെരുമ",
    titleEng: "Chengannur Peruma",
    date: "24 October 2022",
    time: "Evening",
    location: "Chengannur Cultural Festival Venue",
    descriptionMal: "2022 ഒക്ടോബർ 24 ന് ചെങ്ങന്നൂർ സാംസ്ക്കാരികോത്സവത്തിൻ്റെ ഭാഗമായി ഗുരു ഗോപിനാഥ് നടനഗ്രാമം മോഹിനിയാട്ടം, കേരളനടനം, കഥകളി, ഇന്ത്യൻ ശാസ്ത്രീയ നൃത്ത രൂപങ്ങൾ ഉൾപ്പെടുത്തികൊണ്ടുള്ള കലാപരിപാടികൾ എന്നിവ അവതരിപ്പിക്കുകയുണ്ടായി",
    descriptionEng: "On October 24, 2022, as part of the Chengannur Cultural Festival, Guru Gopinath Natanagramam presented classical performances comprising Mohiniyattam, Kerala Natanam, Kathakali, and other traditional Indian classical dance forms.",
    type: "Cultural Performance",
    icon: Sparkles
  },
  {
    id: 6,
    titleMal: "ധർമ്മടം ഐലൻ്റ് കാർണിവൽ ഫെസ്റ്റ്",
    titleEng: "Dharmadam Island Carnival Fest",
    date: "23 December 2022",
    time: "6:00 PM",
    location: "Dharmadam Grama Panchayat",
    descriptionMal: "2022 ഡിസംബർ 23 വൈകിട്ട് 6 മണിക്ക് ബഹുമാനപ്പെട്ട മുഖ്യമന്ത്രി ശ്രീ. പിണറായി വിജയൻ ധർമ്മടം ഐലൻ്റ് കാർണിവൽ ഉദ്ഘാടനം നിർവ്വഹിച്ചു. ധർമ്മടം ഗ്രാമപഞ്ചായത്തിൽ സംഘടിപ്പിച്ച ധർമ്മടം ഐലൻ്റ് കാർണിവലിൽ ഗുരു ഗോപിനാഥ് നടനഗ്രാമം ഒരുക്കിയ നടനരാവ് പരിപാടിയിൽ നവ്യാനായർ ആൻ്റ് ടീം അവതരിപ്പിച്ച ഭരതനാട്യം, നടനഗ്രാമം കുട്ടികൾ അവതരിപ്പിച്ച കേരളനടനം, ഫ്യൂഷൻ എന്നീ പരിപാടികൾ അരങ്ങേറി.",
    descriptionEng: "On December 23, 2022, at 6:00 PM, Hon. Chief Minister Shri Pinarayi Vijayan inaugurated the Dharmadam Island Carnival. In the 'Natanaravu' program organized by Guru Gopinath Natanagramam in Dharmadam Grama Panchayat, classical dance performances including Bharatanatyam by Navya Nair & team, and Kerala Natanam and Fusion dance by the children of Natanagramam were staged.",
    type: "Carnival & Cultural Night",
    icon: Sparkles
  },
  {
    id: 7,
    titleMal: "ചെന്നൈ മഹാബലിപുരം ഫെസ്റ്റ്",
    titleEng: "Chennai Mahabalipuram Fest",
    date: "02-03 January 2023",
    time: "Daily Performance",
    location: "Mahabalipuram, Chennai",
    descriptionMal: "2023 ജനുവരി 2,3 തീയതികളിൽ ചെന്നൈ മഹാബലിപുരം ഫെസ്റ്റിൽ ഗുരു ഗോപിനാഥ് നടനഗ്രാമം പരിപാടികൾ അവതരിപ്പിക്കയുണ്ടായി ശ്രീമതി അംബികാ മോഹൻ്റെ നേതൃത്വത്തിലുള്ള കേരളനടനം ശ്രീ. ശ്രീക്കുട്ടൻ്റെ നേതൃത്വത്തിലുള്ള ഭരതനാട്യം എന്നിവ അവതരിപ്പിച്ചു.",
    descriptionEng: "On January 2 and 3, 2023, Guru Gopinath Natanagramam presented performances at the Chennai Mahabalipuram Fest. The presentations included Kerala Natanam led by Smt. Ambika Mohan and Bharatanatyam led by Shri Sreekuttan.",
    type: "National Dance Festival",
    icon: Music
  },
  {
    id: 8,
    titleMal: "പൊന്ന്യത്തങ്കം",
    titleEng: "Ponnyathankam",
    date: "26 February 2023",
    time: "Evening",
    location: "Kathiroor Grama Panchayat",
    descriptionMal: "2023 ഫെബ്രുവരി 26 നു ഫോക്‌ലോർ അക്കാദമിയുടെ സഹകരണത്തോടെ കതിരൂർ ഗ്രാമപഞ്ചായത്തിൽ വച്ച് പൊന്ന്യത്തങ്കം എന്ന പരിപാടിയിൽ കേരളനടനവും ഭരതനാട്യവും അവതരിപ്പിച്ചു.",
    descriptionEng: "On February 26, 2023, Kerala Natanam and Bharatanatyam performances were staged at the Ponnyathankam event, organized in collaboration with the Folklore Academy at Kathiroor Grama Panchayat.",
    type: "Folklore & Classical Event",
    icon: Music
  },
  {
    id: 9,
    titleMal: "അരങ്ങുത്സവം 2023",
    titleEng: "Arangutsavam 2023",
    date: "28 Feb - 01 Mar 2023",
    time: "Evening",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "2023 ഫെബ്രുവരി 28, മാർച്ച് 1 ദിവസങ്ങളിൽ ഗുരു ഗോപിനാഥ് നടനഗ്രാമം ശ്രീമതി അംബിക മോഹൻ, കേരളനടനം, ശ്രീ. ശ്രീക്കുട്ടൻ എം.എസ് ഭരതനാട്യവും തുടർന്ന് കലൈമാമണി ഗോപികവർമ്മ അവതരിപ്പിക്കുന്ന ഭരതനാട്യ നൃത്താവിഷ്ക്കാരവും അവതരിപ്പിക്കുകയുണ്ടായി.",
    descriptionEng: "During Arangutsavam 2023 on February 28 and March 1, Guru Gopinath Natanagramam presented Kerala Natanam by Smt. Ambika Mohan, Bharatanatyam by Shri Sreekuttan M.S., followed by a special Bharatanatyam dance choreography presented by Kalaimamani Gopika Varma.",
    type: "Arangutsavam Festival",
    icon: Sparkles
  },
  {
    id: 10,
    titleMal: "കോട്ടുളി ഫെസ്റ്റ്",
    titleEng: "Kottuli Fest",
    date: "03 May 2023",
    time: "Evening",
    location: "Bharanikkavu, Alappuzha",
    descriptionMal: "2023 മെയ് 3-ാം തീയതി ഗുരു ഗോപിനാഥ് നടനഗ്രാമവും ആലപ്പുഴ ജില്ലയിലെ ഭരണിക്കാവ് കലാസാംസ്ക്കാരിക സംഘടനയും ചേർന്ന് ഒരുക്കിയ നൃത്തപരിപാടിയിൽ നടനഗ്രാമത്തിൽ നിന്നും കേരളനടനം, ഭരതനാട്യം എന്നീ പരിപാടിയും സിനിമ ആർട്ടിസ്റ്റായ ശ്രീമതി പത്മ പ്രിയയുടെ നൃത്താവിഷ്ക്കാരവും അവതരിപ്പിക്കുകയുണ്ടായി.",
    descriptionEng: "On May 3, 2023, in a dance program jointly organized by Guru Gopinath Natanagramam and the Bharanikkavu Cultural Organization of Alappuzha district, Kerala Natanam and Bharatanatyam performances from Natanagramam were staged, alongside a special dance presentation by film actress Smt. Padmapriya.",
    type: "Joint Cultural Fest",
    icon: Music
  },
  {
    id: 11,
    titleMal: "കേരളനടനം ശില്പ്പശാല",
    titleEng: "Kerala Natanam Workshop",
    date: "18-19 May 2023",
    time: "2 Days Event",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "2023 മെയ് 18,19 തീയതികളിലായി കേരളനടനം കലാകാരിയും ഡോ. ഗുരു ഗോപിനാഥിൻ്റെ ശിഷ്യയുമായ 97 വയസ്സുള്ള ശ്രീമതി ഭവാനി ചെല്ലപ്പൻ ആണ് കേരളനടനം ശില്പ്പശാലയ്ക്ക് നേതൃത്വം നൽകിയത്.രണ്ടു ദിവസങ്ങളിലായാണ് ശില്പ്പശാല സംഘടിപ്പിച്ചത്.",
    descriptionEng: "On May 18 and 19, 2023, a two-day Kerala Natanam workshop was organized under the guidance of 97-year-old Smt. Bhavani Chellappan, a renowned Kerala Natanam exponent and direct disciple of Dr. Guru Gopinath.",
    type: "Dance Workshop",
    icon: BookOpen
  },
  {
    id: 12,
    titleMal: "കുച്ചുപുടി ശില്പ്പശാല",
    titleEng: "Kuchipudi Workshop",
    date: "07-12 June 2023",
    time: "6 Days Event",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "2023 ജൂൺ മാസം 7 ാം തീയതി മുതൽ 12-ാം തീയതി വരെ കുച്ചുപ്പുടി എന്ന നൃത്ത രൂപത്തെ കുറിച്ച് നൃത്ത വിദ്യാർത്ഥികൾക്കും ന്യത്താസ്വാദകർക്കും, നൃത്ത അദ്ധ്യാപകർ, ഗവേഷകർ എന്നിവർക്കും ഉപയോഗപ്രദമാകും വിധം നടനഗ്രാമത്തിൽ കുച്ചിപ്പുടി ശില്പ്പശാല സംഘടിപ്പിച്ചു.",
    descriptionEng: "From June 7 to 12, 2023, a Kuchipudi dance workshop was organized at Natanagramam, beneficial for dance students, art appreciators, teachers, and researchers seeking to deepen their understanding of this traditional dance form.",
    type: "Dance Workshop",
    icon: BookOpen
  },
  {
    id: 13,
    titleMal: "പോണ്ടിച്ചേരി ഫെസ്റ്റ്",
    titleEng: "Puducherry Fest",
    date: "14 August 2023",
    time: "Evening",
    location: "Puducherry",
    descriptionMal: "2023 ആഗസ്റ്റ് 14 ന് നടനഗ്രാമവും സൗത്ത് സോൺ കൾച്ചറൽ സെൻ്റെറുമായി സഹകരിച്ച് പോണ്ടിച്ചേരി ഫെസ്റ്റ് നടത്തുകയുണ്ടായി.",
    descriptionEng: "On August 14, 2023, the Puducherry Fest was conducted by Natanagramam in collaboration with the South Zone Cultural Centre (SZCC).",
    type: "Cultural Fest",
    icon: Sparkles
  },
  {
    id: 14,
    titleMal: "ഓണാഘോഷം",
    titleEng: "Onam Celebration",
    date: "22 August 2023",
    time: "Evening",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "ഗുരു ഗോപിനാഥ് നടനഗ്രാമവും സൗത്ത് സോൺ കൾച്ചറൽ സെൻ്ററിൻ്റെ ആഭിമുഖ്യത്തിൽ പാപ്പനംകോട് വച്ച് നടനഗ്രാമത്തിൻ്റെ പ്രോഗ്രാം 2023 ആഗസ്റ്റ് 22 ന് അവതരിപ്പിച്ചു.",
    descriptionEng: "On August 22, 2023, under the auspices of Guru Gopinath Natanagramam and the South Zone Cultural Centre (SZCC), a special cultural program was presented by Natanagramam at Pappanamcode as part of the Onam celebrations.",
    type: "Festival Celebration",
    icon: Sparkles
  },
  {
    id: 15,
    titleMal: "കളമശ്ശേരി ഫെസ്റ്റ്",
    titleEng: "Kalamassery Fest",
    date: "11 September 2023",
    time: "Evening",
    location: "Kalamassery Constituency",
    descriptionMal: "2023 സെപ്തംബർ 11 ന് കളമശ്ശേരി നിയമസഭാ മണ്ഡലത്തിൽ നടപ്പാക്കുന്ന കൃഷിയ്ക്കൊപ്പം കളമശ്ശേരി കാർഷികോത്സവം 2024 ൻ്റെ ഭാഗമായി ഗുരു ഗോപിനാഥ് നടനഗ്രാമം മോഹിനിയാട്ടം, കേരളനടനം ഫ്യൂഷൻ, നാടൻ പാട്ടരങ്ങ് എന്നീ പരിപാടികൾ അവതരിപ്പിച്ചു.",
    descriptionEng: "On September 11, 2023, as part of the 'Krishikkoppam Kalamassery' Agricultural Festival 2024 held in the Kalamassery Assembly Constituency, Guru Gopinath Natanagramam presented Mohiniyattam, Kerala Natanam Fusion, and folk song performances.",
    type: "Agricultural & Cultural Fest",
    icon: Sparkles
  },
  {
    id: 16,
    titleMal: "ഫോക്ക് ഫെസ്റ്റിവൽ (തൃക്കരിപ്പൂർ)",
    titleEng: "Folk Festival (Thrikkaripur)",
    date: "11-12 November 2023",
    time: "2 Days Event",
    location: "Mayyil, Kannur",
    descriptionMal: "2023 നവംബർ 11, 12 തീയതികളിൽ നടനഗ്രാമവും സൗത്ത് സോൺ കൾച്ചറൽ സെൻ്റെറുമായി സഹകരിച്ച് കണ്ണൂർ ജില്ലയിലെ മയ്യിൽ ഫോക്ക്ഫെസ്റ്റ് നടത്തുകയുണ്ടായി.",
    descriptionEng: "On November 11 and 12, 2023, a Folk Festival was conducted at Mayyil in Kannur district by Natanagramam in collaboration with the South Zone Cultural Centre (SZCC).",
    type: "Folk Arts Festival",
    icon: Palette
  },
  {
    id: 17,
    titleMal: "സേലം പ്രോഗ്രാം ബുക്ക് ഫെസ്റ്റ്",
    titleEng: "Salem Program Book Fest",
    date: "23 November 2023",
    time: "Evening",
    location: "Corporation Ground, Salem",
    descriptionMal: "2023 നവംബർ 23 ന് കോർപ്പറേഷൻ ഗ്രൗണ്ടിൽ സൗത്ത് സോൺ കൾച്ചറൽ സെൻ്റർ സ്പോൺസർ ചെയ്യുന്ന ബുക്ക് ഫെസ്റ്റ് പരിപാടിയിൽ ഗുരു ഗോപിനാഥ് നടനഗ്രാമം കേരളനടനം അവതരിപ്പിക്കയുണ്ടായി.",
    descriptionEng: "On November 23, 2023, Guru Gopinath Natanagramam presented a Kerala Natanam performance at the Book Fest sponsored by the South Zone Cultural Centre (SZCC) at the Corporation Ground, Salem.",
    type: "Book Fest & Performance",
    icon: BookOpen
  },
  {
    id: 18,
    titleMal: "ഒഡീസി ശില്പ്പശാല",
    titleEng: "Odissi Workshop",
    date: "06-08 January 2024",
    time: "3 Days Event",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "ഗുരു ഗോപിനാഥ് നടനഗ്രാമത്തിൻ്റെ പ്രധാനപ്പെട്ട ലക്ഷ്യങ്ങളിൽ ഒന്നായ ഇന്ത്യൻ ശാസ്ത്രീയ നൃത്തകലകളെ പ്രോത്സാഹിപ്പിക്കുന്നതിൻ്റെ ഭാഗമായി 2024 ജനുവരി 6-ാം തീയതി മുതൽ 8-ാം തീയതി വരെ 3 ദിവസം നീണ്ടു നിൽക്കുന്ന ഒഡീസി ശില്പ്പശാല പ്രശസ്ത ഒഡീസി നർത്തകി ഗുരു പത്മശ്രീ രഞ്ജന ഗോഹറിൻ്റെ നേത്യത്വത്തിൽ അരങ്ങേറി.",
    descriptionEng: "As part of promoting Indian classical dances—one of the core objectives of Guru Gopinath Natanagramam—a 3-day Odissi dance workshop was conducted from January 6 to 8, 2024, under the guidance of renowned Odissi exponent Padmashri Guru Ranjana Gauhar.",
    type: "Dance Workshop",
    icon: BookOpen
  },
  {
    id: 19,
    titleMal: "അനന്യം",
    titleEng: "Ananyam",
    date: "18-30 December 2024",
    time: "Intensive Camp",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "ഇന്ത്യയിൽ ആദ്യമായി ട്രാൻസ്ജെൻ്റർ സമൂഹത്തിൻ്റെ ക്ഷേമപ്രവർത്തനങ്ങൾക്കായി നടപ്പാക്കിയ മഴവില്ല് പദ്ധതിയുടെ ഭാഗമായി കലാഭിരുചി പ്രോത്സാഹിപ്പിക്കുന്നതിനും മെച്ചപ്പെട്ട ജീവിത നിലവാരം ഉറപ്പിക്കുന്നതിനുമായി ഒരു കലാസംഘം രൂപീകരിക്കാൻ അനന്യം എന്ന പേരിൽ നടപ്പാക്കിയ പഠന പരിശീലനത്തിന് 18.12.2024 മുതൽ 30.12.2024 വരെ നടനഗ്രാമത്തിലാണ് സഹവാസക്യാമ്പും പരിശീലനവും ഒരുക്കിയത്. ദ്വയം എന്ന പേരിൽ രൂപം കൊണ്ട് രംഗശില്പ്പം 02.02.2025 ന് തിരുവനന്തപുരത്തെ നിശാഗന്ധി ആഡിറ്റോറിയത്തിൽ സംസ്ഥാനതല പരിപാടിയായി പ്രദർപ്പിച്ചു.",
    descriptionEng: "As part of the 'Mazhavillu' project implemented in Kerala for the welfare of the transgender community, a residential training camp named 'Ananyam' was organized at Natanagramam from December 18 to 30, 2024, to encourage artistic talent and ensure a better standard of living by forming a performing arts group. The resulting theatrical production, titled 'Dwayam', was staged at a state-level event at the Nishagandhi Auditorium in Thiruvananthapuram on February 2, 2025.",
    type: "Residential Art Camp",
    icon: Sparkles
  },
  {
    id: 20,
    titleMal: "ഒരുക്കം",
    titleEng: "Orukkam",
    date: "25-29 July 2025",
    time: "5 Days Event",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "ചമയശില്പ്പശാലയിൽ ദേശീയ അവാർഡ് ജോതാവ് ശ്രീ . പട്ടണം റഷീദിൻ്റെ നേത്യത്വ ത്തിൽ മുഖത്തെഴുത്ത് ചമയ ശില്പശാല ഒന്നാഘട്ടം 2025 ജൂലൈ 25 മുതൽ 29 വരെ നടക്കുകയുണ്ടായി",
    descriptionEng: "The first phase of 'Orukkam'—a makeup and face-painting (Mukhathezhuthu) workshop—was conducted from July 25 to 29, 2025, under the leadership of National Award-winning makeup artist Shri Pattanam Rasheed.",
    type: "Makeup & Face Painting Workshop",
    icon: BookOpen
  },
  {
    id: 21,
    titleMal: "വർഷമേഘം",
    titleEng: "Varshamegham",
    date: "Sept - Nov 2025",
    time: "Multi-phase Camp & Exhibition",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "മലയാള മണ്ണിലേക്ക് പെയ്തിറങ്ങുന്ന നിറങ്ങൾ രചനയുടെ ക്യാൻവാസിൽ പകർത്തിയ ചിത്രരചനാ സഹവാസക്യാമ്പ് 2025 സെപ്തംബർ മാസം 11,12,13 തീയതികളിൽ നടന്നു. നൃത്തകലയുടെ രേഖ വർണ്ണ - ലാസ്യ വിസ്മയം ചിത്രരചനയിൽ പ്രതിഫലിപ്പിക്കുന്ന ക്യാമ്പിൻ്റെ രണ്ടാം ഘട്ടം 2025 നവംബർ 21 മുതൽ 25 വരെ നടത്താൻ തീരുമാനിച്ചിട്ടുണ്ട്. അതോടൊപ്പം കേരളത്തിൻ്റെ പ്രകൃതി മനോഹാരിത ക്യാൻവാസുകളിൽ പകർത്തുന്നതിനായി 4 വയസ്സു മുതൽ 16 വയസ്സുവരെ പ്രായമുള്ള വിദ്യാർത്ഥികളുടെ ചിത്രരചനാ മത്സരവും സംഘടിപ്പിക്കുന്നു. 2026 മാർച്ച് 30 വരെ നീളുന്ന ചിത്രപ്രദർശനം ഒരുക്കിയിട്ടുണ്ട്. 2024 ൽ നടന്ന വരവിളി ചുമർ ചിത്രകലാക്യാമ്പിൻ്റെയും കണ്ണൂരിലെ തെയ്യം കലാ അക്കാദമിയുടെ നേത്യത്വത്തിൽ തെയ്യം അടിസ്ഥാനമാക്കിയ അക്രിലിക് പെയിൻ്റിംഗ് ക്യാമ്പിൻ്റെയും തുടർച്ചയാണ് ഈ പരിപാടികൾ.",
    descriptionEng: "'Varshamegham', a residential painting camp capturing the vibrant colors of Kerala's monsoon on canvas, was held on September 11, 12, and 13, 2025. The second phase of the camp, reflecting the strokes, colors, and grace of dance in paintings, is scheduled for November 21 to 25, 2025. Additionally, a painting competition is organized for students aged 4 to 16 to capture the natural beauty of Kerala. An art exhibition running until March 30, 2026 has been arranged. These events are a continuation of the 'Varavili' Mural Art Camp of 2024 and the Acrylic Painting Camp themed around Theyyam, led by the Theyyam Kala Academy, Kannur.",
    type: "Art Camp & Exhibition",
    icon: Palette
  },
  {
    id: 22,
    titleMal: "നടനഗ്രാമം കലാസംഘം",
    titleEng: "Natanagramam Performing Arts Troupe",
    date: "Jan, Mar, Sept 2025",
    time: "National Tour",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "2025 ജനുവരിയിൽ ഉത്തർപ്രദേശിലെ പ്രയാഗ് രാജിൽ നടന്ന മഹാകുംഭമേളയിലും 2025 മാർച്ചിൽ ഡൽഹിയിൽ നടന്ന വിവിധ് കാ അമ്യത് മഹോത്സവത്തിലും 2025 സെപ്തംബർ മാസത്തിൽ ആസാദി കാ അമൃത് മഹോത്സവത്തിൻ്റെ ഭാഗമായി രാഷ്ട്രപതിഭവനിലും കലാസംഘം പരിപാടികൾ നടത്തി .",
    descriptionEng: "The Natanagramam Performing Arts Troupe staged performances at the Maha Kumbh Mela in Prayagraj, Uttar Pradesh in January 2025, at the Vividh Ka Amrit Mahotsav in Delhi in March 2025, and at the Rashtrapati Bhavan in September 2025 as part of the Azadi Ka Amrit Mahotsav celebrations.",
    type: "National Performances",
    icon: Sparkles
  },
  {
    id: 23,
    titleMal: "കഥാപാത്രങ്ങൾ",
    titleEng: "Characters (Kathapathrangal)",
    date: "Upcoming Initiative",
    time: "Special Training",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "മലയാളികൾക്ക് സുപരിചിതമായ നോവൽ, ചെറുകഥ, നാടകം, ബാലെ തുടങ്ങിയ സർഗ്ഗ സൃഷ്ടികളിലെ കഥാപാത്രങ്ങളുടെ ചേഷ്ടകളും വേഷ വൈവിധ്യങ്ങളും പ്രതിഫലിപ്പിക്കാൻ പഠിതാക്കളെ സജ്ജരാക്കി ക്യാമ്പസിൽ വിന്യസിപ്പിന്നതിന് തയ്യാറാക്കിയിട്ടുണ്ട്.",
    descriptionEng: "A training initiative has been prepared to equip learners to portray the gestures, movements, and diverse costumes of famous characters from well-known Malayalam novels, short stories, plays, and ballets, with presentations situated across the campus.",
    type: "Performance Training",
    icon: Sparkles
  },
  {
    id: 24,
    titleMal: "ചലച്ചിത്ര പഠന- ആസ്വാദന ക്യാമ്പ്",
    titleEng: "Film Study and Appreciation Camp",
    date: "14-17 May 2025",
    time: "4 Days Camp",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "കേരള സംസ്ഥാന ചലച്ചിത്ര അക്കാദമിയുടെ സഹകരണത്തോടെ 2025 മെയ് മാസം 14 മുതൽ 17 വരെ നടന്ന പരിശീലന പരിപാടിയിൽ 30 തിൽപ്പരം പഠിതാക്കൾപങ്കെടുത്തു .",
    descriptionEng: "Over 30 students participated in the Film Study and Appreciation Camp organized from May 14 to 17, 2025, in collaboration with the Kerala State Chalachitra Academy.",
    type: "Media & Film Camp",
    icon: Film
  },
  {
    id: 25,
    titleMal: "കരകൗശല ആടയാഭരണ പ്രദർശനം",
    titleEng: "Handicrafts & Dance Ornaments Exhibition",
    date: "Upcoming Project",
    time: "Training & Exhibition",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "കലാക്ഷേത്രയുമായി ചേർന്ന് ന്യത്തസംബന്ധിയായ ആടയാഭരണങ്ങൾ, വസ്ത്രാലങ്കാരങ്ങൾ, സുഷിര - ചർമ്മ - വാദ്യോപകരണങ്ങൾ എന്നിവയുടെ നിർമ്മിതിയും പ്രദർശനവും കുടുബശ്രീ അംഗങ്ങളിൽ നിന്ന് തെരെഞ്ഞെടുക്കപ്പെട്ടവർക്ക് പരിശീലനം നൽകി ക്യാമ്പസിൽ ഒരുക്കാൻ പദ്ധതി തയ്യാറാക്കിയിട്ടുണ്ട്.",
    descriptionEng: "A project has been drafted to conduct training for selected Kudumbashree members in the making of dance ornaments, costumes, and wind/percussion instruments in collaboration with Kalakshetra, culminating in a campus exhibition.",
    type: "Crafts Workshop & Exhibition",
    icon: Palette
  },
  {
    id: 26,
    titleMal: "ക്യൂറേറ്റേഴ്സ് കോൺക്ലേവ്",
    titleEng: "Curators' Conclave",
    date: "Academic Session",
    time: "Conclave & Diplomas",
    location: "Guru Gopinath Natanagramam",
    descriptionMal: "ഫോട്ടോഗ്രാഫി പ്രദർശനം, എക്സിബിഷൻ പവലിയൻ എന്നി വിഷയങ്ങളിൽ ഇന്ത്യൻ ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് ഹെറിറ്റേജ് സ്റ്റഡീസിൻ്റെ സഹായത്തോടെ ആർക്കിയോളജി, മ്യൂസിയോളജി എന്നീ വിഷയങ്ങളിൽ ഡിപ്ലോമ കോഴ്സുകളും, കോൾ കേരളയുടെ സഹായത്തോടെ ഭരതനാട്യം ഡിപ്ലോമ കോഴ്സുകളും ആരംഭിക്കുന്നതാണ്.",
    descriptionEng: "As part of the Curators' Conclave focusing on photography exhibitions and exhibition pavilions, diploma courses in Archaeology and Museology will be launched in association with the Indian Institute of Heritage Studies, alongside a Bharatanatyam Diploma course in association with Cole Kerala.",
    type: "Academic Conclave & Courses",
    icon: BookOpen
  }
];

const Programs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = PROGRAMS_DATA.filter(program =>
    program.titleEng.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.titleMal.includes(searchQuery) ||
    program.descriptionEng.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.descriptionMal.includes(searchQuery)
  );

  return (
    <div style={styles.page} className="animate-fade-up">
      {/* Header Banner */}
      <section className="banner-section" style={styles.banner}>
        <div className="container" style={styles.bannerContainer}>
          <span style={styles.govtLabel}>Department of Culture, Govt. of Kerala</span>
          <h1 className="banner-title" style={styles.bannerTitle}>Our Programs</h1>
          <p style={styles.bannerSubtitle}>
            Witness the historical preservation of art, cultural festivals, and community outreach initiatives by Guru Gopinath Natanagramam.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)', padding: '5rem 0' }}>
        <div className="container" style={styles.mainContainer}>

          {/* Search Bar */}
          <div style={styles.searchWrapper}>
            <div style={styles.searchBar}>
              <Search size={20} color="var(--text-light)" />
              <input
                type="text"
                placeholder="Search programs (English or Malayalam)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>
          </div>

          {/* Programs Grid */}
          <div style={styles.programsGrid}>
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => {
                const IconComponent = program.icon;
                return (
                  <div key={program.id} style={styles.card} className="card-hover">
                    <div style={styles.cardHeader}>
                      <span style={styles.badge}>{program.type}</span>
                      <IconComponent size={24} color="var(--accent-color)" />
                    </div>

                    <div style={styles.cardBody}>
                      {/* Bilingual Titles */}
                      <h2 style={styles.titleMal}>{program.titleMal}</h2>
                      <h3 style={styles.titleEng}>{program.titleEng}</h3>
                      <div style={styles.divider} />

                      {/* Metadata */}
                      <div style={styles.metadataGrid}>
                        <div style={styles.metaItem}>
                          <Calendar size={16} color="var(--primary-color)" />
                          <span style={styles.metaText}>{program.date}</span>
                        </div>
                        <div style={styles.metaItem}>
                          <Clock size={16} color="var(--primary-color)" />
                          <span style={styles.metaText}>{program.time}</span>
                        </div>
                        <div style={styles.metaItem}>
                          <MapPin size={16} color="var(--primary-color)" />
                          <span style={styles.metaText}>{program.location}</span>
                        </div>
                      </div>

                      {/* Descriptions */}
                      <div style={styles.descWrapper}>
                        <p style={styles.descMal}>{program.descriptionMal}</p>
                        <p style={styles.descEng}>{program.descriptionEng}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={styles.noResults}>
                <p>No programs match your search query.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '80vh',
  },
  banner: {
    backgroundColor: 'var(--primary-dark)',
    color: 'var(--text-white)',
    padding: '4.5rem 0',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(rgba(74, 14, 20, 0.88), rgba(74, 14, 20, 0.94)), url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottom: '4px solid var(--accent-color)',
  },
  bannerContainer: {
    maxWidth: '800px',
  },
  govtLabel: {
    color: 'var(--accent-color)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.5rem',
  },
  bannerTitle: {
    color: 'var(--text-white)',
    fontSize: '2.8rem',
    marginBottom: '1rem',
  },
  bannerSubtitle: {
    fontSize: '1.1rem',
    color: '#E8DFD8',
    lineHeight: '1.6',
  },
  mainContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--bg-alt)',
    border: '1px solid var(--border-color)',
    borderRadius: '30px',
    padding: '0.75rem 1.5rem',
    width: '100%',
    maxWidth: '500px',
    boxShadow: 'var(--shadow-sm)',
    gap: '0.75rem',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    fontSize: '1rem',
    color: 'var(--text-main)',
  },
  programsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2.5rem',
  },
  card: {
    backgroundColor: 'var(--bg-alt)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-md)',
    overflow: 'hidden',
    transition: 'var(--transition-smooth)',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    padding: '1.25rem 2rem',
    backgroundColor: 'rgba(74, 14, 20, 0.03)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-white)',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '0.35rem 0.85rem',
    borderRadius: '20px',
  },
  cardBody: {
    padding: '2rem',
  },
  titleMal: {
    fontSize: '1.8rem',
    color: 'var(--primary-dark)',
    fontFamily: 'inherit',
    lineHeight: '1.4',
    marginBottom: '0.25rem',
  },
  titleEng: {
    fontSize: '1.3rem',
    color: 'var(--text-light)',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  divider: {
    width: '50px',
    height: '3px',
    backgroundColor: 'var(--accent-color)',
    borderRadius: '2px',
    marginBottom: '1.25rem',
  },
  metadataGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  metaText: {
    fontSize: '0.9rem',
    color: 'var(--text-light)',
    fontWeight: '600',
  },
  descWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  descMal: {
    fontSize: '1.1rem',
    color: 'var(--text-main)',
    lineHeight: '1.75',
    fontFamily: 'inherit',
  },
  descEng: {
    fontSize: '1rem',
    color: 'var(--text-light)',
    lineHeight: '1.6',
    borderLeft: '3px solid var(--border-color)',
    paddingLeft: '1rem',
    fontStyle: 'italic',
  },
  noResults: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: 'var(--text-light)',
    fontSize: '1.2rem',
  }
};

export default Programs;
