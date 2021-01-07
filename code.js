function submit_message_input () {
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
    if (output_message_number > 33) {
      output_message_number -= 33
    }
    output_message_letter = numbers_letters[output_message_number]
    encrypted_message_output += output_message_letter
  }
  document.getElementById("encrypted_message_output").value = encrypted_message_output
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
  "\'": 34
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
28: ".",
29:"!",
30: "?",
31: "-",
32: ";",
33: "\"",
34: "\'"
}
