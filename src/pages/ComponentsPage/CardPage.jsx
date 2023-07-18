import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";
const CardPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group">
        <div className="absolute -left-12 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Card</h2>
      </div>
      {/* End Title */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Card With Image
        </p>
        <ViewComponent>
          {/* Card */}
          <div className="card w-96 shadow-2xl">
            <figure>
              <img
                src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
                alt="holiday"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nahama Land</h2>
              <p>Maybe i think need some vacation now! can i go now?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Go Now</button>
              </div>
            </div>
          </div>

          {/* End Card */}
        </ViewComponent>
        <CodeSnippet
          type={"html"}
          code={`<div className="card w-96 shadow-2xl">
  <figure>
    <img src="..." alt="..."/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Nahama Land</h2>
    <p>Maybe i think need some vacation now! can i go now?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Go Now</button>
    </div>
  </div>
</div>`}
        />
      </section>
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Card With Badge
        </p>
        <ViewComponent>
          <div className="card w-96 shadow-xl">
            <figure>
              <img
                src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Nahama Land
                <span className="badge badge-secondary">NEW</span>
              </h2>
              <p>Maybe i think need some vacation now! can i go now?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Dubai</div>
              </div>
            </div>
          </div>
        </ViewComponent>

        <CodeSnippet
          type={"html"}
          code={`<div className="card w-96 shadow-xl">
  <figure>
    <img src="..." alt="..."/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Nahama Land
    <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Maybe i think need some vacation now! can i go now?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Dubai</div>
    </div>
  </div>
</div>`}
        />
      </section>
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Card With Bottom Image
        </p>
        <ViewComponent>
          {/* Card */}
          <div className="card w-96 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Nahama Land</h2>
              <p>Maybe i think need some vacation now! can i go now?</p>
            </div>
            <figure>
              <img
                src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
                alt="holiday"
              />
            </figure>
          </div>
          {/* End Card */}
        </ViewComponent>
        <CodeSnippet
          type={"html"}
          code={`<div className="card w-96 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title">Nahama Land</h2>
    <p>Maybe i think need some vacation now! can i go now?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Go Now</button>
    </div>
  </div>
  <figure>
    <img src="..." alt="..."/>
  </figure>
</div>`}
        />
      </section>
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Card Overlay
        </p>
        <ViewComponent>
          {/* Card */}
          <div className="card w-96 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Nahama Land</h2>
              <p>Maybe i think need some vacation now! can i go now?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Go Now</button>
              </div>
            </div>
          </div>
          {/* End Card */}
        </ViewComponent>
        <CodeSnippet
          type={"html"}
          code={`<div className="card w-96 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title">Nahama Land</h2>
    <p>Maybe i think need some vacation now! can i go now?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Go Now</button>
    </div>
  </div>
  <figure>
    <img src="..." alt="..."/>
  </figure>
</div>`}
        />
      </section>
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Card With No Image
        </p>
        <ViewComponent>
          {/* Card */}
          <div className="card w-96 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Nahama Land</h2>
              <p>Maybe i think need some vacation now! can i go now?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Go Now</button>
              </div>
            </div>
          </div>
          {/* End Card */}
        </ViewComponent>
        <CodeSnippet
          type={"html"}
          code={`<div className="card w-96 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title">Nahama Land</h2>
    <p>Maybe i think need some vacation now! can i go now?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Go Now</button>
    </div>
  </div>
  <figure>
    <img src="..." alt="..."/>
  </figure>
</div>`}
        />
      </section>
    </LayoutContent>
  );
};

export default CardPage;
