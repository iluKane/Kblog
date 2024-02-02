const linkControlPageText = document.querySelector(
  ".linkControlPageText"
);
const textLength = linkControlPageText.scrollWidth;
const animationDuration = textLength / 100;
linkControlPageText.style.setProperty(
  "--animation-duration",
  `${animationDuration}s`
);

const data = {
  articles: [
    {
      id: "1",
      title: "CSS弹性布局",
      type: "css",
      key: "flex",
    },
    {
      id: "2",
      title: "CSS网格布局",
      type: "css",
      key: "grid",
    },
    {
      id: "3",
      title: "CSS动画",
      type: "css",
      key: "animation",
    },
    {
      id: "4",
      title: "JavaScript基础",
      type: "javascript",
      key: "basic",
    },
    {
      id: "5",
      title: "JavaScript DOM操作",
      type: "javascript",
      key: "dom",
    },
    {
      id: "6",
      title: "React框架入门",
      type: "react",
      key: "intro",
    },
    {
      id: "7",
      title: "React组件开发",
      type: "react",
      key: "components",
    },
    {
      id: "8",
      title: "Vue框架入门",
      type: "vue",
      key: "intro",
    },
    {
      id: "9",
      title: "Vue组件开发",
      type: "vue",
      key: "components",
    },
    {
      id: "10",
      title: "Responsive Web Design",
      type: "web-design",
      key: "responsive",
    },
    {
      id: "11",
      title: "Front-end Build Tools",
      type: "tools",
      key: "build-tools",
    },
    {
      id: "12",
      title: "Version Control with Git",
      type: "git",
      key: "version-control",
    },
  ],
};


document.addEventListener("DOMContentLoaded", function () {
  const linkElement = document.getElementById("linkElement");
  const linkControlBack = document.getElementById("linkControlBack");
  const linkControlNext = document.getElementById("linkControlNext");
  const linkControlPageText = document.getElementById("linkControlPageText");
  const articles = data.articles;
  let currentIndex = 0;

  articles.forEach(function (article) {
    const linkElementBox = document.createElement("div");
    linkElementBox.className = "linkElementBox";

    linkElementBox.innerHTML = `
      <div class="linkElementBoxTitle">${article.id}.${article.title}</div>
      <div class="linkElementBoxTagIcon"><img src="img/type.svg" alt="" /></div>
      <div class="linkElementBoxTagText">${article.type}</div>
      <div class="linkElementBoxTagIcon"><img src="img/key.svg" alt="" /></div>
      <div class="linkElementBoxTagText">${article.key}</div>
    `;

    linkElement.appendChild(linkElementBox);
  });

  updatePageText(articles[currentIndex].title);

  linkControlBack.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      moveLinkElement();
    }
  });

  linkControlNext.addEventListener("click", function () {
    if (currentIndex < articles.length - 1) {
      currentIndex++;
      moveLinkElement();
    }
  });

  function moveLinkElement() {
    const offset = -currentIndex * 150;
    linkElement.style.transition = "transform 0.2s ease-in-out";
    linkElement.style.transform = `translateX(${offset}px)`;

    setTimeout(() => {
      linkElement.style.transition = "none";
    }, 200);

    updatePageText(articles[currentIndex].title);
  }

  function updatePageText(text) {
    linkControlPageText.textContent = text;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const backHoverBox = document.querySelector(".linkControlBackHoverBox");
  const nextHoverBox = document.querySelector(".linkControlNextHoverBox");

  backHoverBox.addEventListener("click", function () {
    this.classList.toggle("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 200);
  });

  nextHoverBox.addEventListener("click", function () {
    this.classList.toggle("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 200);
  });
});

function updateElapsedTime() {
  const targetDate = new Date("2024-02-02T15:24:00");

  const currentDate = new Date();

  const timeDifference = currentDate - targetDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  const elapsedTime = document.getElementById("elapsedTime");
  elapsedTime.innerHTML = `
    <span class="elapsedTimeText">本网站已运行</span>
    <span class="elapsedTimeText">${days}</span>
    <span class="elapsedTimeText">天</span>
    <span class="elapsedTimeText">${hours}</span>
    <span class="elapsedTimeText">小时</span>
    <span class="elapsedTimeText">${minutes}</span>
    <span class="elapsedTimeText">分钟</span>
    <span class="elapsedTimeText">${seconds}</span>
    <span class="elapsedTimeText">秒</span>`;
}
updateElapsedTime();
setInterval(updateElapsedTime, 1000);