//document.getElementById("bb").src="/images/2.00.png";
//const image = document.querySelector('.img');
//image.setAttribute('src', '\images\2.00.png');
//document.header.style.backgroundImage = 'https://st.peopletalk.ru/wp-content/uploads/2022/07/2.00.png';
//document.getElementById('elem').style.backgroundColor = '#FF0000';
let skinChangerButton = document.querySelector(".skinChangerButton");
flag = "LightTheme";
if (flag == "LightTheme")
  skinChangerButton.onclick = function () {
    let checkbox = document.querySelector(".checkbox");
    checkbox.style.backgroundColor = "rgb(31, 26, 26)";
    checkbox.style.color = "red";

    let customcheckbox = document.querySelector(".custom-checkbox");
    customcheckbox.style.color = "red";

    let manlabel = document.getElementById("manlabel");
    manlabel.style.color = "rgb(189, 179, 179)";

    let womanlabel = document.getElementById("womanlabel");
    womanlabel.style.color = "rgb(189, 179, 179)";

    let childrenlabel = document.getElementById("childrenlabel");
    childrenlabel.style.color = "rgb(189, 179, 179)";

    let button = document.querySelector(".btn");
    button.style.backgroundColor = "rgb(102, 89, 89)";
    button.style.color = "rgb(209, 192, 192)";

    let manSection = document.querySelector(".manSection");
    manSection.style.backgroundColor = "rgb(31, 26, 26)";
    manSection.style.color = "rgb(189, 179, 179)";

    let polosa = document.querySelector(".polosa");
    polosa.style.backgroundColor = "rgb(189, 179, 179)";

    let polosa1 = document.querySelector(".polosa1");
    polosa1.style.backgroundColor = "rgb(189, 179, 179)";

    let stuff = document.querySelector(".stuff");
    stuff.style.backgroundColor = "rgb(31, 26, 26)";

    //let stuffWoman = document.querySelector('.stuffWoman')
    //stuffWoman.style.backgroundColor = 'rgb(69, 60, 60)'

    let drobdiv = document.querySelector(".drobdiv");
    drobdiv.style.backgroundColor = "rgb(31, 26, 26)";

    let drob1 = document.querySelector(".drob1");
    drob1.style.backgroundColor = "rgb(31, 26, 26)";

    let womanSection = document.querySelector(".womanSection");
    womanSection.style.backgroundColor = "rgb(31, 26, 26)";
    womanSection.style.color = "rgb(189, 179, 179)";

    let drobdiv2 = document.querySelector(".drobdiv2");
    drobdiv2.style.backgroundColor = "rgb(31, 26, 26)";

    let stuffdown = document.querySelector(".stuffdown");
    stuffdown.style.backgroundColor = "rgb(31, 26, 26)";

    let white = document.querySelector(".white");
    white.style.backgroundColor = "rgb(31, 26, 26)";
    white.style.color = "rgb(31, 26, 26)";

    let aboutUs = document.querySelector(".about_us");
    aboutUs.style.backgroundColor = "rgb(59, 49, 49)";
    aboutUs.style.color = "rgb(189, 179, 179)";

    let name1 = document.querySelector(".name1");
    let name2 = document.querySelector(".name2");
    let name3 = document.querySelector(".name3");
    let name4 = document.querySelector(".name4");
    let name5 = document.querySelector(".name5");
    let name6 = document.querySelector(".name6");
    name1.style.color = "rgb(189, 179, 179)";
    name2.style.color = "rgb(189, 179, 179)";
    name3.style.color = "rgb(189, 179, 179)";
    name4.style.color = "rgb(189, 179, 179)";
    name5.style.color = "rgb(189, 179, 179)";
    name6.style.color = "rgb(189, 179, 179)";

    let size1 = document.querySelector(".size1");
    let size2 = document.querySelector(".size2");
    let size3 = document.querySelector(".size3");
    let size4 = document.querySelector(".size4");
    let size5 = document.querySelector(".size5");
    let size6 = document.querySelector(".size6");
    size1.style.color = "rgb(189, 179, 179)";
    size2.style.color = "rgb(189, 179, 179)";
    size3.style.color = "rgb(189, 179, 179)";
    size4.style.color = "rgb(189, 179, 179)";
    size5.style.color = "rgb(189, 179, 179)";
    size6.style.color = "rgb(189, 179, 179)";

    let stuff1 = document.querySelector(".stuff1");
    let stuff2 = document.querySelector(".stuff2");
    let stuff3 = document.querySelector(".stuff3");
    let stuff4 = document.querySelector(".stuff4");
    let stuff5 = document.querySelector(".stuff5");
    let stuff6 = document.querySelector(".stuff6");
    stuff1.style.backgroundColor = "rgb(107, 98, 92)";
    stuff2.style.backgroundColor = "rgb(107, 98, 92)";
    stuff3.style.backgroundColor = "rgb(107, 98, 92)";
    stuff4.style.backgroundColor = "rgb(107, 98, 92)";
    stuff5.style.backgroundColor = "rgb(107, 98, 92)";
    stuff6.style.backgroundColor = "rgb(107, 98, 92)";

    let skinChanger = document.querySelector(".skinChanger");
    skinChanger.style.backgroundColor = "rgb(31, 26, 26)";
    skinChanger.style.color = "rgb(189, 179, 179)";
    let newTheme = document.querySelector(".newTheme");
    newTheme.textContent = "... And you can always switch it back :^)";
    newTheme.style.marginLeft = "450px";

    let skinChangerButton = document.querySelector(".skinChangerButton");
    skinChangerButton.textContent = "Back to old theme";
    flag = 'DarkTheme'
  };
  