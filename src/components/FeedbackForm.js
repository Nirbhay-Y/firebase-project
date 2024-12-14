import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (!user) navigate('/login');
  });

  const submitFeedback = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'feedback'), {
        feedback,
        user: auth.currentUser.email
      });
      alert('Feedback Submitted!');
      setFeedback('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <form onSubmit={submitFeedback}>
        <textarea placeholder="Your feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
