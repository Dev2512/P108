//https://teachablemachine.withgoogle.com/models/lRaJXxvkm/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lRaJXxvkm/model.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results);

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        
        img = document.getElementById('ear_gif');

        if (results[0].label == "Barking")
        {
            img.src = "Dog.gif"
        } else if (results[0].label == "Meowing") {
            img.src = "Cat.gif"
        } else if (results[0].label == "Mooing") {
            img.src = "Cow.gif"
        } else if (results[0].label == "Roar") {
            img.src = "lion-roar.gif"
        } else{
            img.src = "Ear.gif"
        }
    } 
}