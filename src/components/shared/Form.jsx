import { useState } from 'react';

// Form component
export const Form = ({ onSubmit, className = '', children, ...props }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {children}
    </form>
  );
};

// Form Input component
export const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-textPrimary dark:text-white mb-1">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border ${
          error ? 'border-accent' : 'border-gray-300 dark:border-gray-700'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
};

// Form Textarea component
export const FormTextarea = ({
  label,
  name,
  placeholder,
  required = false,
  value,
  onChange,
  error,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-textPrimary dark:text-white mb-1">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border ${
          error ? 'border-accent' : 'border-gray-300 dark:border-gray-700'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-y`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
};

// Form Checkbox component
export const FormCheckbox = ({
  label,
  name,
  checked,
  onChange,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-primary bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded focus:ring-primary focus:ring-2"
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-textPrimary dark:text-white">
          {label}
        </label>
        {error && <p className="mt-1 text-sm text-accent">{error}</p>}
      </div>
    </div>
  );
};

// Form Select component
export const FormSelect = ({
  label,
  name,
  options = [],
  required = false,
  value,
  onChange,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-textPrimary dark:text-white mb-1">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border ${
          error ? 'border-accent' : 'border-gray-300 dark:border-gray-700'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
};