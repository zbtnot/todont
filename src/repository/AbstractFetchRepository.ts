export default abstract class AbstractFetchRepository {
    protected options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
