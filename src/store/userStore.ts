import { defineStore } from 'pinia'
import { odooStore } from './odooStore'
import { ref } from 'vue';


export interface User {
    id: number,
    name: string,
    correo: string,
    imagenQR?: string,
}


export const useUserStore = defineStore('userStore', () => {

    const odoo = odooStore();

    const user = ref<User>();

    async function getUserProfile(email: string, password: string) {
        try {
            const { result }: { result: any[] | null } = await odoo.getRecords({ model: 'rutas.choferes', domain: [['correo', '=', email], []] });
            console.log(result);
            if (!result || result.length == 0)
                return false
            user.value = result[0]

            return true
        } catch (error) {
            console.log(error);

            return false;
        }
    }

    async function createUser({ nombres, apellidos, cedula, correo }: { nombres: string, apellidos: string, cedula: string, correo: string }) {
        odoo.createRecords({ model: 'rutas.choferes', data: [{ nombres: 'pruebas', apellidos: 'Posi', cedula: '23000', correo: 'dasda' }] })
    }

    return { getUserProfile, user, createUser }
})