const Datas = "./json/Dc.json";

fetch(Datas)
  .then((response) => {
    if (!response.ok) {
      throw new Error("error" + response.status);
    }
    return response.json();
  })

  .then((Data) => {
    const container = document.getElementById("DC");

    Data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("container");

      div.innerHTML = `
        <div class="target">
            <h1> ${item.name}</h1>
            <br>
            <div class="image_container">
                <img src="${item.img}">
            </div>
            
            <strong>habilidades: <br>

            ${item.hability}</strong>
            <p><p>
        </div>
        `;
      container.appendChild(div);
    });
  });
