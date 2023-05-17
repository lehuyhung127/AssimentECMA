const Header = () => {
    return `
    <div class="flex justify-between items-center py-3">
    <a href="" class="no-underline text-xl"><img srcset="../public/image/logo.png 2x" alt="" class=""></a>
    <ul class="list--menu list-none flex space-x-4 text-xl text-white">
    <li><a href="" class="menu--link no-underline">Project</a></li>
    <li><a href="" class="menu--link no-underline">Technologies</a></li>
    <li><a href="" class="menu--link no-underline">About me</a></li>
    </ul>
    <div class="contact">
    <ul class="list--menu list-none flex space-x-4 text-xl text-white">
    <li><a href="" class="menu--link no-underline"><iconify-icon icon="mdi:github"></iconify-icon></a></li>
    <li><a href="" class="menu--link no-underline"><iconify-icon icon="mdi:linkedin"></iconify-icon></a></li>
    <li><a href="" class="menu--link no-underline"><iconify-icon icon="ph:figma-logo"></iconify-icon></a></li>
    </ul>
    </div>
    </div>
    `
}
export default Header;