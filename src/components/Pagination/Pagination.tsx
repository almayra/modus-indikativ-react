import React from "react";
import { ChevronLeft16, ChevronRight16 } from "@carbon/icons-react";
import "./pagination.scss";

export const Pagination = () => {
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
      <li className="number active">
        <button>3</button>
      </li>
      <li className="number">
        <button>4</button>
      </li>
      <li className="number">
        <button>5</button>
      </li>
      <li className="arrow disabled">
        <button>
          <ChevronRight16 />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
