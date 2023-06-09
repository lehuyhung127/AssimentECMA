const app = document.querySelector("#app");
import AboutmePage from "./pages/AboutmePage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";

import { render, router } from './utilities';

router.on("/", () => render(HomePage, app));
router.on("/projects", () => render(ProjectsPage,app));
router.on("/contact", () => render(Contact,app));
router.on("/aboutme", () => render(AboutmePage,app));
router.on("/projects/:id", ({data}) => render(() => ProjectDetail(data.id),app));

router.resolve();