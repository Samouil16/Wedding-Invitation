import React, { useState } from 'react';

const RsvpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Response:', response);

    const formData = { name, email, response };
    const repoOwner = 'Samouil16';
    const repoName = 'wedding-Yiannis-Michalia';
    const accessToken = '';

    try {
      const response = await fetch('https://api.github.com/repos/${repoOwner}/${repoName}/issues', 
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'New RSVP Submission',
          body: JSON.stringify(formData)
        })
      });

      if (response.ok) {
        setShowModal(true);
      } else {
        console.error('Failed to create issue: ', response.statusText);
      }
    } catch (error) {
      console.error("Error creating issue: ", error);
    }

  };

  return (
    <section className="bg-gray-200 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Θα έρθεις;</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Ονοματεπώνυμο"
          className="w-full border-gray-300 rounded-md mb-4 p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-gray-300 rounded-md mb-4 p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className='border-black-200'><br/><br/>Θα έρθεις στον γάμο;<br/><br/></label>
        <select
          className="w-full border-gray-300 rounded-md mb-4 p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          required
        >
          <option value="Yes">Ναί, εννοείται!</option>
          <option value="No">Συγνώμη, δεν θα μπορέσω.</option>
        </select>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Υποβολή
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Content based on response */}
          {response === 'Yes' && (
            <>
              <h2 className="text-xl font-bold mb-4">Ευχαριστούμε για την απάντηση!</h2>
              <p>Ανυπομονούμε να σε δούμε στον γάμο!</p>
            </>
          )}
          {response === 'No' && (
            <>
              <h2 className="text-xl font-bold mb-4">Θα μας λείψεις!</h2>
              <p>Κρίμα που δεν θα έρθεις, αλλά καταλαβαίνουμε.</p>
            </>
          )}

          {/* Close button */}
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition duration-300"
          >
            Κλείσιμο
          </button>
        </div>
      </div>
      )}

    </section>
  );
};

export default RsvpForm;
