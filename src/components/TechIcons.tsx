import React from 'react';

interface TechIconProps {
  className?: string;
}

export const PythonIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M11.9 2C8.6 2 6.5 3.4 6.5 4.9V7.1H12.1V7.9H3.7C2.2 7.9 1 9.1 1 10.6C1 12.1 2.2 13.3 3.7 13.3H5V11.8C5 10.4 6.1 9.3 7.5 9.3H13.2C14.7 9.3 15.8 8.2 15.8 6.7V3.5C15.8 2.6 14.1 2 11.9 2ZM9.3 3.5C9.9 3.5 10.4 4 10.4 4.6C10.4 5.2 9.9 5.7 9.3 5.7C8.7 5.7 8.2 5.2 8.2 4.6C8.2 4 8.7 3.5 9.3 3.5Z"
      fill="#387EB8"
    />
    <path
      d="M12.1 22C15.4 22 17.5 20.6 17.5 19.1V16.9H11.9V16.1H20.3C21.8 16.1 23 14.9 23 13.4C23 11.9 21.8 10.7 20.3 10.7H19V12.2C19 13.6 17.9 14.7 16.5 14.7H10.8C9.3 14.7 8.2 15.8 8.2 17.3V20.5C8.2 21.4 9.9 22 12.1 22ZM14.7 20.5C14.1 20.5 13.6 20 13.6 19.4C13.6 18.8 14.1 18.3 14.7 18.3C15.3 18.3 15.8 18.8 15.8 19.4C15.8 20 15.3 20.5 14.7 20.5Z"
      fill="#FFE052"
    />
  </svg>
);

export const DjangoIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#092E20" />
    <path
      d="M11 6H13V15C13 16.5 12.2 17.5 10.5 17.5C9.5 17.5 8.7 17.1 8.2 16.7L8.9 15.2C9.3 15.5 9.8 15.8 10.4 15.8C11.1 15.8 11.4 15.3 11.4 14.4V6H11Z"
      fill="#44B78B"
    />
    <path
      d="M14.5 9.5H16.5V17.5H14.5V9.5Z"
      fill="white"
    />
    <circle cx="15.5" cy="7.5" r="1.1" fill="white" />
  </svg>
);

export const AwsIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M18.8 14.8C18.2 15.4 16.7 16.5 14.2 17C11.4 17.5 8.7 17.1 6.3 15.8C5.9 15.6 5.3 15.9 5.6 16.3C7.2 18.3 9.9 19.2 12.7 19.2C15.1 19.2 17.6 18.3 19.5 16.8C20 16.4 19.5 15.7 18.8 14.8Z"
      fill="#FF9900"
    />
    <path
      d="M19.9 15.8C19.6 15.4 18.1 15.2 17.2 15.4C16.8 15.5 16.7 15.9 17.1 16.2C18.2 16.9 19.3 17.2 19.6 17C19.9 16.8 20.1 16.2 19.9 15.8Z"
      fill="#FF9900"
    />
    <path
      d="M7.7 8.3L6.4 12.8H8.5L9.3 9.9L10.1 12.8H12.2L10.9 8.3H7.7Z"
      fill="#232F3E"
    />
    <path
      d="M12.5 12.8L13.8 8.3H15.2L16 11.5L16.8 8.3H18.2L16.9 12.8H15.3L14.6 9.8L13.9 12.8H12.5Z"
      fill="#232F3E"
    />
  </svg>
);

export const SqlIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00b4d8" strokeWidth="1.8" />
    <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke="#00b4d8" strokeWidth="1.8" />
    <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke="#00b4d8" strokeWidth="1.8" />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      transform="rotate(60 12 12)"
      stroke="#61DAFB"
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      transform="rotate(120 12 12)"
      stroke="#61DAFB"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

export const TailwindIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 6C9 6 7.5 7.5 7.5 10.5C8.25 9.375 9.188 8.813 10.313 8.813C11.625 8.813 12.375 9.75 13.125 10.688C14.344 12.21 15.656 13.5 18 13.5C21 13.5 22.5 12 22.5 9C21.75 10.125 20.813 10.688 19.688 10.688C18.375 10.688 17.625 9.75 16.875 8.813C15.656 7.29 14.344 6 12 6ZM6 12C3 12 1.5 13.5 1.5 16.5C2.25 15.375 3.188 14.813 4.313 14.813C5.625 14.813 6.375 15.75 7.125 16.688C8.344 18.21 9.656 19.5 12 19.5C15 19.5 16.5 18 16.5 15C15.75 16.125 14.813 16.688 13.688 16.688C12.375 16.688 11.625 15.75 10.875 14.813C9.656 13.29 8.344 12 6 12Z"
      fill="#38BDF8"
    />
  </svg>
);

export const RubyIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 3L2 9L12 21L22 9L18 3H6Z" fill="#CC342D" />
  </svg>
);

export const RailsIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#D30001" />
  </svg>
);

export const PostgresIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="10" fill="#336791" />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22 13C21.7 13 21 12.3 20 12.3H4C2 12.3 2 15 2 15C2 18 4.5 20.5 10 20.5C16.5 20.5 21.5 16.5 22 13Z" fill="#2496ED" />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#D82C20" />
  </svg>
);
