import React from 'react';
import '../App.css'
import Profile from '.'
import ProfileReviews from '.'
const ProfileReview = ({ profileReviews, books}) =>
    <div className="profile" >
    {(profileReviews || []).map(x =>
        <Profile 
        // books = {books}
        reviewId ={x.objectId}
        profile={x}
        />
    )}
    {/* {(books || []).map(x =>
        <ProfileReviews
         key ={x.objectId}
        book={x}
        />
    )} */}
</div>

  export default ProfileReview;