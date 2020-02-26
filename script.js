var students = [
    {firstname: "Sybille",
    lastname: "Kasslatter",
    },
    {firstname: "Miranda",
    lastname: "Kamp"
    },
    {firstname: "Emelie",
    lastname: "Sundgren"
    },
    {firstname: "Aristides",
    lastname: "Abeywickrama"
    },
    {firstname: "Damianos",
    lastname: "Makris"
    },
    {firstname: "Neil",
    lastname: "Gursahani"
    },
    {firstname: "Justin",
    lastname: "Peeters"
    },
    {firstname: "Yvana",
    lastname: "Wagter"
    },
    {firstname: "Charles",
    lastname: "van den Bergh"
    },
    {firstname: "Elena",
    lastname: "Perrone"
    },
    {firstname: "Fábio",
    lastname: "Costa"
    },
    {firstname: "Shabeer",
    lastname: "Hussain"
    },
    {firstname: "Felix",
    lastname: "van Riessen"
    },
    {firstname: "Alexandra",
    lastname: "Muskovszky"
    },
    {firstname: "Azadeh",
    lastname: "Farshidi"
    },
    {firstname: "Francis",
    lastname: "Bukenya"
    }
]











 document.querySelector("#submit").addEventListener("click", function(){
     let     = document.querySelector("#add-text").value;
     let newHeaderTag = document.createElement("h1");
     newHeaderTag.innerHTML = newText;

     document.querySelectorAll(".new-headers")[0].appendChild(newHeaderTag)
 })