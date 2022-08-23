function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pvL0fvp_p/.json', modelReady);
    }

    function modelReady(){
        classfier.classify(gotResults);
    }

    function gotResults(error, results) {
        if (error){
            console.error(error);
        } else {
            console.log(results);
            r = Math.floor(Math.random() * 255) + 1;
            g = Math.floor(Math.random() * 255) + 1;
            b = Math.floor(Math.random() * 255) + 1;

            document.getElementById("result_label").innerHTML = 'I can hear - '+
            results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
            (results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("
            +r+","+g+","+b+")"; 
            document.getElementById("result_confidence").style.color = "rgb("
            +r+","+g+","+b+")"; 

            img1 = document.getElementById('Cat');
            img2 = document.getElementById('Dog');
            img3 = document.getElementById('Lion');
            img4 = document.getElementById('Elephant');

            if (results[0].label == "Dog"){
                img1.src = 'Cat.png';
                img2.src = 'Dog.gif';
                img3.src = 'Lion.png';
                img4.src = 'Elephant.png';
            } else if (results[0].label == "Lion") {
                img1.src = 'Cat.png';
                img2.src = 'Dog.png';
                img3.src = 'Lion.gif';
                img4.src = 'Elephant.png'; 
            } else if (results[0].label == "Elephant") {
                img1.src = 'Cat.png';
                img2.src = 'Dog.png';
                img3.src = 'Lion.png';
                img4.src = 'Elephant.png'; 
            } else{
                img1.src = 'Cat.gif';
                img2.src = 'Dog.png';
                img3.src = 'Lion.png';
                img4.src = 'Elephant.png'; 
            }
        }

    }