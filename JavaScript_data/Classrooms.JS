const classroom_data = [
    {
        "Names" : 
        [
            "JAM's Room",
            "Math 123"
        ],
        "teachers":
        [
            "JAM"
        ],
        "Location" :
        [
            "Upper School",
            "Math Hallway"
        ],
        "Courses":
        [
            "Algebra 2",
            "FST Honors",
            "Calculus AB",
            "Calculus BC"
        ]
    },
    {
        "Names" : 
        [
            "Math office"
        ],
        "teachers":
        [
            "Dr. Dobson",
            "Dr. Vinton",
            "DV"
        ],
        "Location" :
        [
            "Upper School",
            "Math Hallway"
        ],
        "Courses":
        [
            
        ]
    },
    {
        "Names" :
        [
            "Perkins's Room",
            "Math 234"
        ],
        "teachers":
        [
            "Dr. Perkins"
        ],
        "Location" :
        [
            "Upper School",
            "Math Hallway"
        ],
        "Courses":
        [
            "FST",
            "AP Statistics"
        ]
    },
    {
        "Names" : 
        [
            
        ],
        "teachers":
        [
            
        ],
        "Location" :
        [
            
        ],
        "Courses":
        [
            
        ]
    }
]

function getClassroomInfo(roomName){
    let resultString = "Result Not found"
    for(let tempRoom of classroom_data){
        for(let tempName of tempRoom.Names){
            if (tempName==roomName.trim()){
                resultString = JSON.stringify(tempRoom) + "\n"
            }
        }
    }
    document.getElementById("searchResult").innerHTML = resultString
}