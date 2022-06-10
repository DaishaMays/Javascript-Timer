console.log('Javascript is working')


// Built a function that display chosen date and uses getTime 
// method to convert into milliseconds
// With this function we are getting the current time and subtracting by
// our goal Date.
const countdown = () => {
    const countDate = new Date('September 27, 2022 00:00:00').getTime();
    
    // Following fucntion gives us the current time
    const now = new Date().getTime();

    // This part of the function provides us with the difference
    const gap = countDate - now;

    // How many milliseconds are in a second?
    const second = 1000;

    // How many seconds in a minute?
    const minute = second * 60;

    // How many minutes in a hour?
    const hour = minute * 60;

    // How many hours in a day?
    const day = hour * 24;

    // Calculate the days and use math.floor method to make whole number
    const textDay = Math.floor(gap / day);
    console.log(textDay)

    // Calculate the hours left in the day and use math.floor method to make whole number
    const textHour = Math.floor((gap % day) / hour);
    console.log(textHour)

    // Calculate the minutes left in the hour and use math.floor method to make whole number
    const textMinutes = Math.floor((gap % hour) / minute);
    console.log(textMinutes)

    // Calculate the seconds left in the minutes and use math.floor method to make whole number
    const textSeconds = Math.floor((gap % minute) / second);
    console.log(textSeconds)

    // Change the HTML text
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinutes;
    document.querySelector('.second').innerText = textSeconds;

};

countdown();


