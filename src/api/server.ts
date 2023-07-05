const token = '7f5942381fe840c7d32769d98b8f2f0e6dc48bf3fd21de46'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://car-inventory-rtwi.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-rtwi.onrender.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        });

        if (!response.ok){
            throw new Error('Failed to post data to the server')
        }

        return await response.json()
    },

    update: async (id: string) => {
        const response = await fetch(`https://car-inventory-rtwi.onrender.com/api/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        });

        if (!response.ok){
            throw new Error('Failed to change data to the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-inventory-rtwi.onrender.com/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },


        });

        if (!response.ok){
            throw new Error('Failed to delete data from the server')
        }

        return await response.json()
    },

}