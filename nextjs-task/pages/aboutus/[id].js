import { useRouter } from 'next/router';

const details = [
    { id: '1', name: 'Yash', role: 'Senior Developer' },
    { id: '2', name: 'Vaibhav', role: 'Backend Developer'},
    { id: '3', name: 'Chaitanya', role: 'Frontend Developer'}
];

function DeveloperPage() {
    const router = useRouter();
    const {id} = router.query;

    const developer = details.find((dev) => dev.id === id);

    if (!developer) {
        return <h1>Developer doesn't exist</h1>
    }

    return (
        <div>
            <h1>{developer.name}</h1>
            <h2>{developer.role}</h2>
        </div>
    )
};

export default DeveloperPage;