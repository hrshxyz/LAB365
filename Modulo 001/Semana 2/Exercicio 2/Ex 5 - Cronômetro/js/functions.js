function startStopwatch() {
    let timeCount = 10;
    function stopwatch() {
        var time = document.getElementById('time');
        time.innerHTML = timeCount;
        console.log(timeCount);
        if ( timeCount == 0) {
            clearInterval(stop);
            time.innerHTML = ('Seu tempo acabou!! Tente novamente!!');
        };
        timeCount--;
    }
    let stop = setInterval(stopwatch, 1000);
}