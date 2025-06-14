import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";

type Props = {
  children: (slotProps: { isOpen: boolean; close: () => void }) => React.ReactNode;
}

export default function APopupProxy({children}: Props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  
  const handleClose = () => {
    setIsOpenDialog(false);
  };

  return (
    // @todo: create a components
    // If size <= md, open dialog
    // Otherwise, open dropdown
    <>
      <Popover className="relative">
        {({ open, close }) => (
          <>
            { children({isOpen: open, close, }) }
          </>
        )}
      </Popover>
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle>Deactivate account order</DialogTitle>

          </DialogPanel>
        </div>
      </Dialog> */}
    </>
  )
}
