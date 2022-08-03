var list = [
  {
    id: 1,
    name: "Utkarsh",
    src: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum assumenda suscipit pariatur quisquam aliquam dolorem corrupti alias voluptates illo.",
  },
  {
    id: 2,
    name: "Kalra",
    src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
    desc: "Laudantium asperiores quo sint earum sed delectus eos qui error quisquam vel nihil quae at voluptate facilis non nam voluptatum, veritatis dignissimos. Deserunt nesciunt tenetur illum qui natus!",
  },
  {
    id: 3,
    name: "Sukhman",
    src: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    desc: "Qui vel corrupti, ex excepturi asperiores iure reiciendis velit itaque, voluptatem, quas odit quo. Recusandae, expedita voluptatum rerum enim consequuntur hic a vel, quia ea tempora, asperiores illo ex placeat?",
  },
  {
    id: 4,
    name: "Singh",
    src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum assumenda suscipit pariatur quisquam aliquam dolorem corrupti alias voluptates illo.",
  },
  {
    id: 5,
    name: "Mandeep",
    src: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    desc: "Qui vel corrupti, ex excepturi asperiores iure reiciendis velit itaque, voluptatem, quas odit quo. Recusandae, expedita voluptatum rerum enim consequuntur hic a vel, quia ea tempora, asperiores illo ex placeat?",
  },
  {
    id: 6,
    name: "Sukhi",
    src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
    desc: "Laudantium asperiores quo sint earum sed delectus eos qui error quisquam vel nihil quae at voluptate facilis non nam voluptatum, veritatis dignissimos. Deserunt nesciunt tenetur illum qui natus!",
  },
];

var reviews = document.querySelector("#container");

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

var content = "";
list.forEach((item) => {
  content += `<div class="shadow" id="${item.id}-review">
        <div class="photo"><img src="${item.src}" alt=""></div>
        <h3 class="name">${item.name}</h3>
        <p class="review">${item.desc}</p>
        <span class="page">${item.id}.</span>
      </div>`;
});

reviews.innerHTML = content;
var curId = 1;
document.getElementById(`${curId}-review`).style.display = "flex";
const nextReview = () => {
  document.getElementById(`${curId}-review`).style.display = "none";
  curId += curId < 6 ? 1 : -5;
  document.getElementById(`${curId}-review`).style.display = "flex";
};

const prevReview = () => {
  document.getElementById(`${curId}-review`).style.display = "none";
  curId -= curId > 1 ? 1 : -5;
  document.getElementById(`${curId}-review`).style.display = "flex";
};

//storing in localstorage;

localStorage.setItem("roll_number", "UE198110");

// creating cookies

document.cookie = "username=utkarsh kalra";
document.cookie = "year=3rd year";
