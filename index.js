setInterval(function () {
  var textInput = document.getElementById("textInput").value;
  var redTextInput = "";
  document.getElementById("charCount").textContent = `${textInput.length} / 140`;

  if (textInput.length >= 140) {
    document.getElementById("charCount").style.color = "red";
    textInput = textInput.slice(0, 140);
    document.getElementById("textInput").style.color = "red";
  } else {
    document.getElementById("charCount").style.color = "white";
    document.getElementById("textInput").style.color = "white";
  }
}, 300);

document.getElementById("btn").onclick = function () {
  let textRaw = document.getElementById("textInput").value;
  let textEdited = textRaw.slice(0, 140);
  if (textRaw.length >= 140) {
    alert("Text can't be more than 140 characters. Your text reduced to 140 Characters");
     console.log(textEdited);
  } else {
    console.log(textEdited);
  }
};