  
export interface AuthResponse {
    usuario: {
        id: number;
    username: string;
    password: string;
    nombre: string;
    apellidos: string;
    rol: number;
    idCentros: number;
    },
    token: string
}
