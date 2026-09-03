$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(255, 255, 255)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400, 100, 400, 800, "rgb(233, 192, 10)");
createPlatform(350, 700, 504, 67, "white");
createPlatform(650, 500, 302, 200, "rgb(173, 157, 84)")
createPlatform(600, 200, 200, 100, "white")
createPlatform(600, 200, 50, 50, "black")
createPlatform(700, 200, 50, 50, "black")
createPlatform(700, 600, 250, 50, "black")
createPlatform(280, 270, 250, 50, "black")
createPlatform(280, 500, 125, 50, "black")
createPlatform(50, 630, 125, 50, "black")
createPlatform(50, 370, 125, 50, "black")
createPlatform(300, 200, 125, 25, "black")
createPlatform(660, 560, 50, 50, "black")

    // TODO 3 - Create Collectables
createCollectable("steve", 900, 450);
createCollectable("diamond", 200, 170, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
createCannon("top", 260, 2000);
createCannon("right", 300, 1700);
createCannon("bottom", 760, 800);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
