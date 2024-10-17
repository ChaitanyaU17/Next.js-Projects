// pages/new-meetup/index.js
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    async function addMeetupHandler(enteredMeetupData) {
        try {
            const response = await fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(enteredMeetupData),
                headers: {
                  'Content-Type': 'application/json',
                },
              });              

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            console.log('Response data:', data);

            // Optionally, you can redirect to the homepage or a success page here
            // Example using Next.js router:
            // router.push('/');
        } catch (error) {
            console.error('Error adding meetup:', error);
        }
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
