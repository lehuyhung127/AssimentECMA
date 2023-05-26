export const HeaderHomepage = () => {
    return `
    <header ">
        <div class="header--nav flex justify-between items-center px-10 py-2.5 ">
          <div class="">
            <a
              href="/"
              class="logo--link"
              style="display: flex; align-items: center; text-decoration: none"
              ><img
                srcset="./image/logo.png 2x"
                alt=""
                style="margin-right: 15px"
              /><span style="font-size: 20px; color: #fff">Porfolio</span></a
            >
          </div>
          <div class="header--menu">
            <ul class="head--menu--list space-x-4 flex list-none">
              <li><a href="/" class="header--menu--link ml-5 no-underline text-white text-[18px] font-extralight">HOME</a></li>
              <li><a href="/skill" class="header--menu--link ml-5 no-underline text-white text-[18px] font-extralight">SKILL</a></li>
              <li><a href="/aboutme" class="header--menu--link ml-5 no-underline text-white text-[18px] font-extralight">ABOUT</a></li>
              <li><a href="/contact" class="header--menu--link ml-5 no-underline text-white text-[18px] font-extralight">CONTACT</a></li>
            </ul>
          </div>
          <div class="">
            <ul class="head--menu--list flex list-none">
              <li>
                <a href="" class="header--menu--link ml-5 no-underline text-white text-[20px] font-extralight "
                  ><iconify-icon icon="mdi:github"></iconify-icon
                ></a>
              </li>
              <li>
                <a href="" class="header--menu--link ml-5 no-underline text-white text-[20px] font-extralight"
                  ><iconify-icon icon="mdi:linkedin"></iconify-icon
                ></a>
              </li>
              <li>
                <a href="" class="header--menu--link ml-5 no-underline text-white text-[20px] font-extralight"
                  ><iconify-icon icon="ph:figma-logo"></iconify-icon
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    `
}