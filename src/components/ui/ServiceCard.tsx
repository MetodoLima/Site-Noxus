import React from 'react';
import { Button } from './Button';

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
    <div className="w-[557px] flex flex-col items-start max-md:w-full max-md:items-center max-md:mb-10">
      <h3 className="w-96 h-[92px] text-[#1D1D1F] text-4xl font-semibold leading-[44px] mb-2.5 max-md:w-full max-md:text-[28px] max-md:h-auto max-md:text-center max-sm:text-[22px]">
        {title}
      </h3>
      <p className="w-[557px] h-[146px] text-[#6E6E73] text-[19px] font-semibold leading-[29px] tracking-[0.231px] mb-3 max-md:w-full max-md:text-base max-md:h-auto max-md:text-center max-sm:text-sm">
        {description}
      </p>
      <Button
        size="md"
        onClick={onButtonClick}
        className="max-sm:w-[220px] max-sm:h-10"
      >
        {buttonText}
      </Button>
    </div>
  );

  const imageElement = (
    <img
      src={image}
      alt={altText}
      className="w-[661px] h-[990px] shrink-0 max-md:w-[400px] max-md:h-auto max-sm:w-[280px]"
    />
  );

  return (
    <div className="flex items-start justify-between w-full max-w-[1624px] mt-0 mb-[317px] mx-auto px-[156px] py-0 max-md:flex-col max-md:items-center max-md:text-center max-md:mb-20 max-md:p-0">
      {reverse ? (
        <>
          {imageElement}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageElement}
        </>
      )}
    </div>
  );
};
