export default function photo(tags) {
  const grid = "col-xl-2 col-md-4 col-sm-6 mb-4 mb-lg-0";
  let ul = document.getElementById("mainPhotoParent");
  const url = `https://res.cloudinary.com/dchpzxwnx/image/list/${tags}.json`;

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let results = data.resources;
      for (let item in results) {
        let addFigure = document.createElement("figure");
        let addAlink = document.createElement("a");
        let addImg = document.createElement("img");
        addFigure.className = grid;
        addAlink.href = `https://res.cloudinary.com/dchpzxwnx/image/upload/v${results[item].version}/${results[item].public_id}.jpg`;
        addAlink.setAttribute(
          "data-size",
          `${results[item].width}x${results[item].height}`
        );
        addImg.src = `https://res.cloudinary.com/dchpzxwnx/image/upload/c_thumb,g_center,h_286,w_200/v${results[item].version}/${results[item].public_id}.jpg`;
        addAlink.appendChild(addImg);
        addFigure.appendChild(addAlink);
        mainPhotoParent.appendChild(addFigure);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
