import { ChevronLeft16, ChevronRight16 } from "@carbon/icons-react";
import "./pagination.scss";
import React from "react";

export const FivePagePagination = () => {
  return (
    <ul className="pagination">
      <li className="arrow">
        <button>
          <ChevronLeft16 />
        </button>
      </li>
      <li className="number">
        <button>1</button>
      </li>
      <li className="number">
        <button>2</button>
      </li>
      <li className="number">
        <button>3</button>
      </li>
      <li className="number">
        <button>4</button>
      </li>
      <li className="number active">
        <button>5</button>
      </li>
      <li className="arrow">
        <button>
          <ChevronRight16 />
        </button>
      </li>
    </ul>
  );
};

export const DisabledPagination = () => {
  return (
    <ul className="pagination">
      <li className="arrow disabled">
        <button>
          <ChevronLeft16 />
        </button>
      </li>
      <li className="number disabled">
        <button>1</button>
      </li>
      <li className="arrow disabled">
        <button>
          <ChevronRight16 />
        </button>
      </li>
    </ul>
  );
};

export const ActivePagination = () => {
  return (
    <ul className="pagination">
      <li className="arrow">
        <button>
          <ChevronLeft16 />
        </button>
      </li>
      <li className="number active">
        <button>1</button>
      </li>
      <li className="arrow">
        <button>
          <ChevronRight16 />
        </button>
      </li>
    </ul>
  );
};

const PaginationStory = {
  title: "Molecule/Pagination",
};

export default PaginationStory;
