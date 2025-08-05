import React from 'react';

interface FeatureCardProps {
  title: string[];
  image: string;
  altText: string;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  image,
  altText,
  className = '',
  imageClassName = '',
  titleClassName = ''
}) => {
  return (
    <div className={`relative flex flex-col items-center bg-white rounded-[18px] ${className}`}>
      <div className={`text-center text-[27px] font-semibold max-md:w-[90%] max-md:text-xl max-md:h-auto max-sm:text-base ${titleClassName}`}>
        {title.map((line, index) => (
          <div
            key={index}
            className={index % 2 === 1 ? 'text-[rgba(29,29,31,1)] font-bold' : 'text-[rgba(110,110,115,1)] font-bold'}
          >
            {line}
          </div>
        ))}
      </div>
      <img
        src={image}
        alt={altText}
        className={imageClassName}
      />
    </div>
  );
};
