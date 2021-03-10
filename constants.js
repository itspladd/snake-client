const IP = "135.23.222.131";
const PORT = 50542;

let activeAnim;

const animBase = {
  spinner: ["|", "/", "—", "\\", "|", "/", "—", "\\", "|"]
}

const anims = {
  spinner: animBase.spinner,
  spinForever: animBase.spinner.map( x => x + "SPIN FOREVER" + x),
  sunglasses: ["(•_•)", "( •_•)>⌐■-■", "(⌐■_■)"],
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
}

const INPUTMAP = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  q: stopAnim,
  e: "Say: MINE.",
  x: () => anim("spinner", 100),
  f: () => anim("sunglasses", 500, false),
  c: () => anim("spinForever", 100)
}




    /* case "g":
      connection.write("Say: GG");
      break;
    case "f":
      connection.write("Say: RIP");
      break;
    case "q":
      connection.write("Say: how dare you");
      break;
    case "1":
      connection.write("Say: bacon is superior");
      break;
    case "2":
      connection.write("Say: hashbrowns overrated");
      break;
    case "3":
      connection.write("Say: fight me francis");
      break;
    case "z":
      connection.write("Say: Hello! Zuko here.");
      break;
    case "]":
      connection.write("Say: aw no emoji");
      break;
    case "0":
      connection.write("Say: my corner. no touch.");
      break;
    case "9":
      connection.write("Say: SO FANCY.");
      break;
    case "8":
      connection.write("Say: I want spinners.");
      break;
    case "y":
      connection.write("Say: (•_•)");
      break;
    case "u":
      connection.write("Say: ( •_•)>⌐■-■");
      break;
    case "i":
      connection.write("Say: (⌐■_■)");
      break; */

module.exports = {
  IP,
  PORT,
  INPUTMAP
};