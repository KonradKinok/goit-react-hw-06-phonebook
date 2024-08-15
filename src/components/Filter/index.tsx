import React, { ChangeEvent } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'
import scss from "./Filter.module.scss"

interface FilterProps {
  filter: string;
  onFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<FilterProps> = ({ filter, onFilterChange }) => {

    const searchId = nanoid();
    return (
        <div className={scss.containerFilter}>
            <label htmlFor={searchId}>Find contact</label>
            <input
                type="text"
                id={searchId}
                name="filter"
                value={filter}
                onChange={onFilterChange}
            />
        </div>
    );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;