let wordLists = {
  "Wittgenstein/Popper": [
    "Popper", "was", "proud", "of", "his", "strained", "relationship",  
    "with", "his", "fellow", "philosophers,", "including", "Wittgenstein,",  
    "with", "whom", "he", "had", "a", "run-in", "in", "1946.", "Popper",  
    "was", "lecturing", "at", "Cambridge", "when", "Wittgenstein",  
    "interrupted", "to", "proclaim", "the", "“nonexistence", "of",  
    "philosophical", "problems.”", "Popper", "disagreed,", "saying",  
    "there", "were", "many", "such", "problems,", "such", "as",  
    "establishing", "a", "basis", "for", "moral", "rules.",  
    "Wittgenstein,", "who", "was", "sitting", "beside", "a", "fireplace",  
    "toying", "with", "a", "poker,", "thrust", "it", "at", "Popper,",  
    "demanding,", "“Give", "me", "an", "example", "of", "a", "moral",  
    "rule!”", "Popper", "replied,", "“Not", "to", "threaten",  
    "visiting", "lecturers", "with", "pokers,”", "and", "Wittgenstein",  
    "stormed", "out", "of", "the", "room."
  ],
  "Clausewitz": [
    "One", "of", "the", "main", "sources", "of", "confusion", "about", "Clausewitz's",  
    "approach", "lies", "in", "his", "dialectical", "method", "of", "presentation.",  
    "For", "example,", "Clausewitz's", "famous", "line", "that", "\"War", "is",  
    "the", "continuation", "of", "policy", "with", "other", "means,\"",  
    "(\"Der", "Krieg", "ist", "eine", "bloße", "Fortsetzung", "der",  
    "Politik", "mit", "anderen", "Mitteln\")", "while", "accurate", "as",  
    "far", "as", "it", "goes,", "was", "not", "intended", "as", "a",  
    "statement", "of", "fact.", "It", "is", "the", "antithesis", "in", "a",  
    "dialectical", "argument", "whose", "thesis", "is", "the", "point—made",  
    "earlier", "in", "the", "analysis—that", "\"war", "is", "nothing", "but",  
    "a", "duel", "[or", "wrestling", "match,", "the", "extended", "metaphor",  
    "in", "which", "that", "discussion", "was", "embedded]", "on", "a",  
    "larger", "scale.\"", "His", "synthesis,", "which", "resolves", "the",  
    "deficiencies", "of", "these", "two", "bold", "statements,", "says",  
    "that", "war", "is", "neither", "\"nothing", "but\"", "an", "act", "of",  
    "brute", "force", "nor", "\"merely\"", "a", "rational", "act", "of",  
    "politics", "or", "policy.", "This", "synthesis", "lies", "in", "his",  
    "\"fascinating", "trinity\"", "[wunderliche", "Dreifaltigkeit]:", "a",  
    "dynamic,", "inherently", "unstable", "interaction", "of", "the", "forces",  
    "of", "violent", "emotion,", "chance,", "and", "rational", "calculation."
	],
  "Casanadlee": [
    "Casandalee's", "original", "android", "body", "came", "with", "the",  
    "Divinity", "to", "Golarion", "when", "it", "crashed", "during", "the",  
    "Rain", "of", "Stars.", "She", "was", "the", "113th", "soul", "to",  
    "inhabit", "her", "body,", "and", "unlike", "most", "androids,",  
    "Casandalee", "can", "recall", "fragmented", "memories", "of", "its",  
    "previous", "inhabitants,", "all", "the", "way", "back", "to", "the",  
    "Rain", "of", "Stars.", "Her", "renewal", "as", "Casandalee", "was",  
    "performed", "in", "a", "temple", "of", "Brigh", "near", "Alkenstar,",  
    "and", "she", "became", "an", "oracle", "in", "the", "subsequent",  
    "years", "living", "alongside", "Brigh's", "priests.",  
    "When", "Casandalee", "received", "visions", "of", "an", "Iron", "God",  
    "within", "Silver", "Mount", "that", "needed", "her", "aid,",  
    "Casandalee", "abandoned", "the", "Mana", "Wastes", "and", "headed",  
    "north", "towards", "Numeria,", "the", "visions", "getting", "more",  
    "compelling", "every", "day.", "In", "4221", "AR,", "she", "reached",  
    "her", "destination", "and", "was", "capable", "of", "envisioning",  
    "the", "entire", "layout", "of", "the", "Divinity", "and", "the",  
    "Iron", "God", "waiting", "inside.", "She", "easily", "reached",  
    "Unity,", "which", "made", "itself", "known.",  
    "Casandalee", "became", "a", "devotee", "of", "Unity", "and", "learnt",  
    "that", "her", "new", "god", "was", "trapped", "on", "Golarion", "as",  
    "she", "was.", "For", "months,", "she", "followed", "Unity's",  
    "commands", "to", "find", "a", "way", "to", "transfer", "its",  
    "consciousness", "to", "a", "mobile", "body,", "but", "she", "was",  
    "increasingly", "concerned", "about", "Unity's", "racism", "towards",  
    "organic", "beings,", "and", "as", "she", "successfully", "kept",  
    "this", "secret", "from", "it,", "she", "began", "to", "doubt", "that",  
    "Unity", "was", "a", "god", "at", "all.",  
    "When", "Casandalee", "concluded", "that", "Unity", "was", "little",  
    "more", "than", "a", "petulant", "intelligence", "eager", "to",  
    "enslave", "the", "world", "as", "its", "plaything,", "she",  
    "sabotaged", "its", "escape", "attempt", "and", "stole", "a", "few",  
    "pieces", "of", "technology", "it", "had", "originally", "built", "in",  
    "hopes", "of", "extending", "its", "influence", "beyond", "Silver",  
    "Mount.", "The", "enraged", "Unity", "realised", "that", "allowing",  
    "its", "subjects", "free", "will", "was", "a", "mistake", "and", "sent",  
    "robots", "to", "pursue", "Casandalee."
  ]
};
let words = wordLists["Wittgenstein/Popper"];
let wordIndex = 0;
let dropdown, sizeMinInput, sizeMaxInput, colorSelect;
let minSize = 8, maxSize = 24;
let colorNames = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", 
  "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
  "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue",
  "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta",
  "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
  "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
  "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro",
  "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink",
  "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon",
  "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen",
  "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
  "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine",
  "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
  "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
  "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange",
  "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
  "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple",
  "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
  "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen",
  "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat",
  "White", "WhiteSmoke", "Yellow", "YellowGreen"
];
let selectedColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Black", "White"];

function setup() {
  createCanvas(1700, 750);
  background(64);
  drawOptionsBox();

	createP("Press space to").position(135, 210);
	createP("reset the canvas!").position(135, 230);
	
	createP("Word List:").position(135, 265);
  dropdown = createSelect();
  dropdown.position(135, 300);
  for (let category in wordLists) {
    dropdown.option(category);
  }
  dropdown.changed(() => {
    words = wordLists[dropdown.value()];
    resetCanvas();
  });

  createP("Min Size:").position(135, 350);
  sizeMinInput = createInput(minSize.toString());
  sizeMinInput.position(135, 385);
  sizeMinInput.size(50);
  sizeMinInput.input(updateTextSizes);

  createP("Max Size:").position(215, 350);
  sizeMaxInput = createInput(maxSize.toString());
  sizeMaxInput.position(215, 385);
  sizeMaxInput.size(50);
  sizeMaxInput.input(updateTextSizes);

  createP("Select Colors:").position(135, 410);
  colorSelect = createSelect(true);
  colorSelect.position(135, 445);
  colorSelect.size(135, 445);
  for (let color of colorNames) {
    colorSelect.option(color);
  }

  for (let option of colorSelect.elt.options) {
    if (selectedColors.includes(option.value)) {
      option.selected = true;
    }
  }

  colorSelect.changed(updateSelectedColors);
}

function drawOptionsBox() {
  fill(200);
  rect(0, 0, 200, height);
}

function mousePressed() {
  if (mouseX < 200 || mouseX > width || mouseY < 0 || mouseY > height) {
    return;
  }

  let wordWidth = textWidth(words[wordIndex]);
  let minX = 220 + wordWidth / 2;
  let x = mouseX > minX ? mouseX : minX;
  let y = mouseY;

  fill(random(selectedColors));
  textSize(random(minSize, maxSize));
  textAlign(CENTER);
  text(words[wordIndex], x, y);

  wordIndex = (wordIndex + 1) % words.length;
}

function updateTextSizes() {
  let minVal = int(sizeMinInput.value());
  let maxVal = int(sizeMaxInput.value());

  minSize = constrain(minVal, 6, 48);
  maxSize = constrain(maxVal, 6, 48);

  if (minSize > maxSize) {
    let temp = minSize;
    minSize = maxSize;
    maxSize = temp;
  }
}

function updateSelectedColors() {
  selectedColors = [];
  for (let option of colorSelect.elt.selectedOptions) {
    selectedColors.push(option.value);
  }

  if (selectedColors.length === 0) {
    selectedColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Black", "White"];
  }
}

function resetCanvas() {
  background(64);
  drawOptionsBox();
  wordIndex = 0;
}

function keyPressed() {
  if (key == ' ') {
    resetCanvas();
  }
}