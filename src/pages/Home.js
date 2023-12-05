import React from 'react';

export default function Home({ data }) {
  return (
    <div>
      <h1 className="page-title">
        {data.homeTitle}
      </h1>
      <p>{data.homeParagraph}</p>
      <p>{data.homeParagraph1}</p>
      <p>{data.homeParagraph2}</p>
      <p>{data.homeParagraph3}</p>
      <p>{data.homeParagraph4}</p>
    </div>
  );
}
