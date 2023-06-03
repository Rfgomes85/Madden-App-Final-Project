import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);  // State variable for storing reviews
  const [newReview, setNewReview] = useState({ name: '', comment: '' });  // State variable for new review form
  const [editingReviewId, setEditingReviewId] = useState(null);  // State variable for the ID of the review being edited
  const [editingReview, setEditingReview] = useState({ name: '', comment: '' });  // State variable for the review being edited
  const [maddenVideos, setMaddenVideos] = useState([]);  // State variable for storing Madden videos

  useEffect(() => {
    fetchReviews();  // Fetch reviews when the component mounts
    fetchMaddenVideos();  // Fetch Madden videos when the component mounts
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://645fc906fe8d6fb29e262195.mockapi.io/reviews');
      setReviews(response.data);  // Update the reviews state variable with data from the API
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async () => {
    try {
      const response = await axios.post('https://645fc906fe8d6fb29e262195.mockapi.io/reviews', newReview);
      setReviews([...reviews, response.data]);  // Add the new review to the reviews state variable
      setNewReview({ name: '', comment: '' });  // Reset the new review form
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReview = async (id) => {
    try {
      await axios.delete(`https://645fc906fe8d6fb29e262195.mockapi.io/reviews/${id}`);
      const updatedReviews = reviews.filter((review) => review.id !== id);
      setReviews(updatedReviews);  // Update the reviews state variable by removing the deleted review
    } catch (error) {
      console.log(error);
    }
  };

  const editReview = async (id, updatedReview) => {
    try {
      await axios.put(`https://645fc906fe8d6fb29e262195.mockapi.io/reviews/${id}`, updatedReview);
      const updatedReviews = reviews.map((review) =>
        review.id === id ? { ...review, ...updatedReview } : review
      );
      setReviews(updatedReviews);  // Update the reviews state variable by replacing the edited review
    } catch (error) {
      console.log(error);
    }
  };

  const startEditing = (id, name, comment) => {
    setEditingReviewId(id);  // Set the ID of the review being edited
    setEditingReview({ name, comment });  // Set the review being edited
  };

  const cancelEditing = () => {
    setEditingReviewId(null);  // Reset the review ID being edited
    setEditingReview({ name: '', comment: '' });  // Reset the review being edited
  };

  const saveEditing = () => {
    editReview(editingReviewId, editingReview);  // Update the review with the edited data
    setEditingReviewId(null);  // Reset the review ID being edited
    setEditingReview({ name: '', comment: '' });  // Reset the review being edited
  };

  const fetchMaddenVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwZA57vCspaLjDqetcr0buAJ3EKZr7eA&part=snippet&type=video&q=Madden'
      );
      setMaddenVideos(response.data.items);  // Update the Madden videos state variable with data from the API
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomMaddenVideo = () => {
    if (maddenVideos.length > 0) {
      const randomIndex = Math.floor(Math.random() * maddenVideos.length);
      return maddenVideos[randomIndex];  // Get a random Madden video from the state variable
    }
    return null;
  };

  return (
    <div>
      <h1>Reviews</h1>

      <div className="card">
        <div className="card-body">
          <h2>Add a Review</h2>
          <form>
            <div>
              <label>Name</label>
              <input
                type="text"
                className="input-box"
                placeholder="Enter your name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}  // Update the name value of newReview
              />
            </div>
            <div className="form-group">
              <label>Comment</label>
              <textarea 
                className="comment"
                rows="3"
                placeholder="Enter your comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}  // Update the comment value of newReview
              />
            </div>
            <button className="custom-button" onClick={addReview}>
              Add Review
            </button>
          </form>
        </div>
      </div>

      <h2>All Reviews</h2>
      <ul className="star-bullets">
        {reviews.map((review) => (
          <li key={review.id}>
            {editingReviewId === review.id ? (
              <>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingReview.name}
                    onChange={(e) => setEditingReview({ ...editingReview, name: e.target.value })}  // Update the name value of editingReview
                  />
                </div>
                <div className="form-group">
                  <label>Comment</label>
                  <textarea
                    className="input-box"
                    rows="3"
                    value={editingReview.comment}
                    onChange={(e) => setEditingReview({ ...editingReview, comment: e.target.value })}  // Update the comment value of editingReview
                  />
                </div>
                <button className="custom-button" onClick={saveEditing}>
                  Save
                </button>
                <button className="custom-button" onClick={cancelEditing}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>{review.name}</h3>
                <p>{review.comment}</p>
                <button className="custom-button" onClick={() => deleteReview(review.id)}>
                  Delete Review
                </button>
                <button className="custom-button" onClick={() => startEditing(review.id, review.name, review.comment)}>
                  Edit Review
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h2>Random Madden Video</h2>
      <div>
        {maddenVideos.length > 0 ? (
          <div>
            <h3>{getRandomMaddenVideo().snippet.title}</h3>
            <iframe
              title=" Madden Highlights"
              width="800"
              height="600"
              src={`https://www.youtube.com/embed/${getRandomMaddenVideo().id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default Reviews;
