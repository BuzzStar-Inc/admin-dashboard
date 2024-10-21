import * as React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const DataTableSearchComponent = (
  { className = '', type, icon = true, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <div className="relative  w-full ">
      {icon &&
        <span className="absolute inset-y-0 left-0 flex items-center pl-3  text-icon">
          <MagnifyingGlassIcon className="text-muted-foreground" />
        </span>}
      <Input
        type={type}
        className={`pl-[2rem] rounded ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
};

DataTableSearchComponent.displayName = 'DataTableSearch';

export const DataTableSearch = React.forwardRef(DataTableSearchComponent);
