export class RotasApi {
    static baseUrl: string = 'https://localhost:5001/api';
    static escola: string = `${RotasApi.baseUrl}/escola`;
    static escolaId: string = `${RotasApi.baseUrl}/escola/:escolaId`;
    static turma: string = `${RotasApi.baseUrl}/escola/:escolaId/turma`;
    static turmaId: string = `${RotasApi.baseUrl}/escola/:escolaId/turma/:id`;
}