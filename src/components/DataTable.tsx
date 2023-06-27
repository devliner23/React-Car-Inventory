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
            <div className="flex justify-center mt-4">
                <div>
                    <button
                        className='p-5 bg-slate-700 rounded mr-3 text-white hover:bg-stone-800 '
                        onClick={() => handleOpen()}>
                        Add New Car
                    </button>
                </div>
                <Button className="p-5 bg-slate-700 text-white rounded mr-3 hover:bg-stone-900 hover:text-white" >Update</Button>
                <Button className="p-5 bg-slate-700 text-white rounded mr-3 hover:bg-stone-900 hover:text-white" >Delete</Button>
            </div>
        </>
    )
}

export default DataTable;
