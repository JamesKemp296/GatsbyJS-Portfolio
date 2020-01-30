import React from "react"

const GithubFilters = ({
  filteredLanguages,
  search,
  created,
  updated,
  handleLanguage,
  handleUpdated,
  handleCreated,
  handleSearch,
}) => {
  return (
    <div id="github-filters-container">
      <input
        id="github-search"
        type="text"
        name="search"
        placeholder="Search"
        autoComplete="off"
        onChange={e => handleSearch(e.target.value)}
        value={search}
      />
      <div id="github-filters">
        <select
          className="github-filter"
          onChange={e => handleLanguage(e.target.value)}
          onBlur={e => handleLanguage(e.target.value)}
        >
          <option value="all">All Languages</option>
          {filteredLanguages}
        </select>
        <button className="github-filter" onClick={handleCreated}>
          Created {created ? "(oldest)" : "(newest)"}
        </button>
        <button className="github-filter" onClick={handleUpdated}>
          Updated {updated ? "(oldest)" : "(newest)"}
        </button>
      </div>
    </div>
  )
}

export default GithubFilters
