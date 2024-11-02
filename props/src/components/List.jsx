import React from 'react'
import "./Netflix.css"

const List = ({ data }) => {

  const { id, img_url, name, rating, description, cast, genre, watch_url } = data

  return (
    <div>
      <li className='card'>
        <div>
          <div>
            <img src={img_url} alt={name} />
          </div>
          <div className='card-content'>
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank">
              <button
                style={{
                  padding: "1.2rem 1.3rem",
                  fontSize: "1.6rem",
                  border: "none",
                  backgroundColor: "#003b99",
                  color: "white"
                }}>Watch Now</button>
            </a>
          </div>
        </div>
      </li>
    </div>
  )
}

export default List