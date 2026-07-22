function getTime(){
    const time = new Date()
    console.log(time);

    const hour = time.getHours()
    console.log(hour);

    const min = time.getMinutes()
    console.log(min);

    const second = time.getSeconds()
    console.log(second);
    
    result.innerHTML = `${hour}:${min}:${second} ${hour>=12?'PM':'AM'}`

    setTimeout(()=>{
        getTime()
    },1000)
    
    
}

getTime()