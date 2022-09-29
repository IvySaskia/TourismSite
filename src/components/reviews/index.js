import React from "react";

const Reviews = ({ listReviews }) => {

  return (
    listReviews.map((_, index) => {
      return (
        <p key={ index }>Reviews { index }</p>
      );
    })
  );
};

export default Reviews;
