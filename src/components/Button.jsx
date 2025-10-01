import Link from 'next/link';
import { classNames } from '@/utils/functions';

export const Button = ({ href, className, variant, ...props }) => {
  let buttonColorStyle =
    'border-salmon hover:text-salmon hover:bg-transparent bg-salmon text-white';

  switch (variant) {
    case 'secondary':
      buttonColorStyle =
        'border-green text-green hover:bg-green hover:text-white';
      break;
    case 'secondaryWhite':
      buttonColorStyle =
        'border-white text-white hover:bg-white hover:text-salmon';
      break;
    default:
      break;
  }

  className = classNames(
    'border border-2 font-semibold py-2 px-8 rounded-md transition-colors duration-500 shadow-md whitespace-nowrap',
    className,
    buttonColorStyle
  );

  return href ? (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={className}
      {...props}
    />
  ) : (
    <button type='button' className={className} {...props} />
  );
};
