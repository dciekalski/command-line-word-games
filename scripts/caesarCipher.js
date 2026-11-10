// scripts/caesarCipher.js — yours to write.
//
// The markers below name requirements from README.md, so the brief, your
// Issues, the agent and this file all use the same words. Nothing reads them.

// FR007 — Caesar Cipher.
// Read a phrase and a shift number from process.argv. Shift every letter by
// that amount, case-insensitively; a positive shift moves right through the
// alphabet, a negative one moves left. Print the encrypted phrase.
//
// node scripts/caesarCipher.js "hello world" 3
// # khoor zruog

// FR010 — Reject a missing or non-numeric shift.
// If the shift isn't given, or isn't a number, print a usage message instead
// of letting the program crash or silently treat it as zero.

// FR011 — Pass non-letter characters through unchanged.
// Spaces, punctuation and numbers in the input should appear in the output
// exactly as given, never shifted.

// 1. Eingaben holen (slice)
// 2. Text = Platz 0, Verschiebung = Platz 1 (als Zahl)
// 3. Türsteher: Text fehlt, oder Verschiebung ist keine Zahl → Hinweis + Stopp
// 4. Leeres Ergebnis anlegen
// 5. Für jedes Zeichen im Text (Schleife mit [i]):
//      Position im Alphabet suchen
//      Kein Buchstabe? → Zeichen unverändert ans Ergebnis anhängen
//      Buchstabe?      → neue Position = Position + Verschiebung, mit Modulo im Alphabet halten
//                        → Buchstaben an der neuen Position ans Ergebnis anhängen
// 6. Ergebnis ausgeben


const args = process.argv.slice(2);

const userEntry = args[0];

const shift = Number(args[1])

if (userEntry === undefined) {
    console.log('Please enter text.');
    return;
}

if (isNaN(shift)) {
    console.log('Please enter shift number.');
    return;
}


let result = ""

const abc = "abcdefghijklmnopqrstuvwxyz"

for (let i = 0; i < userEntry.length; i++) {
    const position = abc.indexOf(userEntry[i])

    if (position === -1) {
        result += userEntry[i];

    } else {
        const newPosition = (((position + shift) % 26 + 26) % 26)
        result += abc[newPosition];
       
    }
}
console.log(result)


