var images = ["/images/grubThink.png",
  "/images/kneeLs.png",
  "/images/nootChill.png",
];
var index = 0;

function makeImage() {
  var img = document.createElement('img')
  img.src = images[index];
  document.getElementById('content').appendChild(img);
}

function nextImage() {
  var img = document.getElementById('content').getElementsByTagName('img')[0]
  index++;
  index = index % images.length;
  img.src = images[index];
}

var images = ["/images/grubThink.png",
  "/images/kneeLs.png",
  "/images/nootChill.png",
];
var index = 0;

function makeImage() {
  var img = document.createElement('img')
  img.src = images[index];
  document.getElementById('content').appendChild(img);
}

function nextImage() {
  var img = document.getElementById('content').getElementsByTagName('img')[0]
  index++;
  index = index % images.length;
  img.src = images[index];
}


//---------

preload() {
    //loop and preload images
    for (var i = 1; i < 4; i++) {
        this.load.image("image" + i, "/assets/imgs/talks/dia001/" + i + ".png");
    }
}
create() {
    //make an array to loop through later
    //to turn off and on cards
    this.cardArray = [];
    //
    //Align Grid for placing objects
    //
    // this.aGrid = new AlignGrid({
    //     scene: this,
    //     rows: 11,
    //     cols: 11
    // });
    //for debugging
    // this.aGrid.showNumbers();
    //
    //Make the big cards
    //
    for (var i = 1; i < 4; i++) {
        let card = this.add.image(0, 0, "image" + i);
        //
        //scale the cards to 25% of the game's with
        //
        // Align.scaleToGameW(card, .25);
        //
        //Place all the big cards on spot 52
        //
        // this.aGrid.placeAtIndex(52, card);
        //
        //Add them to the list
        //
        this.cardArray.push(card);
    }
    //
    //Make the small cards
    //
    for (var i = 1; i < 4; i++) {
        let card = this.add.image(0, 0, "image" + i);
        //
        //give the card an index
        //
        card.index = i;
        //
        //Scale the card to 10% of the game's width
        //
        // Align.scaleToGameW(card, .1);
        //
        //Place each card on a new row on the grid
        //
        // this.aGrid.placeAtIndex(12 + (i * 11), card);
        //
        //set the card interactive so it can be clicked on
        //
        card.setInteractive();
    }
    //add a listener to the scene so when an interactive game object
    //is clicked it will call the function
    this.input.on('gameobjectdown', this.cardClick.bind(this));
}
cardClick(pointer, card) {
    console.log(card.index);
    //turn the big card with the same number 
    //as the small card visible
    this.turnCardOn(card.index);
}
allOff() {
    //turn all the big cards invisible
    for (var i = 0; i < 6; i++) {
        this.cardArray[i].visible = false;
    }
}
turnCardOn(index) {
    //
    //turn off all the big cards
    //
    this.allOff();
    //
    //turn back on the one big card we need
    //
    this.cardArray[index - 1].visible = true;
}
}