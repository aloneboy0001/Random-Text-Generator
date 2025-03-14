const sentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    "Vivamus suscipit tortor eget felis porttitor volutpat.",
    "Proin eget tortor risus.",
    "Donec sollicitudin molestie malesuada.",
    "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    "Nulla quis lorem ut libero malesuada feugiat.",
    "Pellentesque in ipsum id orci porta dapibus.",
    "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
];

function generateText() {
    let count = document.getElementById("sentenceCount").value;
    let output = "";

    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * sentences.length);
        output += sentences[randomIndex] + " ";
    }

    document.getElementById("output").value = output.trim();
}