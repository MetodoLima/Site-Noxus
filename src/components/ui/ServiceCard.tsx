import React from 'react';
import { Button } from './button';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  altText: string;
  onButtonClick?: () => void;
  reverse?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  buttonText,
  image,
  altText,
  onButtonClick,
  reverse = false
}) => {
  const content = (
    <div className="w-3/4 md:w-1/3 flex flex-col items-start max-md:items-center max-md:mb-8 px-4 md:px-8">
      <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-4 max-md:text-center">
        {title}
      </h3>
      <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-md:text-center">
        {description}
      </p>
      <Button
        variant="services"
        size="lg"
        onClick={onButtonClick}
        className="rounded-full"
      >
        {buttonText}
      </Button>
    </div>
  );

  const imageElement = (
    <img
      src={image}
      alt={altText}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain shrink-0"
    />
  );

  return (
    <div className={`flex items-center justify-center gap-8 w-full container mx-auto px-4 py-4 flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            {imageElement}
      {content}
    </div>
  );
};
