/*
உள்ளது அலது உள்ள உணர்வு உள்ளதோ
மும் முதலை எம் மதமும் முன்கொள்ளும்
உருவம் தான் ஆயின் உலகு பரம் அற்று ஆம்
உலகு ஐம் புலன்கள் உரு வேறு அன்று

धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।
मामकाः पाण्ड्वाश्चैव किमकुर्वत संजय ॥
दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस् तदा ।
आचार्यम् उपसंगम्य राजा वचनम् अब्रवीत् ॥
*/

var indicTextField = document.getElementById('indic-input');
var romanizedTextField = document.getElementById('romanized-input');
var indicLanguageSelect = document.getElementById('indic-lang-select');
var swapDirectionBtn = document.getElementById('swap-direction');
var romanizeButton = document.getElementById('romanize-btn');

var inputReversed = false; 

romanizeButton.addEventListener('click', handleRomanizeClick);
romanizedTextField.addEventListener('keyup', handleRomanizedInput);
swapDirectionBtn.addEventListener('click', handleSwapClick);
indicLanguageSelect.addEventListener('change', handleIndicSelection);

function handleIndicSelection(changeEvent) {
  if (changeEvent.target.value === 'sanskrit') {
    indicTextField.style.fontFamily = 'Noto Sans Devanagari, sans-serif';
    indicTextField.style.fontSize = '28px';
  } else {
    indicTextField.style.fontFamily = 'Hind Madurai, sans-serif';
    indicTextField.style.fontSize = '24px';
  }
}

function handleSwapClick() {
  if (!inputReversed) {
    document.getElementById('script-input-container').style.flexDirection = 'row-reverse';
    inputReversed = true;
  } else {
    document.getElementById('script-input-container').style.flexDirection = 'row';
    inputReversed = false;
  }
}

function handleRomanizeClick() {
  var textToRomanize = indicTextField.value;

  if (indicLanguageSelect.value === 'sanskrit') {
    romanizedTextField.value = romanizeSanskrit(textToRomanize);
  } else if (indicLanguageSelect.value === 'tamil') {
    romanizedTextField.value = romanizeTamil(textToRomanize);
  }
}

function handleRomanizedInput(keyupEvent) {
  var iastText = applyIastDiacritics(keyupEvent.target.value);
  romanizedTextField.value = iastText;

  if (indicLanguageSelect.value === 'tamil') {
    var tamilizedText = tamilize(iastText);
    indicTextField.value = tamilizedText;
  }
  
}

function romanizeTamil(tamilText) {
  var textToRomanize = tamilText;
  
  // śrī compound
  textToRomanize = textToRomanize.replace(/ஸ்ரீ/g, 'śrī');
  
  // Vowels
  textToRomanize = textToRomanize.replace(/்/g, '\u200b');
  textToRomanize = textToRomanize.replace(/அ/g, 'a');
  textToRomanize = textToRomanize.replace(/ஆ/g, 'ā');
  textToRomanize = textToRomanize.replace(/ா/g, 'ā');

  textToRomanize = textToRomanize.replace(/இ/g, 'i');
  textToRomanize = textToRomanize.replace(/ி/g, 'i');
  textToRomanize = textToRomanize.replace(/ஈ/g, 'ī');
  textToRomanize = textToRomanize.replace(/ீ/g, 'ī');

  textToRomanize = textToRomanize.replace(/உ/g, 'u');
  textToRomanize = textToRomanize.replace(/ு/g, 'u');
  textToRomanize = textToRomanize.replace(/ஊ/g, 'ū');
  textToRomanize = textToRomanize.replace(/ூ/g, 'ū');

  textToRomanize = textToRomanize.replace(/எ/g, 'e'); 
  textToRomanize = textToRomanize.replace(/ெ/g, 'e');
  textToRomanize = textToRomanize.replace(/ஏ/g, 'ē');
  textToRomanize = textToRomanize.replace(/ே/g, 'ē');

  textToRomanize = textToRomanize.replace(/ஐ/g, 'ai');
  textToRomanize = textToRomanize.replace(/ை/g, 'ai');

  textToRomanize = textToRomanize.replace(/ஒ/g, 'o'); 
  textToRomanize = textToRomanize.replace(/ொ/g, 'o');
  textToRomanize = textToRomanize.replace(/ஓ/g, 'ō');
  textToRomanize = textToRomanize.replace(/ோ/g, 'ō');

  textToRomanize = textToRomanize.replace(/ஔ/g, 'au');
  textToRomanize = textToRomanize.replace(/ௌ/g, 'au');

  textToRomanize = textToRomanize.replace(/ஃ/g, 'ḵ');
  textToRomanize = textToRomanize.replace(/ஂ/g, 'ṁ');

  // Consonants
  textToRomanize = textToRomanize.replace(/க/g, 'kA');
  textToRomanize = textToRomanize.replace(/ங/g, 'ṅA');
  textToRomanize = textToRomanize.replace(/ச/g, 'cA');
  textToRomanize = textToRomanize.replace(/ஞ/g, 'ñA');
  textToRomanize = textToRomanize.replace(/ட/g, 'ṭA');
  textToRomanize = textToRomanize.replace(/ண/g, 'ṇA');
  textToRomanize = textToRomanize.replace(/த/g, 'tA');
  textToRomanize = textToRomanize.replace(/ந/g, 'nA');
  textToRomanize = textToRomanize.replace(/ப/g, 'pA');
  textToRomanize = textToRomanize.replace(/ம/g, 'mA');
  textToRomanize = textToRomanize.replace(/ய/g, 'yA');
  textToRomanize = textToRomanize.replace(/ர/g, 'rA');
  textToRomanize = textToRomanize.replace(/ல/g, 'lA');
  textToRomanize = textToRomanize.replace(/வ/g, 'vA');
  textToRomanize = textToRomanize.replace(/ழ/g, 'ḻA');
  textToRomanize = textToRomanize.replace(/ள/g, 'ḷA');
  textToRomanize = textToRomanize.replace(/ற/g, 'ṟA');
  textToRomanize = textToRomanize.replace(/ன/g, 'ṉA');

  // Grantha consonants
  textToRomanize = textToRomanize.replace(/ஶ/g, 'śA');
  textToRomanize = textToRomanize.replace(/ஜ/g, 'jA');
  textToRomanize = textToRomanize.replace(/ஷ/g, 'ṣA');
  textToRomanize = textToRomanize.replace(/ஸ/g, 'sA');
  textToRomanize = textToRomanize.replace(/ஹ/g, 'hA');
  
  // Placeholders (\u200b, A)
  textToRomanize = textToRomanize.replace(/A\u200b/g, '');
  textToRomanize = textToRomanize.replace(/Aā/g, 'ā');
  textToRomanize = textToRomanize.replace(/Ai/g, 'i');
  textToRomanize = textToRomanize.replace(/Aī/g, 'ī');
  textToRomanize = textToRomanize.replace(/Au/g, 'u');
  textToRomanize = textToRomanize.replace(/Aū/g, 'ū');
  textToRomanize = textToRomanize.replace(/Ae/g, 'e');
  textToRomanize = textToRomanize.replace(/Aē/g, 'ē');
  textToRomanize = textToRomanize.replace(/Aai/g, 'ai');
  textToRomanize = textToRomanize.replace(/Ao/g, 'o');
  textToRomanize = textToRomanize.replace(/Aō/g, 'ō');
  textToRomanize = textToRomanize.replace(/Aau/g, 'au');
  textToRomanize = textToRomanize.replace(/A/g, 'a');

  return textToRomanize;
  //romanizedTextField.value = textToRomanize;
}

function romanizeSanskrit(sanskritText) {
  var textToRomanize = sanskritText;
  
  // Vowels
  textToRomanize = textToRomanize.replace(/्/g, '\u200b');

  textToRomanize = textToRomanize.replace(/अ/g, 'a');
  textToRomanize = textToRomanize.replace(/आ/g, 'ā');
  textToRomanize = textToRomanize.replace(/ा/g, 'ā');

  textToRomanize = textToRomanize.replace(/इ/g, 'i');
  textToRomanize = textToRomanize.replace(/ि/g, 'i');
  textToRomanize = textToRomanize.replace(/ई/g, 'ī');
  textToRomanize = textToRomanize.replace(/ी/g, 'ī');

  textToRomanize = textToRomanize.replace(/उ/g, 'u');
  textToRomanize = textToRomanize.replace(/ु/g, 'u');
  textToRomanize = textToRomanize.replace(/ऊ/g, 'ū');
  textToRomanize = textToRomanize.replace(/ू/g, 'ū');

  textToRomanize = textToRomanize.replace(/ऋ/g, 'ṛ');
  textToRomanize = textToRomanize.replace(/ृ/g, 'ṛ');
  textToRomanize = textToRomanize.replace(/ॠ/g, 'ṝ');
  textToRomanize = textToRomanize.replace(/ॄ/g, 'ṝ');

  textToRomanize = textToRomanize.replace(/ऌ/g, 'ḷ');
  textToRomanize = textToRomanize.replace(/ॢ/g, 'ḷ');
  textToRomanize = textToRomanize.replace(/ॡ/g, 'ḹ');
  textToRomanize = textToRomanize.replace(/ॣ/g, 'ḹ');

  textToRomanize = textToRomanize.replace(/ए/g, 'e'); 
  textToRomanize = textToRomanize.replace(/े/g, 'e');

  textToRomanize = textToRomanize.replace(/ऐ/g, 'ai');
  textToRomanize = textToRomanize.replace(/ै/g, 'ai');

  textToRomanize = textToRomanize.replace(/ओ/g, 'o'); 
  textToRomanize = textToRomanize.replace(/ो/g, 'o');

  textToRomanize = textToRomanize.replace(/औ/g, 'au');
  textToRomanize = textToRomanize.replace(/ौ/g, 'au');

  textToRomanize = textToRomanize.replace(/ं/g, 'ṃ');
  textToRomanize = textToRomanize.replace(/ः/g, 'ḥ');
  textToRomanize = textToRomanize.replace(/ँ/g, '˜');
  textToRomanize = textToRomanize.replace(/ऽ/g, '\'');

  // Consonants
  textToRomanize = textToRomanize.replace(/क/g, 'kA');
  textToRomanize = textToRomanize.replace(/च/g, 'cA');
  textToRomanize = textToRomanize.replace(/ट/g, 'ṭA');
  textToRomanize = textToRomanize.replace(/त/g, 'tA');
  textToRomanize = textToRomanize.replace(/प/g, 'pA');

  textToRomanize = textToRomanize.replace(/ख/g, 'khA');
  textToRomanize = textToRomanize.replace(/छ/g, 'chA');
  textToRomanize = textToRomanize.replace(/ठ/g, 'ṭhA');
  textToRomanize = textToRomanize.replace(/थ/g, 'thA');
  textToRomanize = textToRomanize.replace(/फ/g, 'phA');

  textToRomanize = textToRomanize.replace(/ग/g, 'gA');
  textToRomanize = textToRomanize.replace(/ज/g, 'jA');
  textToRomanize = textToRomanize.replace(/ड/g, 'ḍA');
  textToRomanize = textToRomanize.replace(/द/g, 'dA');
  textToRomanize = textToRomanize.replace(/ब/g, 'bA');

  textToRomanize = textToRomanize.replace(/घ/g, 'ghA');
  textToRomanize = textToRomanize.replace(/झ/g, 'jhA');
  textToRomanize = textToRomanize.replace(/ढ/g, 'ḍhA');
  textToRomanize = textToRomanize.replace(/ध/g, 'dhA');
  textToRomanize = textToRomanize.replace(/भ/g, 'bhA');

  textToRomanize = textToRomanize.replace(/ङ/g, 'ṅA');
  textToRomanize = textToRomanize.replace(/ञ/g, 'ñA');
  textToRomanize = textToRomanize.replace(/ण/g, 'ṇA');
  textToRomanize = textToRomanize.replace(/न/g, 'nA');
  textToRomanize = textToRomanize.replace(/म/g, 'mA');

  textToRomanize = textToRomanize.replace(/ह/g, 'hA');
  textToRomanize = textToRomanize.replace(/य/g, 'yA');
  textToRomanize = textToRomanize.replace(/र/g, 'rA');
  textToRomanize = textToRomanize.replace(/ल/g, 'lA');
  textToRomanize = textToRomanize.replace(/व/g, 'vA');

  textToRomanize = textToRomanize.replace(/श/g, 'śA');
  textToRomanize = textToRomanize.replace(/ष/g, 'ṣA');
  textToRomanize = textToRomanize.replace(/स/g, 'sA');
  
  // Placeholders (\u200b, A)
  textToRomanize = textToRomanize.replace(/A\u200b/g, '');
  textToRomanize = textToRomanize.replace(/Aā/g, 'ā');
  textToRomanize = textToRomanize.replace(/Ai/g, 'i');
  textToRomanize = textToRomanize.replace(/Aī/g, 'ī');
  textToRomanize = textToRomanize.replace(/Au/g, 'u');
  textToRomanize = textToRomanize.replace(/Aū/g, 'ū');
  textToRomanize = textToRomanize.replace(/Aṛ/g, 'ṛ');
  textToRomanize = textToRomanize.replace(/Aṝ/g, 'ṝ');
  textToRomanize = textToRomanize.replace(/Aḷ/g, 'ḷ');
  textToRomanize = textToRomanize.replace(/Aḹ/g, 'ḹ');
  textToRomanize = textToRomanize.replace(/Ae/g, 'e');
  textToRomanize = textToRomanize.replace(/Aai/g, 'ai');
  textToRomanize = textToRomanize.replace(/Ao/g, 'o');
  textToRomanize = textToRomanize.replace(/Aau/g, 'au');
  textToRomanize = textToRomanize.replace(/Aṃ/g, 'aṃ');
  textToRomanize = textToRomanize.replace(/Aḥ/g, 'aḥ');
  textToRomanize = textToRomanize.replace(/A/g, 'a');

  return textToRomanize;
  // romanizedTextField.value = textToRomanize;
}

function tamilize(romanizedText) {
  var tamilizedString = romanizedText;

  tamilizedString = tamilizedString.replace(/ai/g, 'aAI');
  tamilizedString = tamilizedString.replace(/au/g, 'aAU');
  tamilizedString = tamilizedString.replace(/ā/g, 'aā');
  tamilizedString = tamilizedString.replace(/i/g, 'ai');
  tamilizedString = tamilizedString.replace(/ī/g, 'aī');
  tamilizedString = tamilizedString.replace(/u/g, 'au');
  tamilizedString = tamilizedString.replace(/ū/g, 'aū');
  tamilizedString = tamilizedString.replace(/e/g, 'ae');
  tamilizedString = tamilizedString.replace(/ē/g, 'aē');
  tamilizedString = tamilizedString.replace(/o/g, 'ao');
  tamilizedString = tamilizedString.replace(/ō/g, 'aō');
  
  // puḷḷi: regex looks for any consonant k that does not have a
  // vowel after it and replaces it with ka் using a backreference $1 to the consonant itself
  tamilizedString = tamilizedString.replace(/([kṅcñṭṇtnpmyrlvḻḷṟṉśjṣsh(kṣ)](?![aāiīuūeēoō]))/g, '$1a்');

  // Consonants
  tamilizedString = tamilizedString.replace(/ka/g, 'க');
  tamilizedString = tamilizedString.replace(/ṅa/g, 'ங');
  tamilizedString = tamilizedString.replace(/ca/g, 'ச');
  tamilizedString = tamilizedString.replace(/ña/g, 'ஞ');
  tamilizedString = tamilizedString.replace(/ṭa/g, 'ட');
  tamilizedString = tamilizedString.replace(/ṇa/g, 'ண');
  tamilizedString = tamilizedString.replace(/ta/g, 'த');
  tamilizedString = tamilizedString.replace(/na/g, 'ந');
  tamilizedString = tamilizedString.replace(/pa/g, 'ப');
  tamilizedString = tamilizedString.replace(/ma/g, 'ம');
  tamilizedString = tamilizedString.replace(/ya/g, 'ய');
  tamilizedString = tamilizedString.replace(/ra/g, 'ர');
  tamilizedString = tamilizedString.replace(/la/g, 'ல');
  tamilizedString = tamilizedString.replace(/va/g, 'வ');
  tamilizedString = tamilizedString.replace(/ḻa/g, 'ழ');
  tamilizedString = tamilizedString.replace(/ḷa/g, 'ள');
  tamilizedString = tamilizedString.replace(/ṟa/g, 'ற');
  tamilizedString = tamilizedString.replace(/ṉa/g, 'ன');
  tamilizedString = tamilizedString.replace(/śa/g, 'ஶ');
  tamilizedString = tamilizedString.replace(/ja/g, 'ஜ');
  tamilizedString = tamilizedString.replace(/ṣa/g, 'ஷ');
  tamilizedString = tamilizedString.replace(/sa/g, 'ஸ');
  tamilizedString = tamilizedString.replace(/ha/g, 'ஹ');
  // tamilizedString = tamilizedString.replace(/kṣa/g, '');
  

  // Word-initial vowels
  tamilizedString = tamilizedString.replace(/aAI/g, 'ஐ');
  tamilizedString = tamilizedString.replace(/aAU/g, 'ஔ');
  tamilizedString = tamilizedString.replace(/aā/g, 'ஆ');
  tamilizedString = tamilizedString.replace(/ai/g, 'இ');
  tamilizedString = tamilizedString.replace(/aī/g, 'ஈ');
  tamilizedString = tamilizedString.replace(/au/g, 'உ');
  tamilizedString = tamilizedString.replace(/aū/g, 'ஊ');
  tamilizedString = tamilizedString.replace(/ae/g, 'எ');
  tamilizedString = tamilizedString.replace(/aē/g, 'ஏ');
  tamilizedString = tamilizedString.replace(/ao/g, 'ஒ');
  tamilizedString = tamilizedString.replace(/aō/g, 'ஓ');
  tamilizedString = tamilizedString.replace(/a/g, 'அ');

  // Combined vowels
  tamilizedString = tamilizedString.replace(/AI/g, 'ை');
  tamilizedString = tamilizedString.replace(/AU/g, 'ௌ');
  tamilizedString = tamilizedString.replace(/ā/g, 'ா');
  tamilizedString = tamilizedString.replace(/i/g, 'ி');
  tamilizedString = tamilizedString.replace(/ī/g, 'ீ');
  tamilizedString = tamilizedString.replace(/u/g, 'ு');
  tamilizedString = tamilizedString.replace(/ū/g, 'ூ');
  tamilizedString = tamilizedString.replace(/e/g, 'ெ');
  tamilizedString = tamilizedString.replace(/ē/g, 'ே');
  tamilizedString = tamilizedString.replace(/o/g, 'ொ');
  tamilizedString = tamilizedString.replace(/ō/g, 'ோ');

  tamilizedString = tamilizedString.replace(/ḵ/g, 'ஃ');
  
  return tamilizedString;
}

function applyIastDiacritics(romanizedText) {
  var iastText = romanizedText;

  iastText = iastText.replace(/aa/g, 'ā');
  iastText = iastText.replace(/AA/g, 'Ā');
  iastText = iastText.replace(/ii/g, 'ī');
  iastText = iastText.replace(/II/g, 'Ī');
  iastText = iastText.replace(/ee/g, 'ē');
  iastText = iastText.replace(/EE/g, 'Ē');
  iastText = iastText.replace(/oo/g, 'ō');
  iastText = iastText.replace(/OO/g, 'Ō');
  iastText = iastText.replace(/uu/g, 'ū');
  iastText = iastText.replace(/UU/g, 'Ū');

  iastText = iastText.replace(/n=/g, 'ṇ');
  iastText = iastText.replace(/ṇ=/g, 'ṅ');
  iastText = iastText.replace(/ṅ=/g, 'ṉ');
  iastText = iastText.replace(/ṉ=/g, 'ñ');
  iastText = iastText.replace(/ñ=/g, 'n');
  iastText = iastText.replace(/N=/g, 'Ṇ');
  iastText = iastText.replace(/Ṇ=/g, 'Ṅ');
  iastText = iastText.replace(/Ṅ=/g, 'Ṉ');
  iastText = iastText.replace(/Ṉ=/g, 'Ñ');
  iastText = iastText.replace(/Ñ=/g, 'N');
  
  iastText = iastText.replace(/r=/g, 'ṛ');
  iastText = iastText.replace(/ṛ=/g, 'ṟ');
  iastText = iastText.replace(/ṟ=/g, 'ṝ');
  iastText = iastText.replace(/ṝ=/g, 'r');
  iastText = iastText.replace(/R=/g, 'Ṛ');
  iastText = iastText.replace(/Ṛ=/g, 'Ṟ');
  iastText = iastText.replace(/Ṟ=/g, 'Ṝ');
  iastText = iastText.replace(/Ṝ=/g, 'R');

  iastText = iastText.replace(/l=/g, 'ḷ');
  iastText = iastText.replace(/ḷ=/g, 'ḻ');
  iastText = iastText.replace(/ḻ=/g, 'ḹ');
  iastText = iastText.replace(/ḹ=/g, 'l');
  iastText = iastText.replace(/L=/g, 'Ḷ');
  iastText = iastText.replace(/Ḷ=/g, 'Ḻ');
  iastText = iastText.replace(/Ḻ=/g, 'Ḹ');
  iastText = iastText.replace(/Ḹ=/g, 'L');

  iastText = iastText.replace(/s=/g, 'ṣ');
  iastText = iastText.replace(/ṣ=/g, 'ś');
  iastText = iastText.replace(/ś=/g, 's');
  iastText = iastText.replace(/S=/g, 'Ṣ');
  iastText = iastText.replace(/Ṣ=/g, 'Ś');
  iastText = iastText.replace(/Ś=/g, 'S');
  
  iastText = iastText.replace(/m=/g, 'ṃ');
  iastText = iastText.replace(/ṃ=/g, 'ṁ');
  iastText = iastText.replace(/ṁ=/g, 'm');
  iastText = iastText.replace(/M=/g, 'Ṃ');
  iastText = iastText.replace(/Ṃ=/g, 'Ṁ');
  iastText = iastText.replace(/Ṁ=/g, 'M');

  iastText = iastText.replace(/h=/g, 'ḥ');
  iastText = iastText.replace(/ḥ=/g, 'h');
  iastText = iastText.replace(/H=/g, 'Ḥ');
  iastText = iastText.replace(/Ḥ=/g, 'H');

  iastText = iastText.replace(/k=/g, 'ḵ');
  iastText = iastText.replace(/ḵ=/g, 'k');
  iastText = iastText.replace(/K=/g, 'Ḵ');
  iastText = iastText.replace(/Ḵ=/g, 'K');

  iastText = iastText.replace(/t=/g, 'ṭ');
  iastText = iastText.replace(/ṭ=/g, 't');
  iastText = iastText.replace(/T=/g, 'Ṭ');
  iastText = iastText.replace(/Ṭ=/g, 'T');

  iastText = iastText.replace(/d=/g, 'ḍ');
  iastText = iastText.replace(/ḍ=/g, 'd');
  iastText = iastText.replace(/D=/g, 'Ḍ');
  iastText = iastText.replace(/Ḍ=/g, 'D');

  // keyupEvent.target.value = iastText;
  return iastText;
}

