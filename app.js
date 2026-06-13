const resume = {
  name: "Shua",
  initials: "S",
  role: "前端开发 / 全栈工程师",
  tagline: "把复杂系统做成清楚、可靠、好用的产品体验。",
  availability: "Open to remote / hybrid roles",
  location: "China",
  specialty: "Frontend, Product, AI Tools",
  currentFocus: "专注于现代 Web、产品体验与工程效率。",
  email: "yrk0209271@gmail.com",
  phone: "+86 000 0000 0000",
  github: "https://github.com/yrk0209271-web",
  linkedin: "",
  summary:
    "我关注用户体验、工程质量和业务结果之间的平衡，擅长把模糊需求拆成清晰的产品界面、稳定的前端架构和可持续迭代的交付流程。",
  intro:
    "这个简历网站已经按 GitHub Pages 的静态站点方式组织。你只需要在 app.js 顶部替换真实经历、项目、邮箱和链接，就能得到一份可在线访问、可打印成 PDF 的个人简历。",
  contactNote:
    "欢迎通过邮件或社交链接联系我。无论是产品原型、前端工程、数据可视化，还是 AI 工具落地，我都愿意一起把想法推进到可用、好看、可靠。",
  heroHighlights: ["响应式设计", "GitHub Pages Ready", "可打印 PDF", "数据驱动内容"],
  metrics: [
    { value: "4+", label: "核心能力模块：前端、产品、工程效率、AI 工具" },
    { value: "100%", label: "静态部署，无后端依赖，适合 GitHub Pages" },
    { value: "1 min", label: "集中修改 app.js 顶部资料即可更新站点" },
    { value: "A11y", label: "语义化结构、键盘可达、深浅色主题" },
  ],
  values: ["清晰表达", "可靠交付", "审美细节"],
  skills: [
    {
      title: "前端工程",
      description: "构建响应式界面、组件系统和高质量交互体验，关注性能、可维护性与可访问性。",
      tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    },
    {
      title: "产品与设计",
      description: "从目标用户和核心任务出发整理页面信息层级，让视觉设计服务于真实使用场景。",
      tags: ["UX", "Design System", "Prototyping", "Visual Polish"],
    },
    {
      title: "工具与自动化",
      description: "用脚本和 AI 工作流减少重复劳动，把日常任务沉淀为更稳定的工具和流程。",
      tags: ["Automation", "AI Tools", "GitHub", "Workflow"],
    },
  ],
  experience: [
    {
      period: "2026 - Present",
      title: "个人简历网站搭建",
      org: "GitHub Pages / Static Website",
      points: [
        "设计并实现一页式个人简历网站，覆盖简介、技能、经历、项目、教育和联系入口。",
        "将简历内容集中在数据对象中维护，降低后续更新成本。",
        "加入深浅色主题、打印 PDF、复制邮箱、滚动高亮和移动端导航等细节。",
      ],
    },
    {
      period: "2024 - 2026",
      title: "前端项目与产品实践",
      org: "请替换为你的公司、学校或个人项目",
      points: [
        "负责从需求梳理到界面实现的完整闭环，交付清晰、稳定的用户体验。",
        "沉淀组件、页面规范和交互模式，让后续迭代更高效。",
      ],
    },
  ],
  projects: [
    {
      name: "个人简历网站",
      description: "一个精致的响应式简历站点，适合部署到 GitHub Pages，支持在线展示和打印为 PDF。",
      tags: ["Portfolio", "GitHub Pages", "Responsive"],
      link: "https://github.com/yrk0209271-web",
    },
    {
      name: "数据可视化面板",
      description: "展示指标、趋势和状态的轻量化面板项目。可替换为你的真实项目、竞赛或课程作品。",
      tags: ["Dashboard", "Charts", "Product"],
      link: "https://github.com/yrk0209271-web",
    },
    {
      name: "AI 工作流工具",
      description: "把重复性的资料整理、报告生成或页面搭建流程自动化，提升个人生产效率。",
      tags: ["AI", "Automation", "Workflow"],
      link: "https://github.com/yrk0209271-web",
    },
  ],
  education: [
    {
      title: "你的学校 / 专业",
      meta: "请替换为学历、专业、时间",
      description: "可以写课程方向、奖项、论文、社团、实习或与你目标岗位相关的经历。",
    },
    {
      title: "证书 / 奖项 / 开源贡献",
      meta: "请替换为真实信息",
      description: "建议保留最能证明能力的 2 到 3 项内容，避免把简历变成流水账。",
    },
  ],
};

const THEME_KEY = "resume-site-theme";

const selectors = {
  navToggle: document.querySelector("#navToggle"),
  siteNav: document.querySelector("#siteNav"),
  themeToggle: document.querySelector("#themeToggle"),
  printButton: document.querySelector("#printButton"),
  copyEmailButton: document.querySelector("#copyEmailButton"),
  toast: document.querySelector("#toast"),
};

renderResume();
initTheme();
initNavigation();
initActions();
initReveal();
setActiveNavigation();

function renderResume() {
  const textFields = {
    ...resume,
    currentYear: new Date().getFullYear(),
  };

  document.querySelectorAll("[data-field]").forEach((element) => {
    const key = element.dataset.field;
    if (textFields[key] !== undefined) {
      element.textContent = textFields[key];
    }
  });

  document.querySelector("#currentYear").textContent = new Date().getFullYear();

  setLinks();
  renderHeroHighlights();
  renderMetrics();
  renderValues();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
}

function setLinks() {
  const links = {
    email: `mailto:${resume.email}`,
    emailText: `mailto:${resume.email}`,
    github: resume.github,
    linkedin: resume.linkedin,
  };

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const href = links[key];

    if (!href) {
      element.hidden = true;
      element.removeAttribute("href");
      return;
    }

    element.hidden = false;
    element.href = href;

    if (key === "emailText") {
      element.textContent = resume.email;
    }
  });
}

function renderHeroHighlights() {
  const target = document.querySelector("#heroHighlights");
  target.innerHTML = resume.heroHighlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderMetrics() {
  const target = document.querySelector("#metrics");
  target.innerHTML = resume.metrics
    .map((metric) => {
      return `
        <article class="metric-card reveal">
          <span class="metric-value">${escapeHtml(metric.value)}</span>
          <span class="metric-label">${escapeHtml(metric.label)}</span>
        </article>
      `;
    })
    .join("");
}

function renderValues() {
  const target = document.querySelector("#values");
  target.innerHTML = resume.values.map((value) => `<span class="value-chip">${escapeHtml(value)}</span>`).join("");
}

function renderSkills() {
  const target = document.querySelector("#skillGroups");
  target.innerHTML = resume.skills
    .map((skill) => {
      return `
        <article class="skill-card reveal">
          <h3>${escapeHtml(skill.title)}</h3>
          <p>${escapeHtml(skill.description)}</p>
          ${renderTags(skill.tags)}
        </article>
      `;
    })
    .join("");
}

function renderExperience() {
  const target = document.querySelector("#experienceList");
  target.innerHTML = resume.experience
    .map((item) => {
      return `
        <article class="timeline-item reveal">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div>
            <p class="period">${escapeHtml(item.period)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="timeline-meta">${escapeHtml(item.org)}</p>
            ${renderBullets(item.points)}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProjects() {
  const target = document.querySelector("#projectList");
  target.innerHTML = resume.projects
    .map((project, index) => {
      const number = String(index + 1).padStart(2, "0");

      return `
        <article class="project-card reveal">
          <div class="project-top">
            <span class="project-index">${number}</span>
            <a class="project-link" href="${escapeAttribute(project.link)}" target="_blank" rel="noreferrer">查看</a>
          </div>
          <h3>${escapeHtml(project.name)}</h3>
          <p>${escapeHtml(project.description)}</p>
          ${renderTags(project.tags)}
        </article>
      `;
    })
    .join("");
}

function renderEducation() {
  const target = document.querySelector("#educationList");
  target.innerHTML = resume.education
    .map((item) => {
      return `
        <article class="education-card reveal">
          <p class="period">${escapeHtml(item.meta)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `;
    })
    .join("");
}

function renderTags(tags) {
  return `
    <div class="tag-row">
      ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
    </div>
  `;
}

function renderBullets(points) {
  return `
    <ul class="bullet-list">
      ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
    </ul>
  `;
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || preferred);

  selectors.themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  selectors.themeToggle.textContent = theme === "dark" ? "深色" : "浅色";
  selectors.themeToggle.setAttribute("aria-label", `当前为${theme === "dark" ? "深色" : "浅色"}主题，点击切换`);
}

function initNavigation() {
  selectors.navToggle.addEventListener("click", () => {
    const isOpen = selectors.siteNav.classList.toggle("is-open");
    selectors.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  selectors.siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      selectors.siteNav.classList.remove("is-open");
      selectors.navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setActiveNavigation() {
  const links = [...selectors.siteNav.querySelectorAll("a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] }
  );

  sections.forEach((section) => observer.observe(section));
}

function initActions() {
  selectors.printButton.addEventListener("click", () => window.print());

  selectors.copyEmailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(resume.email);
      showToast("邮箱已复制");
    } catch (error) {
      showToast(resume.email);
    }
  });
}

function initReveal() {
  const elements = [...document.querySelectorAll(".reveal")];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.9) {
      element.classList.add("is-visible");
      return;
    }

    observer.observe(element);
  });
}

function showToast(message) {
  selectors.toast.textContent = message;
  selectors.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    selectors.toast.classList.remove("show");
  }, 2200);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
