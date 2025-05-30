import React from 'react';

export default function Logo({ ...rest }) {
  return (
    <div className="flex items-center" {...rest}>
      <img src="/logo.png" alt="Logo Totebag Bandung 93" className="mr-2" />
      <span>Totebag Bandung 93</span>
    </div>
  );
}
