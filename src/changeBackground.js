const changeBackground = (() => {
    
    function change() {
        const body = document.querySelector('body');
        const bgUrls = ['./images/cover1.jpg', './images/cover2.jpg', './images/cover3.jpg', './images/cover4.jpg'
        ,'./images/cover5.jpg', './images/cover6.jpg','./images/cover7.jpg','./images/cover8.jpg', './images/cover9.jpg'];
        let i = 1;
        setInterval(function(){
            body.style.backgroundImage = `url('./images/cover${i++}.jpg')`;
            if(i === 10){
                i = 1;
            }
        }, 20000);

    }
    return {
        change, 
    }

})();

export {changeBackground};  