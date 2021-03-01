    var x = document.getElementById('top-products');
    var dog = document.getElementById('top-products-dog');
    var cat = document.getElementById('top-products-cat');
    var rodents = document.getElementById('top-products-rodents');
    var bird = document.getElementById('top-products-bird');
    
    
    function show(){

        x.style.opacity = "1";
        dog.style.opacity = "0";
        cat.style.opacity = "0";
        rodents.style.opacity = "0";
        bird.style.opacity = "0";

    }


    function show_dog(){

        dog.style.opacity = "1";
        x.style.opacity = "0";
        cat.style.opacity = "0";
        rodents.style.opacity = "0";
        bird.style.opacity = "0";

    }

    function show_cat(){

        cat.style.opacity = "1";
        x.style.opacity = "0";
        dog.style.opacity = "0";
        rodents.style.opacity = "0";
        bird.style.opacity = "0";
    }

    function show_rodents(){

        rodents.style.opacity = "1";
        x.style.opacity = "0";
        cat.style.opacity = "0";
        dog.style.opacity = "0";
        bird.style.opacity = "0";
    }


function show_bird(){

        bird.style.opacity = "1";
        x.style.opacity = "0";
        cat.style.opacity = "0";
        rodents.style.opacity = "0";
        dog.style.opacity = "0";
    }