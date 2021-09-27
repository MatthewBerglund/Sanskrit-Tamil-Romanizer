// உள்ளது அலது உள்ள உணர்வு உள்ளதோ
// மும் முதலை எம் மதமும் முன்கொள்ளும்
// உருவம் தான் ஆயின் உலகு பரம் அற்று ஆம்
// உலகு ஐம் புலன்கள் உரு வேறு அன்று

// धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।
// मामकाः पाण्ड्वाश्चैव किमकुर्वत संजय ॥
// दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस् तदा ।
// आचार्यम् उपसंगम्य राजा वचनम् अब्रवीत् ॥

const indicLanguageSelect = document.getElementById('indic-lang-select');
const romanizeButton = document.getElementById('romanize-btn');
const indicTextField = document.getElementById('indic-input');
const romanizedTextField = document.getElementById('romanized-input');

romanizeButton.addEventListener('click', handleRomanizeClick);

function handleRomanizeClick() {
  var textToRomanize = indicTextField.value;

  if (indicLanguageSelect.value === 'sanskrit') {
    romanizeSanskrit(textToRomanize);
  } else if (indicLanguageSelect.value === 'tamil') {
    romanizeTamil(textToRomanize);
  }
}

function romanizeTamil(tamilText) {
  var textToRomanize = tamilText;
  
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

  romanizedTextField.value = textToRomanize;
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

  romanizedTextField.value = textToRomanize;
}

