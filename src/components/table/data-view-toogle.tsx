import React from 'react';
interface ViewToggleProps {
  viewType: 'list' | 'grid'
  setViewType: (_type: 'list' | 'grid') => void
}

const DataViewToggle: React.FC<ViewToggleProps> = ({
  viewType,
  setViewType
}) => (
  <div className='flex items-center justify-center w-[7.75rem] h-[2rem] bg-transparent border border-gray rounded-full p-[0.05rem]'>
    <button
      className={`flex-1 h-[1.75rem] rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
        viewType === 'list' ? 'bg-gray-light ' : 'bg-transparent '
      }`}
      onClick={() => setViewType('list')}
    >
      List
    </button>
    <button
      className={`flex-1 h-[1.75rem] rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
        viewType === 'grid' ? 'bg-gray-light' : 'bg-transparent'
      }`}
      onClick={() => setViewType('grid')}
    >
      Grid
    </button>
  </div>
);

DataViewToggle.displayName = 'DataViewToogle';

export { DataViewToggle };
