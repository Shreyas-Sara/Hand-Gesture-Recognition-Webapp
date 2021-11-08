
prediction = "";

camera = document.getElementById("camear");

Webcam.set({
    width: 350,
    length: 300,
    image_format: "png",
    png_qualtiy: 90
});

Webcam.attach("#camear");

function capture() {
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML = '<img id = "captured_img" src = "'+data+'">';
    });
}

console.log("ml5.version", ml5.version);

identify = ml5.imageClassifier("https://storage.googleapis.com/tm-model/PPTTJFM0b/model.json", modal_working);

function modal_working(){
    console.log("modal working");
}
 function speak(){
     spk = window.speechSynthesis;

     sys = "Your hand gesture according to the prediction is "+prediction;

     spk1 = new SpeechSynthesisUtterance(sys);

     spk1.speak(sys);
 }