import { useSubmit } from 'react-router-dom' 
import Button from './Button'
import Input from './Input'

import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseMake, chooseModel, chooseColor, chooseYear } from '../redux/slices/RootSlice';


interface ContactFormProps {
    id?: string[];
    onClose: () => void
}

const ContactForm = ( props:ContactFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch(); 
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data).then(() => {
                console.log('Update Successful')
            })
            .catch((error) => {
                console.log('Update Failed:', error);
            })
            console.log(`Updated: ${ data.first } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseName(data.car_name));
            dispatch(chooseMake(data.car_make));
            dispatch(chooseModel(data.car_model));
            dispatch(chooseYear(data.car_year));
            dispatch(chooseColor(data.car_color));

            server_calls.create(store.getState()).then(() => {
                console.log('Create Successful')
            })
            .catch((error) => {
                console.log('Create Failed:', error);
            })
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()

            props.onClose();
            
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Car Make</label>
                    <Input {...register('car_make')} name='car_make' placeholder='Car Make' />
                </div>
                <div>
                    <label htmlFor="name">Car Model</label>
                    <Input {...register('car_model')} name='car_model' placeholder='Car Model' />
                </div>
                <div>
                    <label htmlFor="color">Car Color</label>
                    <Input {...register('car_color')} name='car_color' placeholder='Car Color' />
                </div>
                <div>
                    <label htmlFor="year">Car Year</label>
                    <Input {...register('car_year')} name='car_year' placeholder='Car Year' />
                </div>
                <div>
                    <label htmlFor="owner">Car Owner</label>
                    <Input {...register('car_name')} name='car_name' placeholder='Car Owner' />
                </div>
                    <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
                        Submit
                    </Button>
            </form>
        </div>
    )
}

export default ContactForm