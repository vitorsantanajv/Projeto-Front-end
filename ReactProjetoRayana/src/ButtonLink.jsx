// ButtonLink.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonLink({ label, target }) {
  const navigate = useNavigate();

  return (
    <button className="button" onClick={() => navigate(target)}>
      {label}
    </button>
  );
}

export default ButtonLink;
