import React from 'react';

const ShortStudentProfile = ({name, course, university, year}) => {
  return (
    <div>
      <img src="#" />
      <h3>{name}{course}{university}{year}</h3>
    </div>
  )
}

export default ShortStudentProfile;
