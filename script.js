var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
console.log(url_string);
try{
    var model_url = url.searchParams.get("model_url");
    document.body.innerHTML = `<model-viewer style='width: 100vw;height: 100vh;' auto-rotate camera-controls alt='cube' src='${model_url}'></model-viewer>`;
}catch{
    document.body.innerHTML = `<h1>404</h1><p>Not Found</p>`;
}
