/* ටෙන්ඩර් / දැන්වීම් ලැයිස්තුව – අලුත් එකක් එක් කිරීමට පහත ආකාරයට පේළියක් එකතු කරන්න.
   type: "tender" | "notice" | "vacancy"   |   close: "YYYY-MM-DD" (අවසන් දිනය, නැත්නම් "")
   file: PDF එක uploads/tenders/ ෆෝල්ඩරයට දමා මෙහි නම ලියන්න.
   sample:true ඇති පේළි නිදර්ශන පමණි – ඒවා මකා දමන්න. */
window.AUC_TENDERS = [
  {
    type: "tender", ref: "AUC/TEN/2026/00X", published: "2026-10-01", close: "2026-11-15",
    title: { si: "නිදර්ශන ටෙන්ඩර් දැන්වීම", ta: "மாதிரி கேள்விப்பத்திர அறிவித்தல்", en: "Sample tender notice" },
    desc:  { si: "ටෙන්ඩර් ලේඛන සහ කොන්දේසි බාගත කර බලන්න.", ta: "கேள்விப்பத்திர ஆவணங்கள் மற்றும் நிபந்தனைகளைப் பதிவிறக்கிப் பார்க்கவும்.", en: "Download the tender documents and conditions." },
    file: "", sample: true
  },
  {
    type: "notice", ref: "", published: "2026-10-10", close: "",
    title: { si: "නිදර්ශන නිල දැන්වීම", ta: "மாதிரி அதிகாரப்பூர்வ அறிவித்தல்", en: "Sample official notice" },
    desc:  { si: "නිල දැන්වීමක විස්තරය මෙහි පෙන්වයි.", ta: "அதிகாரப்பூர்வ அறிவித்தலின் விவரம் இங்கே காட்டப்படும்.", en: "The details of an official notice appear here." },
    file: "", sample: true
  }
];
