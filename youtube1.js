let vdo_div = document.getElementById("videos");
    async function getVdo() {

        vdo_div.innerHTML = null
        let q = document.getElementById("query").value;
        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyDMEX_aomDFbogxfAjs8Zr0SZtMP6BcRlk&maxResults=20`
        );

        let data = await res.json();
        console.log("data:", data)
        // let vdo_div = document.getElementById("videos");

        // let vdos_data = data.items;
        let {items} = data;

        items = items.filter((el) =>{
            return el.id.videoId != undefined;
        });

        items.forEach(({id: {videoId}}) => { 
            // console.log(videoId)

            let div = document.createElement('div');
            div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            vdo_div.appendChild(div)
        }) 
    }