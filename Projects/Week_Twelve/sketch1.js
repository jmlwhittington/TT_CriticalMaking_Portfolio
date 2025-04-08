function setup() {
  createCanvas(1750, 625);
  background(random(128));
}

function draw() {
	var words = ["pneumonoultramicroscopicsilicovolcanoconiosis","antidisestablishmentarianism","supercalifragilisticexpialidocious","floccinaucinihilipilification","Chargoggagoggmanchauggauggagoggchaubunagungamaugg","Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenu-akitanatahu","pseudopseudohypoparathyroidism","methylenedioxymethamphetamine","electroencephalographically","radioimmunoelectrophoresis","immunoelectrophoretically","laryngotracheobronchitis","hydrochlorofluorocarbon","counterrevolutionaries","deinstitutionalization","otorhinolaryngological","incomprehensibilities","pseudohermaphroditism","psychoneuroimmunology","hippopotomonstrosesquippedaliophobia"];
	var colors = ["white","black","blue","red","green","yellow","orange","purple"];
	var size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  if(mouseIsPressed) {
		fill(random(colors));
		textAlign(CENTER);
		textSize(random(size));
    text(random(words), mouseX, mouseY);
  }
	if(!mouseIsPressed) {
		clear();
	}
}

function keyPressed(){
  if (key == ' '){
		setup();
  }  
}