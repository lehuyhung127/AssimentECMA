const app = document.querySelector("#app");
import AboutmePage from "./pages/AboutmePage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import { render, router } from './utilities';

router.on("/", () => render(HomePage, app));
router.on("/projects", () => render(ProjectsPage,app));
// router.on("/aboutme", () => render(AboutmePage,app));
router.on("/contact", () => render(Contact, app));

router.resolve();