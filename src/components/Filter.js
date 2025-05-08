import React from 'react';

const Filter = ({ setFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: name === "rating" ? Number(value) : value }));
  };

  return (
    <div>
      <input name="title" placeholder="Search by title" onChange={handleChange} />
      <input name="rating" type="number" placeholder="Min rating" onChange={handleChange} />
    </div>
  );
};

export default Filter;
