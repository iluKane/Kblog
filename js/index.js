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
  const a23 = document.getElementById("a23");
  const linkControlBack = document.getElementById("a241");
  const linkControlNext = document.getElementById("a243");
  const linkControlPageText = document.getElementById("a2421");
  const articles = data.articles;
  let currentIndex = 0;

  articles.forEach(function (article) {
    const a23_ = document.createElement("div");
    a23_.className = "a23_";

    a23_.innerHTML = `
      <div class="a23_1">${article.id}.${article.title}</div>
      <div class="a23_2"><img src="img/type.svg" alt="" /></div>
      <div class="a23_3">${article.type}</div>
      <div class="a23_2"><img src="img/key.svg" alt="" /></div>
      <div class="a23_3">${article.key}</div>
    `;

    a23.appendChild(a23_);
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
    a23.style.transition = "transform 0.2s ease-in-out";
    a23.style.transform = `translateX(${offset}px)`;

    setTimeout(() => {
      a23.style.transition = "none";
    }, 200);

    updatePageText(articles[currentIndex].title);
  }

  function updatePageText(text) {
    a24211.textContent = text;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const backHoverBox = document.querySelector(".a2411");
  const nextHoverBox = document.querySelector(".a2431");

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