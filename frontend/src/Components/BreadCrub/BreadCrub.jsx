import React from 'react';

const BreadCrub = ({ breadcrumbs, currentPath }) => {
  // Find the index of the current route in the breadcrumb data
  const currentIndex = breadcrumbs.findIndex((breadcrumb) => breadcrumb.path === currentPath);

  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index}>
          <a
            href={breadcrumb.path}
            className={`text-gray-600 ${currentIndex === index ? 'font-bold' : ''}`}
          >
            {breadcrumb.label}
          </a>
          {index < breadcrumbs.length - 1 && (
            <span className="mx-5 text-gray-500 rtl:-scale-x-100">
              {/* Your separator, e.g., the arrow */}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrub;
