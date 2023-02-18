const rm_name = document.getElementById("rm_name");
const rm_image = document.getElementById("rm_image");
const rm_id = document.getElementById("rm_id");
const rm_status= document.getElementById("rm_status");
const rm_species= document.getElementById("rm_species");
const rm_type= document.getElementById("rm_type");
const rm_gender= document.getElementById("rm_gender");
const rm_origin_name= document.getElementById("rm_origin_name");
const rm_location= document.getElementById("rm_location");

async function searchData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/21");
        const dados = await response.json()
        rm_name.innerHTML = dados?.name;
        rm_image.src = dados?.image;
        rm_id.innerHTML = `<b> ID:</b> ${dados?.id}`;
        rm_status.innerHTML = `<b> Estado:</b> ${dados?.status}`;
        rm_species.innerHTML = `<b> Espécie:</b> ${dados?.species}`;
        rm_type.innerHTML = `<b> Tipo:</b> ${dados?.type}`;
        rm_gender.innerHTML = `<b> Genero:</b> ${dados?.gender}`;
        rm_origin_name.innerHTML = `<b> Origem:</b> ${dados?.origin?.name}`;
        rm_location.innerHTML = `<b> Localização:</b> ${dados?.location?.name}`;
    }
    catch (e) { 
        console.log('Falha ao carregar os dados')
    }

}

searchData();