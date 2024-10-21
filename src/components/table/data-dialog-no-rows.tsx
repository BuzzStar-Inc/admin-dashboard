import React from 'react';
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

interface DialogNoRowsProps {
  open: boolean
  onOpenChange: (_arg0: boolean) => void
}

const DialogNoRows: React.FC<DialogNoRowsProps> = ({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className=''>
      <DialogHeader>
        <DialogTitle>No Rows Selected</DialogTitle>
        <DialogDescription>
          Please select one or more rows to export.
        </DialogDescription>
      </DialogHeader>
      <div className='flex justify-end'>
        <Button onClick={() => onOpenChange(false)}>OK</Button>
      </div>
    </DialogContent>
  </Dialog>
);

DialogNoRows.displayName = 'DialogNoRows';

export { DialogNoRows };
