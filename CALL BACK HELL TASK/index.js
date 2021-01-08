let value = 10
setTimeout(()=>{
    document.getElementById('change').innerText = value
    value--;
    setTimeout(()=>{
        document.getElementById('change').innerText = value
        value--;
        setTimeout(()=>{
            document.getElementById('change').innerText = value
            value--;
            setTimeout(()=>{
                document.getElementById('change').innerText = value
                value--;
                setTimeout(()=>{
                    document.getElementById('change').innerText = value
                    value--;
                    setTimeout(()=>{
                        document.getElementById('change').innerText = value
                        value--;
                        setTimeout(()=>{
                            document.getElementById('change').innerText = value
                            value--;
                            setTimeout(()=>{
                                document.getElementById('change').innerText = value
                                value--;
                                setTimeout(()=>{
                                    document.getElementById('change').innerText = value
                                    value--;
                                    setTimeout(()=>{
                                        document.getElementById('change').innerText = value
                                        value--;
                                        setTimeout(()=>{
                                            document.getElementById('change').innerText = 'Happy Independence Day'
                                            document.getElementById('change').classList.add("para");
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)