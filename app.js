const resume = {
  name: "Shua",
  initials: "S",
  email: "yrk0209271@gmail.com",
  github: "https://github.com/yrk0209271-web",
  location: "China",
  availability: "Hello, World.",
  roles: ["Front-end Developer", "UI/UX Learner", "AI Tools Builder"],
  summary:
    "我关注用户体验、工程质量和业务结果之间的平衡，擅长把模糊需求拆成清晰的产品界面、稳定的前端架构和可持续迭代的交付流程。",
  intro:
    "这个简历网站以 Kards 模板的视觉气质为参考，用纯静态 HTML、CSS 和 JavaScript 实现，适合部署到 GitHub Pages，也方便继续替换成真实经历与项目作品。",
  skillsIntro:
    "我把能力重点放在现代 Web 页面、交互体验、工程化习惯和 AI 辅助工作流上，目标是做出清楚、漂亮、可靠的产品界面。",
  resumeLead:
    "下面是当前简历站点中的经历结构。真实公司、学校、项目和时间可以继续在 app.js 顶部集中替换。",
  portfolioLead:
    "项目区先使用本地 CSS 生成封面，不复制第三方模板图片。后续可以替换为真实项目截图和仓库链接。",
  servicesLead:
    "我可以围绕一个想法完成从页面结构、视觉打磨到静态部署的完整闭环。",
  contactNote:
    "如果你正在做一个个人网站、作品集、课程项目或轻量产品原型，欢迎通过邮件或 GitHub 联系我。",
  profile: [
    { label: "Fullname", value: "Shua" },
    { label: "Job", value: "Frontend Developer / Full-stack Learner" },
    { label: "Location", value: "China" },
    { label: "Website", value: "GitHub Pages Resume Site" },
    { label: "Email", value: "yrk0209271@gmail.com" },
  ],
  skillBars: [
    { name: "HTML5", percent: 92 },
    { name: "CSS3", percent: 88 },
    { name: "JavaScript", percent: 84 },
    { name: "Responsive UI", percent: 86 },
    { name: "AI Workflow", percent: 80 },
  ],
  timeline: {
    experience: [
      {
        icon: "01",
        title: "Personal Resume Website",
        period: "2026 - Present",
        org: "GitHub Pages / Static Website",
        description:
          "设计并实现一页式个人简历网站，覆盖首页、简介、技能、经历、项目、服务能力和联系入口，并保持纯静态部署。",
      },
      {
        icon: "02",
        title: "Frontend Product Practice",
        period: "2024 - 2026",
        org: "Personal Projects",
        description:
          "围绕产品界面、响应式布局和可维护样式进行实践，沉淀组件化思维、页面信息层级和交互体验细节。",
      },
    ],
    education: [
      {
        icon: "ED",
        title: "Your School / Major",
        period: "请替换为真实时间",
        org: "Education Background",
        description:
          "这里可以填写学校、专业、课程方向、竞赛、论文、社团或与目标岗位相关的学习经历。",
      },
      {
        icon: "AW",
        title: "Certificates / Awards",
        period: "请替换为真实信息",
        org: "Growth Evidence",
        description:
          "建议保留最能证明能力的两到三项证书、奖项或开源贡献，避免把页面变成流水账。",
      },
    ],
  },
  projects: [
    {
      name: "个人简历网站",
      type: "Portfolio",
      description:
        "Kards 风格的一页式个人简历站点，支持 GitHub Pages 静态部署、移动端适配和打印为 PDF。",
      tags: ["HTML", "CSS", "GitHub Pages"],
      link: "https://github.com/yrk0209271-web",
      colors: ["#ff0077", "#313131"],
    },
    {
      name: "数据可视化面板",
      type: "Dashboard",
      description:
        "用于展示指标、趋势和状态的轻量面板项目，可替换为真实课程项目、竞赛作品或业务工具。",
      tags: ["Dashboard", "Charts", "Product"],
      link: "https://github.com/yrk0209271-web",
      colors: ["#2b5876", "#4e4376"],
    },
    {
      name: "AI 工作流工具",
      type: "Automation",
      description:
        "把资料整理、报告生成或页面搭建流程自动化，减少重复劳动并提升个人生产效率。",
      tags: ["AI", "Workflow", "Automation"],
      link: "https://github.com/yrk0209271-web",
      colors: ["#11998e", "#38ef7d"],
    },
  ],
  services: [
    {
      code: "UI",
      title: "Web Design",
      description: "从页面结构、视觉节奏和响应式布局出发，把个人品牌与作品内容组织得更清楚。",
    },
    {
      code: "FE",
      title: "Web Development",
      description: "用纯静态技术实现快速、稳定、易维护的页面，适合 GitHub Pages 等轻量部署。",
    },
    {
      code: "AI",
      title: "AI Workflow",
      description: "把重复任务变成可复用流程，让资料整理、内容生成和页面迭代更高效。",
    },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/yrk0209271-web" },
    { label: "Email", href: "mailto:yrk0209271@gmail.com" },
  ],
};

const selectors = {
  menuToggle: document.querySelector("#menuToggle"),
  mainNav: document.querySelector("#mainNav"),
  printButtons: [document.querySelector("#printButton"), document.querySelector("#printButtonSecondary")],
  copyEmailButton: document.querySelector("#copyEmailButton"),
  toast: document.querySelector("#toast"),
};

renderResume();
bindNavigation();
bindActions();
observeSections();

function renderResume() {
  document.querySelectorAll("[data-field]").forEach((element) => {
    const key = element.dataset.field;
    if (resume[key] !== undefined) {
      element.textContent = resume[key];
    }
  });

  document.querySelector("#currentYear").textContent = new Date().getFullYear();
  document.querySelectorAll("[data-link='email']").forEach((link) => {
    link.href = `mailto:${resume.email}`;
  });
  document.querySelectorAll("[data-link='github']").forEach((link) => {
    link.href = resume.github;
  });

  renderRoles();
  renderProfile();
  renderSkills();
  renderTimeline("#experienceTimeline", resume.timeline.experience);
  renderTimeline("#educationTimeline", resume.timeline.education);
  renderProjects();
  renderServices();
  renderSocialLinks("#introSocial");
  renderSocialLinks("#footerSocial");
}

function renderRoles() {
  const target = document.querySelector("#introPositions");
  target.innerHTML = resume.roles.map((role) => `<span>${escapeHtml(role)}</span>`).join("");
}

function renderProfile() {
  const target = document.querySelector("#profileList");
  target.innerHTML = resume.profile
    .map((item) => {
      return `
        <li>
          <strong>${escapeHtml(item.label)}:</strong>
          <span>${escapeHtml(item.value)}</span>
        </li>
      `;
    })
    .join("");
}

function renderSkills() {
  const target = document.querySelector("#skillBars");
  target.innerHTML = resume.skillBars
    .map((skill) => {
      const percent = clamp(skill.percent, 0, 100);

      return `
        <li>
          <strong>${escapeHtml(skill.name)}</strong>
          <div class="progress" style="--percent: ${percent}%">
            <span>${percent}%</span>
          </div>
        </li>
      `;
    })
    .join("");
}

function renderTimeline(selector, items) {
  const target = document.querySelector(selector);
  target.innerHTML = items
    .map((item) => {
      return `
        <article class="timeline-block">
          <div class="timeline-ico">${escapeHtml(item.icon)}</div>
          <div class="timeline-header">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.period)}</p>
          </div>
          <div class="timeline-content">
            <h4>${escapeHtml(item.org)}</h4>
            <p>${escapeHtml(item.description)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProjects() {
  const target = document.querySelector("#projectGrid");
  target.innerHTML = resume.projects
    .map((project, index) => {
      const number = String(index + 1).padStart(2, "0");
      const [coverA, coverB] = project.colors;

      return `
        <article class="portfolio-card">
          <a class="portfolio-cover" href="${escapeAttribute(project.link)}" target="_blank" rel="noreferrer" data-index="${number}" style="--cover-a: ${escapeAttribute(coverA)}; --cover-b: ${escapeAttribute(coverB)}" aria-label="查看 ${escapeAttribute(project.name)}"></a>
          <div class="portfolio-body">
            <div class="tag-row">
              ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <a class="project-link" href="${escapeAttribute(project.link)}" target="_blank" rel="noreferrer">${escapeHtml(project.type)} / View Project</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderServices() {
  const target = document.querySelector("#serviceList");
  target.innerHTML = resume.services
    .map((service) => {
      return `
        <article class="service-card">
          <span class="service-icon">${escapeHtml(service.code)}</span>
          <h3>${escapeHtml(service.title)}</h3>
          <p>${escapeHtml(service.description)}</p>
        </article>
      `;
    })
    .join("");
}

function renderSocialLinks(selector) {
  const target = document.querySelector(selector);
  target.innerHTML = resume.socialLinks
    .map((link) => {
      return `
        <li>
          <a href="${escapeAttribute(link.href)}" ${link.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(link.label)}</a>
        </li>
      `;
    })
    .join("");
}

function bindNavigation() {
  selectors.menuToggle.addEventListener("click", () => {
    const isOpen = selectors.mainNav.classList.toggle("is-open");
    selectors.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      const target = id && id.length > 1 ? document.querySelector(id) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      selectors.mainNav.classList.remove("is-open");
      selectors.menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindActions() {
  selectors.printButtons.forEach((button) => {
    button?.addEventListener("click", () => window.print());
  });

  selectors.copyEmailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(resume.email);
      showToast("邮箱已复制");
    } catch (error) {
      showToast(resume.email);
    }
  });
}

function observeSections() {
  const navLinks = [...document.querySelectorAll("#mainNav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.65] }
  );

  sections.forEach((section) => observer.observe(section));
}

function showToast(message) {
  selectors.toast.textContent = message;
  selectors.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    selectors.toast.classList.remove("show");
  }, 2200);
}

function clamp(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.min(max, Math.max(min, Math.round(number)));
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
