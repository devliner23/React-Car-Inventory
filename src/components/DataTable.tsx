import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90},
    { field: 'car_name', headerName: 'Car Owner', flex: 1},
    { field: 'car_make', headerName: 'Car Make', flex: 1},
    { field: 'car_model', headerName: 'Car Model', flex: 1},
    { field: 'car_year', headerName: 'Car Year', flex: 1},
    { field: 'car_color', headerName: 'Car Color', flex: 1}
]

function DataTable() {
    let [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)

    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


    return (
        <>
            <Modal 
                id={selectionModel}
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
                <Button onClick={handleOpen} className="p-5 bg-slate-700 text-white rounded mr-3 hover:bg-stone-900 hover:text-white" >Update</Button>
                <Button onClick={deleteData} className="p-5 bg-slate-700 text-white rounded mr-3 hover:bg-stone-900 hover:text-white" >Delete</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%', color: 'white' }}
            >
                <h2 className='p-4 bg-slate-600 my-2 rounded'>My Cars</h2>
                <DataGrid rows={contactData} columns={columns}
                checkboxSelection={true}
                onRowSelectionModelChange={ (item: any) => {
                    setSelectionModel(item)
                }} 
                componentsProps={{
                    pagination: {
                        rowsPerPageOptions: [5]
                    }
                }}
                />
            </div>
        </>
    )
}

export default DataTable;
