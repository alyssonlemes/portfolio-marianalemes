import React from 'react';

interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
}

export const SEOHeading: React.FC<SEOHeadingProps> = ({ 
  level, 
  children, 
  className = '', 
  id,
  itemProp,
  itemScope,
  itemType
}) => {
  const baseClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl font-bold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium'
  };

  const headingClass = `${baseClasses[level]} ${className}`;
  const props = {
    className: headingClass,
    id,
    ...(itemProp && { itemProp }),
    ...(itemScope && { itemScope }),
    ...(itemType && { itemType })
  };

  switch (level) {
    case 1:
      return <h1 {...props}>{children}</h1>;
    case 2:
      return <h2 {...props}>{children}</h2>;
    case 3:
      return <h3 {...props}>{children}</h3>;
    case 4:
      return <h4 {...props}>{children}</h4>;
    case 5:
      return <h5 {...props}>{children}</h5>;
    case 6:
      return <h6 {...props}>{children}</h6>;
    default:
      return <h1 {...props}>{children}</h1>;
  }
};

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.name}
              </span>
            ) : (
              <a 
                href={item.href} 
                className="hover:text-primary-600 transition-colors"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
