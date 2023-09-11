import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const TablePage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Table</h2>
      </div>
      {/* End Title */}

      {/* Table */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Table
        </p>
        <ViewComponent>
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Thornton</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<table className="table w-full">
    <thead>
        <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th>3</th>
            <td>Thornton</td>
            <td>@twitter</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
`}
        />
      </section>
      {/* End Table */}

      {/* Table */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Table Hover
        </p>
        <ViewComponent>
          <table className="table table-hovered w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Thornton</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<table className="table w-full">
    <thead>
        <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th>3</th>
            <td>Thornton</td>
            <td>@twitter</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
`}
        />
      </section>
      {/* End Table */}

      {/* Table */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Table Zebra
        </p>
        <ViewComponent>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Thornton</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<table className="table table-zebra w-full">
    <thead>
        <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th>3</th>
            <td>Thornton</td>
            <td>@twitter</td>
            <td>@twitter</td>
        </tr>
        <tr>
            <th>4</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th>5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
    </tbody>
</table>
`}
        />
      </section>
      {/* End Table */}
    </LayoutContent>
  );
};

export default TablePage;
