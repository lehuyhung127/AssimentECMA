export const SectionLoremHomepage = () => {
    return `
    <section class="lorem__ipsum mt-[157px]">
        <div class="section__lorem__ipsum flex justify-between">
          <div class="lorem--ispum--letsbegin">
            <h2 class="lorrem--ispum--title text-center not-italic font-semibold text-[35px] leading-4 text-white leading-4">
              Lorem ipsum dolor sit amet
            </h2>
            <p class="lorrem--ispum--desc ml-[200px] not-italic font-medium text-[20px] text-slate-400 my-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="btn__letbegin text-center">
              <button class="btn--primary py-3 px-10 border-none rounded-full">Let's begin</button>
            </div>
          </div>
          <div class="lorem--ispum--hiddenpicture">
            <img srcset="./image/drawing.png 2x" alt="" class="imgfluid" />
          </div>
        </div>
      </section>
    `
}