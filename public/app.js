async function generar(){

    const texto = document.getElementById("texto").value;

    const response = await fetch("/api/audio",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            text:texto
        })
    });

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    document.getElementById("player").src = url;

}
