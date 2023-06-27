import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

function DataTable() {
    let [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)

    }

    return (
        <>
            <Modal 
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row">
                <div>
                    <button
                        className='p-3 bg-slate-700 rounded m-2 text-white hover:bg-slate-800 '
                        onClick={() => handleOpen()}>
                        Add New Car
                    </button>
                </div>
                <Button className="p-3 bg-slate-700 text-white rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
                <Button className="p-3 bg-slate-700 text-white rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
            </div>
        </>
    )
}

export default DataTable;
