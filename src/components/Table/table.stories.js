import React from "react";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableFooter } from "./TableFooter";
import { TableHead } from "./TableHead";
import { TableHeadCell } from "./TableHeadCell";
import { TableRow } from "./TableRow";
import { ChevronDown16, Document16 } from "@carbon/icons-react";
import Metadata from "../Typography/Metadata";
import { Pagination } from "../Pagination/Pagination";

export const TableBasic = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeadCell accent append={<ChevronDown16 />}>
          Column Header
        </TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell bold>Primary String</TableCell>
        <TableCell>Cell String</TableCell>
        <TableCell>Cell String</TableCell>
        <TableCell>Cell String</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableCell colSpan={10}>
        <Pagination />
      </TableCell>
    </TableFooter>
  </Table>
);

export const TableDark = () => (
  <Table>
    <TableHead dark>
      <TableRow>
        <TableHeadCell accent append={<ChevronDown16 />}>
          Column Header
        </TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString bold>
              Primary String
            </TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString>Cell String</TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString>Cell String</TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString>Cell String</TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableCell colSpan={10}>
        <Pagination />
      </TableCell>
    </TableFooter>
  </Table>
);

export const TableBordered = () => (
  <Table bordered>
    <TableHead>
      <TableRow>
        <TableHeadCell accent append={<ChevronDown16 />}>
          Column Header
        </TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString bold prepend={<Document16 />}>
              Primary String
            </TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString prepend={<Document16 />}>
              Cell String
            </TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString prepend={<Document16 />}>
              Cell String
            </TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
        <TableCell>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TableCell dualString prepend={<Document16 />}>
              Cell String
            </TableCell>
            <Metadata variant="02">Secondary Cell</Metadata>
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableCell colSpan={10}>
        <Pagination />
      </TableCell>
    </TableFooter>
  </Table>
);

export const TableBorderedDark = () => (
  <Table bordered>
    <TableHead dark>
      <TableRow>
        <TableHeadCell accent append={<ChevronDown16 />}>
          Column Header
        </TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
        <TableHeadCell accent>Column Header</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell bold prepend={<Document16 />}>
          Primary String
        </TableCell>
        <TableCell prepend={<Document16 />}>Cell String</TableCell>
        <TableCell prepend={<Document16 />}>Cell String</TableCell>
        <TableCell prepend={<Document16 />}>Cell String</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableCell colSpan={10}>
        <Pagination />
      </TableCell>
    </TableFooter>
  </Table>
);

const TableStory = {
  title: "Empofarm/Organism/Table",
};

export default TableStory;
