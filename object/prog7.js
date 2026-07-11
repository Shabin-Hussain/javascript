weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:32},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:32},
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:32},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:32},
]
//print district with its highest temperature
//output:{Thrissur:32, Kottayam:30, Palakkad:34, Ernakulam:33}

//1.create output object
wd={}
//2.access each item from the weatherData array
for(data of weatherData){
    district = data.district
    currTemp = data.weather
    //3.check district is there in the output object
    if(district in wd){
        oddTemp = wd[district]
        //4.compare the temperture
        if(oddTemp>currTemp){
            wd[district]=oddTemp
        }
        else{//if new value is greater than old value
             wd[district]=currTemp
        }
    }
    else{//if district not present in o/p object
        wd[district]=currTemp
    }
}

console.log(wd);
