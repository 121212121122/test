const cubeE2 = document.querySelector(".Cube");

let clickX2 = 0;
let clickY2 = 0;

let moveX2 = 0;
let moveY2 = 0;

let lastX2 = -20;
let lastY2 = 20;


///////////////////
// 마우스 클릭 이벤트 //
///////////////////

cubeE2.addEventListener("mousedown", (e) => {
  let isClick2 = true;

  clickX2 = e.screenX;
  clickY2 = e.screenY;

  window.addEventListener("mousemove", (e) => {
    if (isClick2) {
      const nowX2 = e.screenX;
      const nowY2 = e.screenY;

      moveX2 = (lastX2 + clickY2 - nowY2);
      moveY2 = (lastY2 - clickX2 + nowX2);

      console.log(`X 회전각 : ${moveX2}
Y 회전각 : ${moveY2}`);

      gsap.to(cubeE2, 0, {
        transform: `rotateX(${moveX2}deg) rotateY(${moveY2}deg)`,
      });
    }
  });

  window.addEventListener(
    "mouseup",
    (e) => {
      if (isClick2) {
        lastX2 = moveX2;
        lastY2 = moveY2;
        isClick2 = false;
      }
    },
    { once: true }
  );
});


///////////////////
//   터치 이벤트    //
///////////////////

cubeE2.addEventListener(
  "touchstart",
  (e) => {
    let isTouch2 = true;

    clickX2 = e.targetTouches[0].screenX;
    clickY2 = e.targetTouches[0].screenY;

    window.addEventListener("touchmove", (e) => {
      if (isTouc2h) {
        const nowX2 = e.targetTouches[0].screenX;
        const nowY2 = e.targetTouches[0].screenY;

        moveX2 = lastX2 + clickY2 - nowY2;
        moveY2 = lastY2 - clickX2 + nowX2;

        console.log(`X 회전각 : ${moveX2}
Y 회전각 : ${moveY2}`);

        gsap.to(cubeE2, 0, {
          transform: `rotateX(${moveX2}deg) rotateY(${moveY2}deg)`,
        });
      }
    });

    window.addEventListener(
      "touchend",
      (e) => {
        if (isTouch2) {
          lastX2 = moveX2;
          lastY2 = moveY2;
          isTouch2 = false;
        }
      },
      { once: true }
    );
  },
  false
);