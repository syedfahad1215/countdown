const endDate = "25 May , 2023 11:10 PM";

document.getElementById("end-date").innerText = endDate ;

const end = ()=>{
    let ending = new Date(endDate)     //Ending date & time 
    let now = new Date()              //Present date & time 
    


    /*

    1 Day = 24 hours 
    1 Hour = 60 minutes 
    1 Minute = 60 seconds
    1 Second = 1000 milliseconds

    */

    let diff = (ending - now) ;                         // Diff bw present & ending date in millisec 
    
    let remainingSeconds =(Math.floor(diff / 1000))   // Diff bw present & ending in seconds
    let remainingMinutes =(Math.floor(remainingSeconds / 60))      // Diff bw present & ending in minutes
    let remainingHours = (Math.floor(remainingMinutes / 60))     // Diff bw present & ending in Hours
    let remainingDays = (Math.floor(remainingHours / 24))   // Diff bw present & ending in days
     

    console.log( "Days" ,remainingDays)
    console.log( "Hours" ,remainingHours)
    console.log( "Minutes" ,remainingMinutes)
    console.log( "Sec" ,remainingSeconds)

    // Assigning the remaining time to the respective inputs 


    document.getElementsByTagName("input")[0].value = remainingDays
    document.getElementsByTagName("input")[1].value = remainingHours
    document.getElementsByTagName("input")[2].value = remainingMinutes
    document.getElementsByTagName("input")[3].value = remainingSeconds
    

}

end()

setInterval(()=>{
    end()
},1000)