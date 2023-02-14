const outputElement = document.getElementById('output');
const sliderElement = document.getElementById('reading-speed');
const sliderOutput = document.getElementById("slider-output")

document.body.addEventListener('mouseup', function() {
  let highlightedText = '';

  if (window.getSelection) {
    highlightedText = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    highlightedText = document.selection.createRange().text;
  }

  const words = highlightedText.split(' ');
  const wpm = sliderElement.value; // Change this to the desired reading speed in WPM
  sliderOutput.innerHTML = `${wpm} wpm`
  const timeout = (60 / wpm) * 1000; // Calculate the timeout in milliseconds

  outputElement.innerHTML = ''; // Clear the current contents of the output element
  console.log(highlightedText)
  words.forEach((word, index) => {
    setTimeout(() => {
      outputElement.innerHTML = word;
    }, index * timeout);
  });
});
