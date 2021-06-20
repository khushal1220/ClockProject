setInterval(()=>{
    d = new Date;
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2 + (1/120)*stime;
    mrotation = 6*mtime + (1/10)*stime;
    srotation = 6*stime ;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
},1000)