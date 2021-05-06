let clock,
        date,
        time;
        clock = new Date();
        // console.log(clock);
        time = clock.getHours() + ':' + clock.getMinutes() + ':' + clock.getSeconds();
        // console.log(time);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval(()=>{
            clock = new Date();
            time = clock.getHours() + ':' + clock.getMinutes() + ':' + clock.getSeconds();
            date = clock.toLocaleDateString(undefined, options);
            // date = clock.toLocaleDateString();
            document.getElementById('watch').innerHTML = time + '\n<br>' + date;
        }, 1000)