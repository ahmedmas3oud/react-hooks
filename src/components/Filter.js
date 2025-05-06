import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) =>
          setFilter((prev) => ({
            ...prev,
            rating: parseFloat(e.target.value) || 0,
          }))
        }
      />
    </div>
  );
};

export default Filter;
