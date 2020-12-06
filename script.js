//collapsible container for služby
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//hide burger menu when section is clicked
function hideMenu() {
  let menuOpen = document.querySelector("#toggle").checked;

  if ((menuOpen = true)) {
    document.querySelector("#toggle").checked = false;
  }
}
window.addEventListener("scroll", hideMenu);

//gallery carousel

//one
let spanOne = document.getElementsByClassName("span-one");
let galleryOne = document.getElementsByClassName("gallery-one");
let l = 0;

spanOne[1].onclick = () => {
  l++;
  for (let i of galleryOne) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l > 3) {
      l = 3;
    }
  }
};

spanOne[0].onclick = () => {
  l--;
  for (let i of galleryOne) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};

//two
let spanTwo = document.getElementsByClassName("span-two");
let galleryTwo = document.getElementsByClassName("gallery-two");
let m = 0;

spanTwo[1].onclick = () => {
  m++;
  for (let i of galleryTwo) {
    if (m == 0) {
      i.style.left = "0px";
    }
    if (m == 1) {
      i.style.left = "-740px";
    }
    if (m == 2) {
      i.style.left = "-1480px";
    }
    if (m > 2) {
      m = 2;
    }
  }
};

spanTwo[0].onclick = () => {
  m--;
  for (let i of galleryTwo) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};

//three
let spanThree = document.getElementsByClassName("span-three");
let galleryThree = document.getElementsByClassName("gallery-three");
let n = 0;

spanThree[1].onclick = () => {
  n++;
  for (let i of galleryThree) {
    if (n == 0) {
      i.style.left = "0px";
    }
    if (n == 1) {
      i.style.left = "-740px";
    }
    if (n == 2) {
      i.style.left = "-1480px";
    }
    if (n == 3) {
      i.style.left = "-2220px";
    }
    if (n > 3) {
      l = 3;
    }
  }
};

spanThree[0].onclick = () => {
  n--;
  for (let i of galleryThree) {
    if (n == 0) {
      i.style.left = "0px";
    }
    if (n == 1) {
      i.style.left = "-740px";
    }
    if (n == 2) {
      i.style.left = "-1480px";
    }
    if (n == 3) {
      i.style.left = "-2220px";
    }
    if (n < 0) {
      n = 0;
    }
  }
};
