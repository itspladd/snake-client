const fs = require('fs');

const IP = "135.23.222.131";
const PORT = 50542;

let activeAnim;
let activeAutoMove;

const animBase = {
  spinner: ["|", "/", "—", "\\", "|", "/", "—", "\\", "|"]
}

const anims = {
  spinner: animBase.spinner,
  spinForever: animBase.spinner.map( x => x + "SPIN FOREVER" + x),
  sunglasses: ["(•_•)", "( •_•)>⌐■-■", "(⌐■_■)"],
  bee: fs.readFileSync("./bee.txt", { encoding: "utf8" })
    .replace(/\s/g, " ")
    .split(" ")
    .filter(x => x !== "" && x !== "-")
}

const autoMoves = {
  smallCircle: ["w", "w", "a", "a", "s", "s", "d", "d"],
  medCircle: ["w", "w", "w", "w", "a", "a", "a", "a", "s", "s", "s", "s", "d", "d", "d", "d"],
}

const autoMove = (sequence) => {
  let i = 0;
  let seq = autoMoves[sequence];
  if (activeAutoMove) {
    stopMove();
  }
  activeAutoMove = setInterval( () => {
    if (i === seq.length) {
      i = 0;
    }
    connection.write(INPUTMAP[seq[i]]);
    i++;
  }, 1000);
}

const anim = (strings, delay = 100, loop = true) => {
  let i = 0;
  if (activeAnim) {
    stopAnim();
  }
  activeAnim = setInterval( () => {
    if (i === anims[strings].length) {
      if (!loop) {
        return true;
      } else {
        i = 0;
      }
    }
    connection.write("Say: " + anims[strings][i])
    i++;
  }, delay);  
};

const stopAnim = () => {
  clearInterval(activeAnim);
  connection.write("Say:  ");
};

const stopMove = () => {
  clearInterval(activeAutoMove);
};

const INPUTMAP = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  r: "Say: RIP",
  o: "Say: My corner! No touch!",
  p: "Say: no talk me i angy",
  q: stopAnim,
  e: "Say: MINE.",
  x: () => anim("spinner", 100),
  f: () => anim("sunglasses", 500, false),
  c: () => anim("spinForever", 100),
  b: () => anim("bee", 1000),
  0: () => autoMove("smallCircle"),
  "}": () => autoMove("medCircle"),
  9: stopMove,
  t: "Say: who you callin creepy",
}

module.exports = {
  IP,
  PORT,
  INPUTMAP
};