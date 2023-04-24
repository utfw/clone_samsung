window.addEventListener('load', ()=>{
  // header
  const menu = document.querySelectorAll(".gnb>ul>li");
  const header = document.querySelector(".header_wrap");
  // 메뉴동작
  menu.forEach((el,i) =>{
    el.addEventListener("mouseenter", e=>{
      e.preventDefault();
      activation(menu,i,"on");
      getHeight(el.children[1],100);
    });
    el.children[0].addEventListener("focus", e=>{
      e.preventDefault();
      activation(menu,i,"on");
      getHeight(el.children[1],100);
    });
    header.addEventListener("mouseleave", e=>{
      for(let el of menu) el.classList.remove("on");
      header.style.height = 70+"px";
    });
    el.children[0].addEventListener("blur", e=>{
      for(let el of menu) el.classList.remove("on");
      header.style.height = 70+"px";
    });
  });
  
  // 검색박스
  const btnSrch = document.querySelector(".btn_srch");
  const srchWrap = document.querySelector(".srch_wrap");
  const btnSrchClose = document.querySelector(".btn_srch_close");
  
  btnSrch.addEventListener("click", e=>{
    e.preventDefault();
    srchWrap.classList.add("on");
  });
  btnSrchClose.addEventListener("click", e=>{
    e.preventDefault();
    srchWrap.classList.remove("on");
  });

  // footer
  // 클릭하면 스크롤이 0 
  const toTop = document.querySelector("#footer .btns");

  toTop.children[1].addEventListener("click", e=>{
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });
  
  const step1Btn = document.querySelectorAll(".step1>ul>li>a");

  step1Btn.forEach((el,i) =>{
    el.addEventListener("click", e=>{
      e.preventDefault();
      for(let i=0;i<step1Btn.length;i++){
        imgChange(step1Btn[i],`url(images/ico_inquiry_0${i+1}.png)`,`transparent`,`#333`);
      }
      imgChange(el,`url(images/ico_inquiry_on_0${i+1}.png)`,`#043285`,`#fff`);
    });
  });
  function activation(aa, idx, name){
    for(let el of aa) el.classList.remove(name);
    aa[idx].classList.add(name);
  }
  function getHeight(aa,i){
    let height = aa.offsetHeight;
    header.style.height = height+i+"px";
  }
  function imgChange(){
    // 대상, 백그라운드이미지, 백그라운드 컬러, 폰트 컬러순
    arguments[0].style.backgroundImage = arguments[1];
    arguments[0].style.backgroundColor = arguments[2];
    arguments[0].style.color = arguments[3];
  }

})