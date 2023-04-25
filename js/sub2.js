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

  // top
  // 클릭하면 스크롤이 0 
  const toTop = document.querySelector("#footer .btns");

  toTop.children[1].addEventListener("click", e=>{
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth"
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
})