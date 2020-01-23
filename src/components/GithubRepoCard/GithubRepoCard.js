import React from "react"
import moment from "moment"

const GithubRepoCard = ({
  id,
  name,
  language,
  url,
  created_at,
  updated_at,
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" key={id}>
      <div className="github-card shadow-pop-tr">
        <h5>{name}</h5>
        <p className="github-text">{language || "CSS"}</p>
        <div id="github-dates">
          <p className="github-text">
            Created:{" "}
            {moment(created_at)
              .startOf("day")
              .fromNow()}
          </p>
          <p className="github-text">
            Updated:{" "}
            {moment(updated_at)
              .startOf("day")
              .fromNow()}
          </p>
        </div>
      </div>
    </a>
  )
}

export default GithubRepoCard
