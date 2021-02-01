import React from "react";
import "./breadcrumb.scss";

interface IBreadcrumb {
  inputLabel: string;
}

export const Breadcrumb = ({ inputLabel }: IBreadcrumb) => {
  return (
    <div>
      <ul className="breadcrumbs">
        <li className="breadcrumbs-item">
          <a href="/" className="breadcrumbs-links">
            {inputLabel}
          </a>
        </li>
        <li className="breadcrumbs-item">
          <a href="/" className="breadcrumbs-links">
            {inputLabel}
          </a>
        </li>
        <li className="breadcrumbs-item">
          <a href="/" className="breadcrumbs-links">
            {inputLabel}
          </a>
        </li>
        <li className="breadcrumbs-item">
          <a href="/" className="breadcrumbs-links-active">
            {inputLabel}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
