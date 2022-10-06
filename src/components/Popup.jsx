import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Popup = (props) => {

    const {title, children,} = props;
    const{openPopup, setOpenPopup} = useStateContext();

  return (
    <Dialog open= {openPopup} PaperProps={{ sx: { width: "100%", height: "80%" } }}>
        <DialogTitle>
            <div className='text-lg'>Create Issue</div>
        </DialogTitle>
        <DialogContent dividers>
            {children}
        </DialogContent>
    </Dialog>
  )
}

export default Popup