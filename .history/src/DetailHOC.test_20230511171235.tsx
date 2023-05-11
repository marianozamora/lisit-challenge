
import { formatString } from './DetailHOC';

vi.mock('react-router-dom', () => ({
    useParams: vi.fn(),
    useNavigate: vi.fn(),
}));

vi.mock('./hooks/useSwapi', () => ({
    useGenerateRequestById: vi.fn(),
    useGetAllResidents: vi.fn(),
}));


describe('formatString', () => {
    test('formats a string correctly', () => {
        const result = formatString('test_string');
        expect(result).toBe('Test String');
    });
});
