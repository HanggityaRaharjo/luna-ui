import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const HeroPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Hero</h2>
      </div>
      {/* End Title */}

      {/* Simple Hero */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Hero
        </p>
        <ViewComponent>
          <div>
            <div className="hero min-h-[20rem]  w-full">
              <div className="hero-content text-center">
                <div>
                  <h1 className="text-5xl font-bold">Hello there</h1>
                  <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, laboriosam optio! Accusamus quidem recusandae nisi
                    explicabo eos, labore amet eius.
                  </p>
                  <button className="btn">Go</button>
                </div>
              </div>
            </div>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div>
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iste, laboriosam optio! Accusamus quidem recusandae nisi
        explicabo eos, labore amet eius.
      </p>
      <button className="btn">Go</button>
    </div>
  </div>
</div>
`}
        />
      </section>
      {/* End Simple Hero */}

      {/* Simple Hero */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Hero With Image
        </p>
        <ViewComponent>
          <div>
            <div className="hero min-h-[20rem]  w-full">
              <div className="flex-col hero-content lg:flex-row">
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                  alt="Tailwind CSS hero component"
                />
                <div>
                  <h1 className="text-5xl font-bold">Hello there</h1>
                  <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, laboriosam optio! Accusamus quidem recusandae nisi
                    explicabo eos, labore amet eius.
                  </p>
                  <button className="btn">Go</button>
                </div>
              </div>
            </div>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="hero min-h-screen">
  <div className="flex-col hero-content lg:flex-row">
  <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component"/>
    <div>
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iste, laboriosam optio! Accusamus quidem recusandae nisi
        explicabo eos, labore amet eius.
      </p>
      <button className="btn">Go</button>
    </div>
  </div>
</div>
`}
        />
      </section>
      {/* End Simple Hero */}

      {/* Simple Hero */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Hero With Reverse Image
        </p>
        <ViewComponent>
          <div>
            <div className="hero min-h-[20rem]  w-full">
              <div className="flex-col hero-content lg:flex-row-reverse">
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                  alt="Tailwind CSS hero component"
                />
                <div>
                  <h1 className="text-5xl font-bold">Hello there</h1>
                  <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, laboriosam optio! Accusamus quidem recusandae nisi
                    explicabo eos, labore amet eius.
                  </p>
                  <button className="btn">Go</button>
                </div>
              </div>
            </div>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="hero min-h-screen">
  <div className="flex-col hero-content lg:flex-row-reverse">
  <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" alt="Tailwind CSS hero component"/>
    <div>
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iste, laboriosam optio! Accusamus quidem recusandae nisi
        explicabo eos, labore amet eius.
      </p>
      <button className="btn">Go</button>
    </div>
  </div>
</div>
`}
        />
      </section>
      {/* End Simple Hero */}

      {/* Simple Hero */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Hero With Overlay Image
        </p>
        <ViewComponent>
          <div
            className="hero min-h-[20rem] rounded w-full relative"
            style={{
              backgroundImage:
                "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
            }}
          >
            <div className="hero-overlay rounded bg-opacity-60 absolute"></div>
            <div className="text-center hero-content text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>{" "}
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>{" "}
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="jsx"
          code={`<div className="hero min-h-[20rem] rounded w-full relative" 
  style={{backgroundImage:"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)"}}>
  <div className="hero-overlay rounded bg-opacity-60 absolute"></div>
  <div className="text-center hero-content text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut
        assumenda excepturi exercitationem quasi. In deleniti eaque
        aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
`}
        />
      </section>
      {/* End Simple Hero */}
    </LayoutContent>
  );
};

export default HeroPage;
