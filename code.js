function vigenere_encrypt_message () {
  let message_input = document.getElementById('message_input').value.toLowerCase();
  console.log(message_input)
  let message_input_array = message_input.split("")
  console.log(message_input_array)
  let encryption_key = document.getElementById('encryption_key').value.toLowerCase();
  console.log(encryption_key)
  let encryption_key_array = encryption_key.split("")
  console.log(encryption_key_array)
  let part1 = []
  if (message_input_array.length > encryption_key_array.length) {
    for (var i = 0; i< (Math.floor(message_input.length/encryption_key.length)); i++) {
    part1 = part1.concat(encryption_key_array)
    console.log(part1)
    }
    let part2 = encryption_key_array.slice(0, (message_input_array.length%encryption_key_array.length))
    console.log(part2)
    encryption_key_array = part1.concat(part2)
    console.log(encryption_key_array)
  }
  let encrypted_message_output = ""
  for (var i = 0; i< message_input_array.length; i++) {
    message_letter_number = letters_numbers[message_input_array[i]]
    encryption_key_number = letters_numbers[encryption_key_array[i]]
    output_message_number = message_letter_number + encryption_key_number
    if (output_message_number > 37) {
      output_message_number -= 38
    }
    output_message_letter = numbers_letters[output_message_number]
    encrypted_message_output += output_message_letter
  }
  document.getElementById("encrypted_message_output").value = encrypted_message_output
}


function vigenere_decrypt_message () {
  let encrypted_message_input = document.getElementById('encrypted_message_input').value.toLowerCase();
  console.log(encrypted_message_input)
  let encrypted_message_input_array = encrypted_message_input.split("")
  console.log(encrypted_message_input_array)
  let decryption_key = document.getElementById('decryption_key').value.toLowerCase();
  console.log(decryption_key)
  let decryption_key_array = decryption_key.split("")
  console.log(decryption_key_array)
  let part1 = []
  if (encrypted_message_input_array.length > decryption_key_array.length) {
    for (var i = 0; i< (Math.floor(encrypted_message_input.length/decryption_key.length)); i++) {
    part1 = part1.concat(decryption_key_array)
    console.log(part1)
    }
    let part2 = decryption_key_array.slice(0, (encrypted_message_input_array.length%decryption_key_array.length))
    console.log(part2)
    decryption_key_array = part1.concat(part2)
    console.log(decryption_key_array)
  }
  let decrypted_message_output = ""
  for (var i = 0; i< encrypted_message_input_array.length; i++) {
    encrypted_message_letter_number = letters_numbers[encrypted_message_input_array[i]]
    decryption_key_number = letters_numbers[decryption_key_array[i]]
    decrypted_output_message_number = encrypted_message_letter_number - decryption_key_number
    if (decrypted_output_message_number < 0) {
      decrypted_output_message_number += 38
    }
    decrypted_output_message_letter = numbers_letters[decrypted_output_message_number]
    decrypted_message_output += decrypted_output_message_letter
  }
  document.getElementById("decrypted_message_output").value = decrypted_message_output
}

function loeffeln () {
  let loeffel_input = document.getElementById('loeffel_input').value
  let loeffel_output = loeffel_input.replace(/a/g, "allawa")
  loeffel_output = loeffel_output.replace(/A/g, "Allawa")
  loeffel_output = loeffel_output.replace(/e/g, "ellewe")
  loeffel_output = loeffel_output.replace(/E/g, "Ellewe")
  loeffel_output = loeffel_output.replace(/i/g, "illiwi")
  loeffel_output = loeffel_output.replace(/I/g, "Illiwi")
  loeffel_output = loeffel_output.replace(/o/g, "ollowo")
  loeffel_output = loeffel_output.replace(/O/g, "Ollowo")
  loeffel_output = loeffel_output.replace(/u/g, "ulluwu")
  loeffel_output = loeffel_output.replace(/U/g, "Ulluwu")
  loeffel_output = loeffel_output.replace(/ä/g, "älläwä")
  loeffel_output = loeffel_output.replace(/Ä/g, "Älläwä")
  loeffel_output = loeffel_output.replace(/ö/g, "öllöwö")
  loeffel_output = loeffel_output.replace(/Ö/g, "Öllöwö")
  loeffel_output = loeffel_output.replace(/ü/g, "üllüwü")
  loeffel_output = loeffel_output.replace(/Ü/g, "Üllüwü")
  loeffel_output = loeffel_output.replace(/y/g, "yllywy")
  loeffel_output = loeffel_output.replace(/Y/g, "Yllywy")
  document.getElementById("loeffel_output").value = loeffel_output
  console.log(loeffel_output);
}

function loeffeln_back () {
  let loeffel_back_input = document.getElementById('loeffel_back_input').value
  let loeffel_back_output = loeffel_back_input.replace(/allawa/g, "a")
  loeffel_back_output = loeffel_back_output.replace(/Allawa/g, "A")
  loeffel_back_output = loeffel_back_output.replace(/ellewe/g, "e")
  loeffel_back_output = loeffel_back_output.replace(/Ellewe/g, "E")
  loeffel_back_output = loeffel_back_output.replace(/illiwi/g, "i")
  loeffel_back_output = loeffel_back_output.replace(/Illiwi/g, "I")
  loeffel_back_output = loeffel_back_output.replace(/ollowo/g, "o")
  loeffel_back_output = loeffel_back_output.replace(/Ollowo/g, "O")
  loeffel_back_output = loeffel_back_output.replace(/ulluwu/g, "u")
  loeffel_back_output = loeffel_back_output.replace(/Ulluwu/g, "U")
  loeffel_back_inputoutput = loeffel_back_output.replace(/älläwä/g, "ä")
  loeffel_back_output = loeffel_back_output.replace(/Älläwä/g, "Ä")
  loeffel_back_output = loeffel_back_output.replace(/öllöwö/g, "ö")
  loeffel_back_output = loeffel_back_output.replace(/Öllöwö/g, "Ö")
  loeffel_back_output = loeffel_back_output.replace(/üllüwü/g, "ü")
  loeffel_back_output = loeffel_back_output.replace(/Üllüwü/g, "Ü")
  loeffel_back_output = loeffel_back_output.replace(/yllywy/g, "y")
  loeffel_back_output = loeffel_back_output.replace(/Yllywy/g, "")
  document.getElementById("loeffel_back_output").value = loeffel_back_output
  console.log(loeffel_back_output);
}


const letters_numbers = {
  "a": 0,
  "b": 1,
  "c": 2,
  "d": 3,
  "e": 4,
  "f": 5,
  "g": 6,
  "h": 7,
  "i": 8,
  "j": 9,
  "k": 10,
  "l": 11,
  "m": 12,
  "n": 13,
  "o": 14,
  "p": 15,
  "q": 16,
  "r": 17,
  "s": 18,
  "t": 19,
  "u": 20,
  "v": 21,
  "w": 22,
  "x": 23,
  "y": 24,
  "z": 25,
  " ": 26,
  ".": 27,
  ",": 28,
  "!": 29,
  "?": 30,
  "-": 31,
  ";": 32,
  "\"": 33,
  "ß'": 34,
  "ä'": 35,
  "ö'": 36,
  "ü'": 37
}

const numbers_letters = {
0: "a",
1: "b",
2: "c",
3: "d",
4: "e",
5: "f",
6: "g",
7: "h",
8: "i",
9: "j",
10: "k",
11: "l",
12: "m",
13: "n",
14: "o",
15: "p",
16: "q",
17: "r",
18: "s",
19: "t",
20: "u",
21: "v",
22: "w",
23: "x",
24: "y",
25: "z",
26: " ",
27: ".",
28: ",",
29:"!",
30: "?",
31: "-",
32: ";",
33: "\"",
34: "ß'",
35: "ä'",
36: "ö'",
37: "ü'"
}

// Morse Teil

function morse () {
  let morse_input = document.getElementById('morse_input').value.toLowerCase()
  morse_input_array = morse_input.split("")
  console.log(morse_input_array);
  let morse_output = "";
  console.log(morse_output)
  for (i = 0; i<morse_input_array.length; i++) {
    switch(morse_input_array[i])
    {
    case "a":
    console.log(morse_output)
    console.log("a was found")
    morse_output = morse_output.concat(" .-");
    console.log(morse_output)
    continue

    case "b":
    console.log("b was found")
    morse_output = morse_output.concat(" _...")
    console.log(morse_output)
    continue
    case "c":
    morse_output = morse_output.concat(" -.-.")
    continue
    case "d":
    morse_output = morse_output.concat(" -..")
    continue
    case "e":
    morse_output = morse_output.concat(" .")
    continue
    case "f":
    morse_output = morse_output.concat(" ..-.")
    continue
    case "g":
    morse_output = morse_output.concat(" --.")
    continue
    case "h":
    morse_output = morse_output.concat(" ....")
    continue
    case "i":
    morse_output = morse_output.concat(" ..")
    continue
    case "j":
    morse_output = morse_output.concat(" .---")
    continue
    case "k":
    morse_output = morse_output.concat(" -.-")
    continue
    case "l":
    morse_output = morse_output.concat(" .-..")
    continue
    case "m":
    morse_output = morse_output.concat(" --")
    continue
    case "n":
    morse_output = morse_output.concat(" -.")
    continue
    case "o":
    morse_output = morse_output.concat(" ---")
    continue
    case "p":
    morse_output = morse_output.concat(" .--.")
    continue
    case "q":
    morse_output = morse_output.concat(" --.-")
    continue
    case "r":
    morse_output = morse_output.concat(" .-.")
    continue
    case "s":
    morse_output = morse_output.concat(" ...")
    continue
    case "t":
    morse_output = morse_output.concat(" -")
    continue
    case "u":
    morse_output = morse_output.concat(" ..-")
    continue
    case "v":
    morse_output = morse_output.concat(" ...-")
    continue
    case "w":
    morse_output = morse_output.concat(" .--")
    continue
    case "x":
    morse_output = morse_output.concat(" -..-")
    continue
    case "y":
    morse_output = morse_output.concat(" -.--")
    continue
    case "z":
    morse_output = morse_output.concat(" --..")
    continue
    case " ":
    morse_output = morse_output.concat("   ")
    continue
}
  }

  document.getElementById("morse_output").value = morse_output
}

function morse_back () {

  let morse_back_input = document.getElementById('morse_back_input').value.toLowerCase()
  morse_back_input_array = morse_back_input.split(" ")
  console.log(morse_back_input_array)
  let morse_back_output = "";
  for (i = 0; i<morse_back_input_array.length; i++) {
    if (morse_back_input_array[i] == "" && morse_back_input_array[i-1] == "" && morse_back_input_array[i+1] == "") {
      morse_back_output = morse_back_output.concat(" ");
      continue
    }
    switch(morse_back_input_array[i])
    {
    case ".-":
    morse_back_output = morse_back_output.concat("a");
    continue

    case "_...":
    morse_back_output = morse_back_output.concat("b")
    continue
    case "-.-.":
    morse_back_output = morse_back_output.concat("c")
    continue
    case "-..":
    morse_back_output = morse_back_output.concat("d")
    continue
    case ".":
    morse_back_output = morse_back_output.concat("e")
    continue
    case "..-.":
    morse_back_output = morse_back_output.concat("f")
    continue
    case "--.":
    morse_back_output = morse_back_output.concat("g")
    continue
    case "....":
    morse_back_output = morse_back_output.concat("h")
    continue
    case "..":
    morse_back_output = morse_back_output.concat("i")
    continue
    case ".---":
    morse_back_output = morse_back_output.concat("j")
    continue
    case "-.-":
    morse_back_output = morse_back_output.concat("k")
    continue
    case ".-..":
    morse_back_output = morse_back_output.concat("l")
    continue
    case "--":
    morse_back_output = morse_back_output.concat("m")
    continue
    case "-.":
    morse_back_output = morse_back_output.concat("n")
    continue
    case "---":
    morse_back_output = morse_back_output.concat("o")
    continue
    case ".--.":
    morse_back_output = morse_back_output.concat("p")
    continue
    case "--.-":
    morse_back_output = morse_back_output.concat("q")
    continue
    case ".-.":
    morse_back_output = morse_back_output.concat("r")
    continue
    case "...":
    morse_back_output = morse_back_output.concat("s")
    continue
    case "-":
    morse_back_output = morse_back_output.concat("t")
    continue
    case "..-":
    morse_back_output = morse_back_output.concat("u")
    continue
    case "...-":
    morse_back_output = morse_back_output.concat("v")
    continue
    case ".--":
    morse_back_output = morse_back_output.concat("w")
    continue
    case "-..-":
    morse_back_output = morse_back_output.concat("x")
    continue
    case "-.--":
    morse_back_output = morse_back_output.concat("y")
    continue
    case "--..":
    morse_back_output = morse_back_output.concat("z")
    continue
}
  }

  document.getElementById("morse_back_output").value = morse_back_output
}

function loeffeln_back () {
  let loeffel_back_input = document.getElementById('loeffel_back_input').value
  let loeffel_back_output = loeffel_back_input.replace(/allawa/g, "a")
  loeffel_back_output = loeffel_back_output.replace(/Allawa/g, "A")
  loeffel_back_output = loeffel_back_output.replace(/ellewe/g, "e")
  loeffel_back_output = loeffel_back_output.replace(/Ellewe/g, "E")
  loeffel_back_output = loeffel_back_output.replace(/illiwi/g, "i")
  loeffel_back_output = loeffel_back_output.replace(/Illiwi/g, "I")
  loeffel_back_output = loeffel_back_output.replace(/ollowo/g, "o")
  loeffel_back_output = loeffel_back_output.replace(/Ollowo/g, "O")
  loeffel_back_output = loeffel_back_output.replace(/ulluwu/g, "u")
  loeffel_back_output = loeffel_back_output.replace(/Ulluwu/g, "U")
  loeffel_back_inputoutput = loeffel_back_output.replace(/älläwä/g, "ä")
  loeffel_back_output = loeffel_back_output.replace(/Älläwä/g, "Ä")
  loeffel_back_output = loeffel_back_output.replace(/öllöwö/g, "ö")
  loeffel_back_output = loeffel_back_output.replace(/Öllöwö/g, "Ö")
  loeffel_back_output = loeffel_back_output.replace(/üllüwü/g, "ü")
  loeffel_back_output = loeffel_back_output.replace(/Üllüwü/g, "Ü")
  loeffel_back_output = loeffel_back_output.replace(/yllywy/g, "y")
  loeffel_back_output = loeffel_back_output.replace(/Yllywy/g, "")
  document.getElementById("loeffel_back_output").value = loeffel_back_output
  console.log(loeffel_back_output);
}
